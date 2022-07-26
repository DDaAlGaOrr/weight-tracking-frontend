import {
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FiLogOut, FiSettings, FiUser } from 'react-icons/fi'

import './Header.css'

const Header: FunctionComponent = () => {
    return (
        <div className="root">
            <Flex className="header-margin-left header-margin-right app-margin-top">
                <Spacer />
                <HStack>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Opciones"
                            icon={<FiSettings />}
                        />
                        <MenuList>
                            <MenuItem as="a" href="/EditUser" icon={<FiUser />}>
                                Ver perfil
                            </MenuItem>
                            <MenuItem as="a" href="/" icon={<FiLogOut />}>
                                Cerrar sesión
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Flex>
        </div>
    )
}

export default Header
