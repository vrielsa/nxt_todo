import {ButtonHTMLAttributes, ReactNode} from "react"
import classNames from "classnames"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

function Button({children, className, ...props}: IButtonProps) {
    const classes = classNames("p-2 rounded-md bg-blue text-white focus:ring-blue focus:ring-1 focus:ring-offset-2", className)

    return (
        <button className={classes} {...props}>
            { children }
        </button>
    )
}

export default Button
