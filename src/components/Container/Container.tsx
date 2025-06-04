import { type PropsWithChildren } from 'react';
import './Container.css';


const Container = ({ children, ...props }: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
    return <div className="container" {...props}>{children}</div>;
};

export default Container;