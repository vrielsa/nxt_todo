import {InputHTMLAttributes, ReactNode} from "react"
import classNames from "classnames"
import {UseFormReturn} from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>, Partial<UseFormReturn> {
}

function Input({className, register, ...props}: IInputProps): ReactNode {
    const classes = classNames("peer bg-white h-10 w-full border-b border-gray placeholder-transparent focus:outline-none focus:border-rose", className)
    return <input className={classes} { ...register(props?.name ?? '')} {...props} />
}

export default Input
