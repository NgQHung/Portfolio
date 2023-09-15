import React, {ReactNode} from 'react';

interface ILayout {
    children: ReactNode;
    className?: String;
}

const Layout: React.FC<ILayout> = ({children, className = ''}) => {
    return (
        <div
            className={`z-0 inline-block h-full w-full bg-white p-32 dark:bg-black 
            xl:p-24 lg:p-16 md:p-12 sm:p-8   ${className}`}>
            {children}
        </div>
    );
};

export default Layout;
