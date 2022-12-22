/** @name Dependencies */
import {ElementType, memo} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {Card, MaterialIcon} from "components";

type WayReceivingProps = {
    height: number | undefined
}

export const WayReceiving: ElementType = memo(({ height }: WayReceivingProps): JSX.Element =>
    <Card
        className='mt-1'
        style={{
            height,
            maxWidth: 280,
        }}
    >
        <S.Container>
            <S.Content>
                <span style={{color: '#6a6a6a'}}>Receber pedido como</span>
                <span style={{
                    color: '#b1b1b1',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <MaterialIcon icon="two_wheeler"/>&nbsp;Entrega
                </span>
            </S.Content>
            <MaterialIcon
                size={30}
                color='#b1b1b1'
                icon='keyboard_arrow_down'
            />
        </S.Container>
    </Card>
);