import {useState} from "react";

import ApproveButon from "./components/ApproveButon";
import BridgeButton from "./components/BridgeButton";

import {TokenMenuContextProvider}   from "./contexts/TokenMenuContext";
import {NetworkMenuContextProvider} from "./contexts/NetworkMenuContext";

import SourceGrid, {AMOUNTS_FROM_OPTIONS} from "./SourceGrid";
import DestinationGrid from "./DestinationGrid";

import {Grid} from "@components/Grid";

import {BigNumber} from "ethers";

const boxStyle = {
    border : `border border-solid border-1 border-purple-500`,
}



function BridgePageContent(props: {className?: string}) {
    const [amountFrom, setAmountFrom] = useState(AMOUNTS_FROM_OPTIONS[3]);

    const [approved, setApproved] = useState<boolean>(true);
    const [amountOut, setAmountOut] = useState<BigNumber>(BigNumber.from(0));

    return(
        <div className={"w-1/2"}>
            <div className={`${boxStyle.border} rounded-[50px] px-4 h-40`}>
                <SourceGrid
                    selectedAmountFrom={amountFrom}
                    setSelectedAmountFrom={setAmountFrom}
                />
            </div>

            <div className={"h-10"} />

            <div className={`${boxStyle.border} rounded-[50px] px-4 h-40`}>
                {amountFrom && <DestinationGrid
                    amountIn={amountFrom?.amount || BigNumber.from(0)}
                    amountOut={amountOut}
                    setAmountOut={setAmountOut}
                />}
            </div>
            
            {/* <Grid className={"grid-flow-col"} rows={4} cols={3} gapX={4} gapY={4}>
                <div className={"col-span-1"}>
                    <SourceGrid
                        selectedAmountFrom={amountFrom}
                        setSelectedAmountFrom={setAmountFrom}
                    />
                </div>
                <div className={"col-span-1"}/>
                <div className={"col-span-1"}>
                    {amountFrom && <DestinationGrid
                        amountIn={amountFrom?.amount || BigNumber.from(0)}
                        amountOut={amountOut}
                        setAmountOut={setAmountOut}
                    />}
                </div>
            </Grid> */}
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