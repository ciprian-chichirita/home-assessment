import type { PropsWithChildren } from 'react';
import './Icon.css';

const sizes = ['S', 'M', 'L'] as const;
type Size = typeof sizes[number] | (string & {});

const colors = ['green'] as const;
type Colors = typeof colors[number] | (string & {});

export interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
    size?: Size;
    color?: Colors;
    src: string;
}

export const Icon = ({
    size = 'M',
    color,
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

    if (typeof color === 'string' && (colors as readonly string[]).includes(color)) {
        className += ` icon-${color.toLowerCase()}`;
    } else if (typeof color === 'string') {
        styleCustomSize = { color: color };
    }

    return (
        <img src={src} className={className} {...(styleCustomSize && { style: { ...styleCustomSize } })} {...props} />
    );
}

export default Icon;
