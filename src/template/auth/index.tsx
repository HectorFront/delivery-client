/** @name Dependencies */
import React, { ReactNode } from 'react';

interface AuthProps {
    children: ReactNode
}

export const Auth: React.ElementType = React.memo(({ children }: AuthProps): JSX.Element =>
    <div>{children}</div>
);