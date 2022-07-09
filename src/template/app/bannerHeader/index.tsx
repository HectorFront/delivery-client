/** @name Dependencies */
import {memo} from "react";
/** @name Internal */
import * as S from './styles';

export const BannerHeader = memo(({ ...props }) =>
    <S.ContainerOpacity>
        <S.Banner image={'https://images4.alphacoders.com/276/276908.jpg'}/>
    </S.ContainerOpacity>
);