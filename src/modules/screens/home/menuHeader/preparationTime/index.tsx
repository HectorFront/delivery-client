/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from "./styles";
/** @name External */
import Colors from "layout/vars/colors";
import {Card, MaterialIcon} from "helpers";

type PreparationTimeProps = {
    menuHeaderHeight: number | undefined
}

export const PreparationTime: ElementType = memo(({ menuHeaderHeight }: PreparationTimeProps): JSX.Element =>
    <Card style={{
        minWidth: 150,
        borderRadius: 12,
        height: menuHeaderHeight,
        border: `1px solid ${Colors.DEFAULT}`
    }}>
        <S.ContainerPreparationTime>
           <span style={{
               color: Colors.DEFAULT,
               display: 'flex',
               alignItems: 'center',
           }}>
                <MaterialIcon
                    icon='history_toggle_off'
                    color={Colors.DEFAULT}
                />
               &nbsp;{38} - {48} min
           </span>
            <span style={{ fontSize: 14 }}>Tempo de preparo</span>
        </S.ContainerPreparationTime>
    </Card>
);