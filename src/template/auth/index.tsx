/** @name Images */
import LogoSmall from 'assets/logos/small.svg';
import BackgroundFood from 'assets/svg/scene_food.svg';
/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

interface AuthProps {
    children: ReactNode
}

export const Auth: ElementType = memo(({ children }: AuthProps): JSX.Element => {
    return (
        <S.ContainerAuth>
            <S.Border/>
            <img
                alt="Logo"
                width={120}
                height="auto"
                src={LogoSmall}
                style={{right: 100, top: 0, position: 'absolute'}}
            />
            <img
                alt="Food"
                width="auto"
                height="100%"
                src={BackgroundFood}
                style={{right: 0, position: 'absolute'}}
            />
            {children}
        </S.ContainerAuth>
    )
});