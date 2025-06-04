import type { PropsWithChildren } from 'react';
import './Subtitle.css';

const sizes = ['XL', 'S', 'M', 'L'] as const;
type Size = typeof sizes[number] | (string & {});

export interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: Size;
    variant?: 'regular' | 'bold' | 'semibold';
}

export const Subtitle = ({
    size = 'M',
    variant = 'regular',
    children,
    ...props
}: PropsWithChildren<SubtitleProps>) => {
    let className = `typo-subtitle typo-subtitle-${variant}`;
    let styleCustomSize: React.CSSProperties | undefined = undefined;
    if (typeof size === 'string' && (sizes as readonly string[]).includes(size)) {
        className += ` typo-subtitle-${size.toLowerCase()}`;
    } else {
        styleCustomSize = { fontSize: size };
    }

    return (
        <p className={className} {...(styleCustomSize && { style: { ...styleCustomSize } })} {...props}>
            {children}
        </p>
    );
}
export default Subtitle;