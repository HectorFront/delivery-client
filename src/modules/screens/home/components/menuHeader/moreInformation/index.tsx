/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {OffCanvasBody, OffCanvasContainer, OffCanvasHeader} from "components";

export const ID_OFF_CANVAS_MORE_INFORMATION = 'moreInformationOffCanvas';

export const MoreInformation: ElementType = memo((_props): JSX.Element =>
    <>
        <OffCanvasContainer id={ID_OFF_CANVAS_MORE_INFORMATION}>
            <OffCanvasHeader/>
            <OffCanvasBody>
                Conteúdo
            </OffCanvasBody>
        </OffCanvasContainer>
        <S.ContainerMoreInformation>
            <S.TextMoreInformation
                data-bs-toggle="offcanvas"
                data-bs-target={`#${ID_OFF_CANVAS_MORE_INFORMATION}`}
            >
                Ver mais informações
            </S.TextMoreInformation>
        </S.ContainerMoreInformation>
    </>
);