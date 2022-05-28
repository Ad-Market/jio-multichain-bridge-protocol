import type {OnClickFunction} from "@utils";

export interface ButtonProps {
    text:      string,
    onClick?:  OnClickFunction,
    disabled?: boolean,
}

export const emptyOnClick: OnClickFunction = () => {}

export default function Button({text, onClick, disabled=false}: ButtonProps) {
    return (
        <div>
            <button
                className={"w-2/5 bg-gradient-to-r from-[#CC90E6] to-[#7E6BFA] text-white text-sm font-bold py-2 px-4 rounded-[10px]"}
                onClick={onClick ?? emptyOnClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    )
}
