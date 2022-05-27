import {useMetaMask} from "metamask-react";
import {useEffect} from "react";

import type {SetStateFunction} from "@utils";

import {ChainId, Networks, supportedNetworks} from "@synapseprotocol/sdk";

import {useNetworkMenu} from "./hooks/useNetworkMenu";
import {useSourceTokenMenu} from "./hooks/useTokenMenu";

// import AmountFromDropdown from "./components/AmountFromDropdown";
import type {AmountDropdownItem} from "./components/AmountFromDropdown";

import {BigNumber} from "ethers";

import {BridgeDirections} from "./Directions";
import AmountFromInput from "./components/AmoutFromInput";

export const AMOUNTS_FROM_OPTIONS: AmountDropdownItem[] = [5, 10, 25, 50, 75, 100, 500, 1000].map((n) => {
    let amount = BigNumber.from(n);

    return {
        amount,
        label:    amount.toString(),
        disabled: false,
        key:      amount.toString(),
    }
})

interface SourceNetworkGridProps {
    selectedAmountFrom:    AmountDropdownItem,
    setSelectedAmountFrom: SetStateFunction<AmountDropdownItem>
}

export default function SourceGrid(props: SourceNetworkGridProps) {
    const {
        selectedAmountFrom,
        setSelectedAmountFrom
    } = props;

    const allNetworks = supportedNetworks();

    const {status, chainId} = useMetaMask();

    // const [connectedNetwork,] = useState<Networks.Network>(
    //     status === "connected" ? Networks.fromChainId(BigNumber.from(chainId).toNumber()) : null
    // );

    console.log({status, chainId});

    const {
        NetworkMenu,
        networkMenuProps
    } = useNetworkMenu({
        networks:  allNetworks,
        direction: BridgeDirections.FROM
    });

    // useEffect(() => {
    //     if (status === "connected") {
    //         networkMenuProps.setSelected(networkMenuProps.dropdownItems.find((n) =>
    //             BigNumber.from(chainId).eq(n.chainId)
    //         ))
    //     }
    // }, [status, chainId])

    useEffect(() => {
        if (status === "connected") {
            networkMenuProps.setSelected(networkMenuProps.dropdownItems.find(n =>
                BigNumber.from(chainId).eq(n.chainId)
            ))
        }
    }, [chainId, status, networkMenuProps]);

    const {
        TokenMenu,
        tokenMenuProps
    } = useSourceTokenMenu();

    return (
        <div className="flex flex-wrap place-content-center h-full w-full gap-10">
            <div>
                <AmountFromInput
                    selected={selectedAmountFrom}
                    setSelected={setSelectedAmountFrom}
                />
            </div>

            <div />

            <div className="flex flex-wrap place-content-center gap-5">
                <NetworkMenu {...networkMenuProps} />

                <TokenMenu {...tokenMenuProps} /> 
            </div>
        </div>
    )
}