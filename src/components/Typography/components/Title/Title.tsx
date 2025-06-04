import type { PropsWithChildren } from 'react';
import './Title.css';

const sizes = ['XL', 'S', 'M', 'L'] as const;
type Size = typeof sizes[number] | (string & {});

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    size?: Size;
    variant?: 'regular' | 'bold' | 'semibold';
}

export const Title = ({
    size = 'M',
    variant = 'regular',
    children,
    ...props
}: PropsWithChildren<TitleProps>) => {
    let className = `typo-title typo-title-${variant}`;
    let styleCustomSize: React.CSSProperties | undefined = undefined;
    if (typeof size === 'string' && (sizes as readonly string[]).includes(size)) {
        className += ` typo-title-${size.toLowerCase()}`;
    } else {
        styleCustomSize = { fontSize: size };
    }

    return (
        <h1 className={className} {...(styleCustomSize && { style: { ...styleCustomSize } })} {...props}>
            {children}
        </h1>
    );
}
export default Title;