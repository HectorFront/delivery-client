/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Styled */
import * as S from '../styles';
/** @name Internal */
import {ContinueWith} from "../components";
import {reducer} from "utils/reducer/useReducer";
/** @name External */
import {Row, Col, Button, Box} from "helpers";

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
const INITIAL_STATE = {
    user: null,
    password: null
}

const ClientLogin = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <S.Container className="container-xxl">
            <Col cols="12 12 12 5 5">
                <Box className="shadow-lg">
                    <S.Form>
                        <S.Title>Como prefere continuar</S.Title>
                        <ContinueWith type="google" className="mt-3 mb-3"/>
                        <ContinueWith type="facebook"/>
                        <Row className="mt-5 mb-3">
                            <Col cols="6 6 6 6 6 mt-2">
                                <Button
                                    size="lg"
                                    icon="smartphone"
                                    style={{width: '100%'}}
                                >
                                    Celular
                                </Button>
                            </Col>
                            <Col cols="6 6 6 6 6 mt-2">
                                <Button
                                    size="lg"
                                    icon="mail"
                                    style={{width: '100%'}}
                                >
                                    E-mail
                                </Button>
                            </Col>
                        </Row>
                        <S.RegisterUser>
                            <span>Não possui uma conta? Crie já!</span>
                            <S.Link>Cadastrar</S.Link>
                        </S.RegisterUser>
                    </S.Form>
                </Box>
            </Col>
        </S.Container>
    )
});

export default withRouter(ClientLogin);