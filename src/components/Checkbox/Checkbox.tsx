
import { type PropsWithChildren } from "react";
import "./Checkbox.css";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "primary"; // add more like: "secondary", etc.
    indeterminate?: boolean;
    index?: number;
}

export const Checkbox = ({
    variant = "primary",
    disabled = false,
    indeterminate = false,
    checked,
    children,
    ...props
}: PropsWithChildren<CheckboxProps>) => {
    const className = `checkbox checkbox-${variant} checkbox-${!disabled ? 'normal' : 'disabled'}`;
    const checkSign = indeterminate && !checked ? "indeterminate" : "checkmark";

    return (
        <label className={className} tabIndex={!disabled ? 0 : -1}>
            <input type="checkbox" disabled={disabled} checked={checked} {...props} />
            <span className={checkSign}></span>
            {children}
        </label>
    );
}
export default Checkbox;