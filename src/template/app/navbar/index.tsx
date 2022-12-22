/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name Internal */
import * as S from './styles';
/** @name External */
import Colors from "layout/vars/colors";
import {Button, Dropdown, DropdownItem, MaterialIcon} from "components";

const COLOR_DAY_ITEM = { color: Colors.SECONDARY };

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
                    icon='store'
                    text='O que oferecemos?'
                >
                    <DropdownItem>Feira</DropdownItem>
                    <DropdownItem>Carnes</DropdownItem>
                    <DropdownItem>Limpeza</DropdownItem>
                    <DropdownItem>Alimentos Básicos</DropdownItem>
                </Dropdown>
                <Dropdown
                    icon='schedule'
                    clickInsideNotClose
                    text='Nossos horários'
                >
                    <DropdownItem>
                        <span style={COLOR_DAY_ITEM}>DOM</span>
                        &nbsp;08:00 às 12:00
                    </DropdownItem>
                    <DropdownItem>
                        <span style={COLOR_DAY_ITEM}>SEG</span>
                        &nbsp;08:00 às 19:00
                    </DropdownItem>
                    <DropdownItem>
                        <span style={COLOR_DAY_ITEM}>TER</span>&nbsp;
                        08:00 às 19:00
                    </DropdownItem>
                    <DropdownItem>
                        <span style={COLOR_DAY_ITEM}>QUA</span>&nbsp;
                        08:00 às 19:00
                    </DropdownItem>
                    <DropdownItem selected>
                        <span style={COLOR_DAY_ITEM}>QUI</span>&nbsp;
                        08:00 às 19:00
                    </DropdownItem>
                    <DropdownItem>
                        <span style={COLOR_DAY_ITEM}>SEX</span>&nbsp;
                        08:00 às 21:00
                    </DropdownItem>
                    <DropdownItem>
                        <span style={COLOR_DAY_ITEM}>SÁB</span>&nbsp;
                        08:00 às 21:00
                    </DropdownItem>
                </Dropdown>
                <Dropdown
                    icon='call'
                    text='Contato'
                    clickInsideNotClose
                >
                    <DropdownItem href={'tel:(14) 98212-5480'}>
                        <MaterialIcon
                            icon='phone_forwarded'
                            color={Colors.SECONDARY}
                        />&nbsp;(14) 98212-5480
                    </DropdownItem>
                    <DropdownItem href={'mailto:bbeteto@gmail.com'}>
                        <MaterialIcon
                            icon='forward_to_inbox'
                            color={Colors.SECONDARY}
                        />&nbsp;bbeteto@gmail.com
                    </DropdownItem>
                </Dropdown>
                <Dropdown
                    icon='info'
                    text='Sobre nós'
                >
                    <DropdownItem>Site Institucional</DropdownItem>
                    <DropdownItem>Uma breve descrição</DropdownItem>
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