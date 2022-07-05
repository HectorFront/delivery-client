
/** @name Dependencies */
import {memo} from "react";
/** @name Internal */
import * as S from './styles';
/** @name External */
import {Button, MaterialIcon} from "helpers";

export const Navbar = memo(({ ...props }) =>
    <nav className="navbar navbar-expand-lg bg-light p-4">
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
    </nav>
)