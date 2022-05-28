import {useState} from "react";

import ApproveButon from "./components/ApproveButon";
import BridgeButton from "./components/BridgeButton";
import { FiArrowDown } from 'react-icons/fi'
import {TokenMenuContextProvider}   from "./contexts/TokenMenuContext";
import {NetworkMenuContextProvider} from "./contexts/NetworkMenuContext";

import SourceGrid, {AMOUNTS_FROM_OPTIONS} from "./SourceGrid";
import DestinationGrid from "./DestinationGrid";

import {BigNumber} from "ethers";

const style = {
    card : `border border-solid border-1 border-purple-600 border-opacity-50 rounded-[30px] h-40`,
    divider: `rounded-[50px] text-sm p-3 bg-gradient-to-r from-[#0052D4] to-[#6FB1FC]`
}


function BridgePageContent(props: {className?: string}) {
    const [amountFrom, setAmountFrom] = useState(AMOUNTS_FROM_OPTIONS[3]);

    const [approved, setApproved] = useState<boolean>(true);
    const [amountOut, setAmountOut] = useState<BigNumber>(BigNumber.from(0));

    return(
        <div className={"w-2/3"}>
            <div className="w-full h-15">
                EVM
            </div>

            <div className={`${style.card}`}>
                <SourceGrid
                    selectedAmountFrom={amountFrom}
                    setSelectedAmountFrom={setAmountFrom}
                />
            </div>

            <div className={"h-5"} />

            <div className="self-auto h-15">
                <button className={`${style.divider}`} >
                    <FiArrowDown />
                </button>
            </div>
            
            <div className={"h-5"} />

            <div className={`${style.card}`}>
                {amountFrom && <DestinationGrid
                    amountIn={amountFrom?.amount || BigNumber.from(0)}
                    amountOut={amountOut}
                    setAmountOut={setAmountOut}
                />}
            </div>

            <div className={"h-10"} />

            <ApproveButon
                amountFrom={amountFrom?.amount || BigNumber.from(0)}
                approved={approved}
                setApproved={setApproved}
            />
            <BridgeButton
                amountFrom={amountFrom?.amount || BigNumber.from(0)}
                approved={approved}
                amountOut={amountOut}
            />
        </div>
    )
}

export function BridgePage(props: {className?: string}) {
    return (
        <NetworkMenuContextProvider>
            <TokenMenuContextProvider>
                <BridgePageContent className={props.className}/>
            </TokenMenuContextProvider>
        </NetworkMenuContextProvider>
    )
}