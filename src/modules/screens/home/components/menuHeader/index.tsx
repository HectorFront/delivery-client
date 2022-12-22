/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from './styles';
import {Search} from './search';
import {FilterMenu} from "./filterMenu";
import {WayReceiving} from "./wayReceiving";
import {OrderLocation} from "./orderLocation";
import {PreparationTime} from "./preparationTime";
import {MoreInformation} from "./moreInformation";
/** @name External */
import {Row, Col} from 'components';

export const MENU_HEADER_HEIGHT = 70;

export const MenuHeader: ElementType = memo((_props): JSX.Element =>
    <S.Container>
        <Row>
            <Col>
                <S.SubMenu>
                    <Col cols='12 12 10 10 10'>
                        <Row>
                            <Col cols='12 12 10 10 9'>
                                <Search/>
                            </Col>
                            <Col cols='12 12 4 4 3'>
                                <WayReceiving
                                    height={MENU_HEADER_HEIGHT}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <PreparationTime
                        height={MENU_HEADER_HEIGHT}
                    />
                </S.SubMenu>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <S.SubMenu>
                    <FilterMenu
                        height={MENU_HEADER_HEIGHT}
                    />
                    <OrderLocation
                        height={MENU_HEADER_HEIGHT}
                    />
                </S.SubMenu>
            </Col>
        </Row>
        <Row>
            <Col>
                <MoreInformation/>
            </Col>
        </Row>
    </S.Container>
);