/** @name Dependencies */
import {ElementType, memo, ReactNode} from 'react';
import {Navbar} from "./navbar";
import {BannerHeader} from "./bannerHeader";

interface AppProps {
    children: ReactNode
}

export const App: ElementType = memo(({ children }: AppProps): JSX.Element => {
    return (
        <>
            <Navbar/>
            <BannerHeader/>
            <div>{children}</div>
        </>
    );
});