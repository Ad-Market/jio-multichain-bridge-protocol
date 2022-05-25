
export interface InputSectionProps {
    selectedItem:    any,
    setSelectedItem: any
}


export default function InputSection({ selectedItem, setSelectedItem }: InputSectionProps) {

    return (
        <div className={"flex items-center justify-center"}>
            <div className={"w-60 max-w-xs"}>
                <div className={"space-y-1"}>
                    <span className="block text-sm font-medium text-left">FROM</span>

                    <div className="relative">
                        <span className="inline-block w-60 border-b-4 border-white-500 h-14 text-left">
                            {/* <input type="number" value={`${amount}`} onChange={onChange} /> */}
                            <input className="bg-transparent w-60" type="number" value={selectedItem?.label || ""} onChange={e => setSelectedItem(e.target.value)} />
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}