import {BigNumber} from "ethers";

import DarkRoundedItem from "@components/DarkRoundedItem";
import DropdownMenu, {DropdownItem} from "@components/DropdownMenu";


export interface AmountDropdownItem extends DropdownItem {
    amount: BigNumber,
}

interface AmountDropdownProps {
    selected:    AmountDropdownItem,
    setSelected: any,
    items:       AmountDropdownItem[]
}

export default function AmountFromDropdown({selected, setSelected, items}: AmountDropdownProps) {
    return(
        <>
            <DropdownMenu
                title={"FROM"}
                selectedItem={selected}
                setSelectedItem={setSelected}
                items={items}
            />
        </>
    )
}