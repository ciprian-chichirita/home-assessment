import type { PropsWithChildren } from 'react';
import './Body.css';

const sizes = ['S', 'M', 'L'] as const;
type Size = typeof sizes[number] | (string & {});

export interface BodyProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: Size;
    variant?: 'regular' | 'bold' | 'semibold';
}

export const Body = ({
    size = 'M',
    variant = 'regular',
    children,
    className,
    ...props
}: PropsWithChildren<BodyProps>) => {
    let internalClassName = `typo-body typo-body-${variant}`;
    let styleCustomSize: React.CSSProperties | undefined = undefined;
    if (typeof size === 'string' && (sizes as readonly string[]).includes(size)) {
        internalClassName += ` typo-body-${size.toLowerCase()}`;
    } else {
        styleCustomSize = { fontSize: size };
    }

    if (className) {
        internalClassName += ` ${className}`;
    }

    return (
        <span className={internalClassName} {...(styleCustomSize && { style: { ...styleCustomSize } })} {...props}>
            {children}
        </span>
    );
}
export default Body;