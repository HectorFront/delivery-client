/** @name Dependencies */
import React, { ReactNode } from 'react';

interface PropsApp {
    location: {
        pathname: string
    },
    children: ReactNode
}

export const App: React.ElementType = React.memo(({ children }: PropsApp): JSX.Element => {
    return (
        <div>{children}</div>
    );
});