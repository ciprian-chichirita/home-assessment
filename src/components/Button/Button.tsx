import type { PropsWithChildren } from 'react';
import './Button.css';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary';
}

export const Button = ({
    variant = 'primary',
    disabled = false,
    children,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    const className = `btn btn-${variant}`;

    return (
        <button type="button" className={className} disabled={disabled} tabIndex={!disabled ? 0 : -1} {...props}>
            {children}
        </button>
    );
}
export default Button;