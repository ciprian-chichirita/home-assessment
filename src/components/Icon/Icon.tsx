import type { PropsWithChildren } from 'react';
import './Icon.css';

const sizes = ['S', 'M', 'L'] as const;
type Size = typeof sizes[number] | (string & {});

export interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
    size?: Size;
    src: string;
}

export const Icon = ({
    size = 'M',
    src,
    ...props
}: PropsWithChildren<IconProps>) => {
    let className = `icon`;
    let styleCustomSize: React.CSSProperties | undefined = undefined;
    if (typeof size === 'string' && (sizes as readonly string[]).includes(size)) {
        className += ` icon-${size.toLowerCase()}`;
    } else {
        styleCustomSize = { width: size, height: size };
    }

    return (
        <img src={src} className={className} {...(styleCustomSize && { style: { ...styleCustomSize } })} {...props} />
    );
}
