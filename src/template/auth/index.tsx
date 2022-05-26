/** @name Images */
import LogoSmall from 'assets/logos/small.svg';
import BackgroundFood from 'assets/svg/scene_food.svg';
/** @name Styled */
import * as S from './styles';
import * as Keyframe from './keyframes';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

interface AuthProps {
    children: ReactNode
}

export const Auth: ElementType = memo(({ children }: AuthProps): JSX.Element => {
    return (
        <S.ContainerAuth>
            <S.Border/>
            <Keyframe.LogoFloating
                alt="Logo"
                src={LogoSmall}
            />
            <S.ImgFood
                alt="Food"
                src={BackgroundFood}
            />
            {children}
        </S.ContainerAuth>
    )
});