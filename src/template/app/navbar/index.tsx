
/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from './styles';
/** @name External */
import {Button, MaterialIcon} from "helpers";

type NavbarProps = {

}

export const Navbar: ElementType = memo(({ ...props }: NavbarProps): JSX.Element =>
    <S.Nav>
        <S.ContainerStore>
            <S.ContainerLogo>
                <S.Logo
                    src={'https://media.discordapp.net/attachments/794015985450352661/993663643793231972/unknown.png'}
                />
            </S.ContainerLogo>
            <S.ContentStore>
                <S.NameStore>Pizza Point - Buritis</S.NameStore>
                <S.LocationStore>Av. Professor Mario Werneck 2851, Buritis - Belo Horizonte</S.LocationStore>
            </S.ContentStore>
        </S.ContainerStore>
        <S.ContainerLinks>
            <div className="btn-group">
                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Large button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                </ul>
            </div>
        </S.ContainerLinks>
    </S.Nav>
)