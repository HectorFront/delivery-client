/** @name Dependencies */
import {Link} from "react-router-dom";
import {ElementType, memo, ReactNode} from "react";
/** @name External */
import {MaterialIcon} from "helpers";
import Colors from 'layout/vars/colors';

type DropdownProps = {
    icon?: string,
    text?: string
}

export const Dropdown: ElementType = memo(({icon, text, ...props}: DropdownProps): JSX.Element =>
    <div className="btn-group">
        <button
            aria-expanded={false}
            data-bs-toggle="dropdown"
            className="btn btn-secondary btn-lg dropdown-toggle" type="button"
        >
            {icon && <MaterialIcon icon={icon} color={Colors.DEFAULT}/>}{text && text}
        </button>
        <ul className="dropdown-menu">
        </ul>
    </div>
)

type DropdownItemProps = {
    path: string,
    children: ReactNode
}

export const DropdownItem: ElementType = memo(({children, path, ...props}: DropdownItemProps) =>
    <li className="dropdown-item">
        <Link to={path}>
            {children}
        </Link>
    </li>
)