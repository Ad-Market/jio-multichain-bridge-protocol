import InputSection from "@components/InputItem";


interface AmountFromInputProps {
    selected: any
    setSelected: any
}

export default function AmountFromInput({selected, setSelected}: AmountFromInputProps) {
    return(
        <>
            <InputSection
                selectedItem={selected}
                setSelectedItem={setSelected}
            />
        </>
    )
}