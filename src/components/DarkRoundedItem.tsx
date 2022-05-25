import {classNames} from "@utils";

const CLASS_NAME: string = classNames(
    "flex"
)

export default function DarkRoundedItem({children}) {
    return (
        <div className={CLASS_NAME}>
            {children}
        </div>
    )
}