/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import {Search} from './search';
import {FilterMenu} from "./filterMenu";
import {WayReceiving} from "./wayReceiving";
import {PreparationTime} from "./preparationTime";
/** @name External */
import {Row, Col} from 'helpers';

export const MENU_HEADER_HEIGHT = 70;

export const MenuHeader: ElementType = memo((_props): JSX.Element =>
    <>
        <Row>
            <Col cols='12 12 12 8 8'>
                <Search/>
                <br/>
            </Col>
            <Col cols='6 6 6 3 3'>
                <WayReceiving
                    menuHeaderHeight={MENU_HEADER_HEIGHT}
                />
                <br/>
            </Col>
            <Col cols='6 6 6 1 1'>
                <PreparationTime
                    menuHeaderHeight={MENU_HEADER_HEIGHT}
                />
                <br/>
            </Col>
        </Row>
        <Row>
            <Col cols='12 12 6 3 3'>
                <FilterMenu
                    menuHeaderHeight={MENU_HEADER_HEIGHT}
                />
            </Col>
        </Row>
    </>
);