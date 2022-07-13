/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import * as S from './styles';
import {reducer} from "utils/reducer/useReducer";
/** @name External */
import Colors from 'layout/vars/colors';
import {Row, Card, Col, InputMenuSearch, MaterialIcon} from "helpers";

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_STATE = {
}

const MENU_HEADER_HEIGHT = 70;

const ClientLogin = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <S.Content>
            <Row>
                <Col cols='12 12 12 8 8'>
                    <InputMenuSearch
                        placeholder="Buscar produto do cardápio"
                    />
                    <br/>
                </Col>
                <Col cols='12 12 12 3 3'>
                    <Card style={{
                        maxWidth: 280,
                        height: MENU_HEADER_HEIGHT
                    }}>
                        <S.ContainerWayReceiving>
                            <S.ContentWayReceiving>
                                <span style={{color: '#6a6a6a'}}>Receber pedido como</span>
                                <span style={{
                                    color: '#b1b1b1',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                        <MaterialIcon icon="two_wheeler"/>&nbsp;Entrega
                                    </span>
                            </S.ContentWayReceiving>
                            <MaterialIcon
                                size={30}
                                color='#b1b1b1'
                                icon='keyboard_arrow_down'
                            />
                        </S.ContainerWayReceiving>
                    </Card>
                    <br/>
                </Col>
                <Col cols='12 12 12 1 1'>
                    <Card style={{
                        minWidth: 150,
                        borderRadius: 12,
                        height: MENU_HEADER_HEIGHT,
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
                </Col>
            </Row>
        </S.Content>
    )
});

export default withRouter(ClientLogin);