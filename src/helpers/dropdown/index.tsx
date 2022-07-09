/** @name Dependencies */
import {Link} from "react-router-dom";
import {ElementType, memo, ReactNode} from "react";
/** @name Internal */
import {ButtonDropdown} from "./styles";
/** @name External */
import {MaterialIcon} from "helpers";
import Colors from 'layout/vars/colors';

type DropdownProps = {
    icon?: string,
    text?: string,
    children: ReactNode
}

export const Dropdown: ElementType = memo(({icon, text, children, ...props}: DropdownProps): JSX.Element =>
    <div className="btn-group">
        <ButtonDropdown
            {...props}
            type="button"
            aria-expanded={false}
            data-bs-toggle="dropdown"
            className="btn btn-md dropdown-toggle"
        >
            {icon && <MaterialIcon icon={icon} color={Colors.DEFAULT}/>}&nbsp;{text && text}
        </ButtonDropdown>
        <ul className="dropdown-menu">
            {children}
        </ul>
    </div>
);

type DropdownItemProps = {
    path: string,
    children: ReactNode
}

export const DropdownItem: ElementType = memo(({children, path, ...props}: DropdownItemProps) =>
    <Link to={path}>
        <li
            {...props}
            className="dropdown-item"
        >
            <span>{children}</span>
        </li>
    </Link>
);