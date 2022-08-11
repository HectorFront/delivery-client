/** @name Dependencies */
import {Link} from "react-router-dom";
import {ElementType, memo, ReactNode} from "react";
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {MaterialIcon} from 'helpers';
import Colors from 'layout/vars/colors';

type DropdownProps = {
    icon?: string,
    text?: string,
    size?: string,
    children: ReactNode,
    clickInsideNotClose?: boolean | undefined
}

export const Dropdown: ElementType = memo(({icon, size = 'md', text, clickInsideNotClose, children, ...props}: DropdownProps): JSX.Element =>
    <div className="btn-group">
        <S.Button
            {...props}
            type="button"
            aria-expanded={false}
            data-bs-toggle="dropdown"
            className={`btn btn-${size} dropdown-toggle`}
        >
            {icon && <MaterialIcon icon={icon} color={Colors.DEFAULT}/>}&nbsp;{text && text}
        </S.Button>
        <ul
            className="dropdown-menu"
            onClick={event => clickInsideNotClose && event.stopPropagation()}
        >
            {children}
        </ul>
    </div>
);

type DropdownItemProps = {
    path?: string,
    href?: string,
    selected?: boolean | undefined,
    children: ReactNode
}

export const DropdownItem: ElementType = memo(({ children, path, href, selected, ...props}: DropdownItemProps) => {
    const Item = () => (
        <S.Item
            {...props}
            selected={selected}
            className="dropdown-item"
        >
            <span>{children}</span>
        </S.Item>
    );
    if(path) {
        return (
            <Link to={path}>
                <Item/>
            </Link>
        )
    }
    if(href) {
        return (
            <a href={href}>
                <Item/>
            </a>
        );
    }
    return <Item/>
});