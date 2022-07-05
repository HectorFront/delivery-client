/** @name Dependencies */
import React, { ReactNode } from 'react';
import {Navbar} from "./navbar";

interface AppProps {
    children: ReactNode
}

export const App: React.ElementType = React.memo(({ children }: AppProps): JSX.Element => {
    return (
        <>
            <Navbar/>
            <div>{children}</div>
        </>
    );
});