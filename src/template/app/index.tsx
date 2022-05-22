/** @name Dependencies */
import React, { ReactNode } from 'react';

interface AppProps {
    children: ReactNode
}

export const App: React.ElementType = React.memo(({ children }: AppProps): JSX.Element => {
    return (
        <div>{children}</div>
    );
});