import {LabelHTMLAttributes, ReactNode} from "react"

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode,
    inputName: string,
}

function Label({children, inputName, ...props}: ILabelProps) {
    return (
        <label htmlFor={inputName}
               className="absolute left-0 -top-3.5 text-black text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:text-gray peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
               {...props}>
            {children}
        </label>
    )
}

export default Label