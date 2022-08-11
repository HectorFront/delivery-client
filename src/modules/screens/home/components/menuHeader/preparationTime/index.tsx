/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from "./styles";
/** @name External */
import Colors from "layout/vars/colors";
import {Card, MaterialIcon} from "helpers";

type PreparationTimeProps = {
    menuHeight: number | undefined
}

export const PreparationTime: ElementType = memo(({ menuHeight }: PreparationTimeProps): JSX.Element =>
    <Card style={{
        maxWidth: 150,
        borderRadius: 12,
        height: menuHeight,
        border: `1px solid ${Colors.DEFAULT}`
    }}>
        <S.Container>
           <span style={{
               color: Colors.DEFAULT,
               display: 'flex',
               alignItems: 'center',
           }}>
                <MaterialIcon
                    icon='schedule'
                    color={Colors.DEFAULT}
                />
               &nbsp;{38} - {48} min
           </span>
            <span style={{ fontSize: 14 }}>Tempo de preparo</span>
        </S.Container>
    </Card>
);