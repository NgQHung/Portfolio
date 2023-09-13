import React, {ReactNode} from 'react';

interface ILayout {
    children: ReactNode;
    className?: String;
}

const Layout: React.FC<ILayout> = ({children, className = ''}) => {
    return <div className={`w-full h-full inline-block z-0 bg-white p-32 dark:bg-black  ${className}`}>{children}</div>;
};

export default Layout;
