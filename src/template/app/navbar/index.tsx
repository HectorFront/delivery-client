/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from './styles';
/** @name External */
import Colors from "layout/vars/colors";
import {Button, Dropdown, DropdownItem, MaterialIcon} from "helpers";

export const Navbar: ElementType = memo((_props): JSX.Element =>
    <S.Nav>
        <S.ContainerStore>
            <S.ContainerLogo>
                <S.Logo
                    alt='Logo'
                    src={'https://media.discordapp.net/attachments/794015985450352661/993663643793231972/unknown.png'}
                />
            </S.ContainerLogo>
            <S.ContentStore>
                <S.NameStore>Pizza Point - Buritis</S.NameStore>
                <S.LocationStore>
                    Av. Professor Mario Werneck 2851, Buritis - Belo Horizonte
                    &nbsp;
                    <MaterialIcon
                        hover
                        pointer
                        icon='location_on'
                        color={Colors.DEFAULT}
                    />
                </S.LocationStore>
            </S.ContentStore>
        </S.ContainerStore>
        <S.ContainerNavigations>
            <S.ContainerLinks>
                <Dropdown
                    icon='restaurant'
                    text='O que oferecemos?'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </Dropdown>
                <Dropdown
                    icon='schedule'
                    text='Nossos horários'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </Dropdown>
                <Dropdown
                    icon='call'
                    text='Contato'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </Dropdown>
                <Dropdown
                    icon='not_listed_location'
                    text='Sobre nós'
                >
                    <DropdownItem>
                        Action
                    </DropdownItem>
                </Dropdown>
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