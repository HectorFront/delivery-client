/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from './styles';
/** @name External */
import {Button, DropdownButton, DropdownItem} from "helpers";

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
        <S.ContainerNavigations>
            <S.ContainerLinks className="shadow-sm">
                <DropdownButton
                    icon='restaurant'
                    text='O que oferecemos?'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </DropdownButton>
                <DropdownButton
                    icon='schedule'
                    text='Nossos horários'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </DropdownButton>
                <DropdownButton
                    icon='call'
                    text='Contato'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </DropdownButton>
                <DropdownButton
                    icon='not_listed_location'
                    text='Sobre nós'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </DropdownButton>
            </S.ContainerLinks>
            <Button
                radius
                title='Entrar'
            >
                Entrar
            </Button>
        </S.ContainerNavigations>
    </S.Nav>
);