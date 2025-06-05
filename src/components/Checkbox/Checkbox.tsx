
import { useRef, type PropsWithChildren } from "react";
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
    const inputRef = useRef<HTMLInputElement>(null);
    const className = `checkbox checkbox-${variant} checkbox-${!disabled ? 'normal' : 'disabled'} ${props.readOnly ? "checkbox-read-only" : ""}`;
    const checkSign = indeterminate && !checked ? "indeterminate" : "checkmark";

    const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            if (!disabled) {
                inputRef.current?.click();
            }
        }
    }

    return (
        <label role="button" className={className} tabIndex={!disabled ? 0 : -1} onKeyDown={handleKeyDown}>
            <input ref={inputRef} type="checkbox" disabled={disabled} checked={checked} tabIndex={-1} {...props} />
            <span className={checkSign}></span>
            {children}
        </label>
    );
}
export default Checkbox;