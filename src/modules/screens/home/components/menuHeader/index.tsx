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
import {Row, Col} from 'helpers';

export const MENU_HEADER_HEIGHT = 70;

export const MenuHeader: ElementType = memo((_props): JSX.Element =>
    <S.Container>
        <Row>
            <Col cols='12 12 12 7 7'>
                <Search/>
                <br/>
            </Col>
            <Col cols='6 6 6 3 3'>
                <WayReceiving
                    menuHeight={MENU_HEADER_HEIGHT}
                />
                <br/>
            </Col>
            <Col cols='6 6 6 2 2'>
                <PreparationTime
                    menuHeight={MENU_HEADER_HEIGHT}
                />
                <br/>
            </Col>
        </Row>
        <Row>
            <Col>
                <S.SubMenu>
                    <FilterMenu
                        menuHeight={MENU_HEADER_HEIGHT}
                    />
                    <OrderLocation
                        menuHeight={MENU_HEADER_HEIGHT}
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