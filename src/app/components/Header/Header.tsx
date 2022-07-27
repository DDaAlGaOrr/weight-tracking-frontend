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
    const handleLogOut = () => {
        sessionStorage.clear()
        window.location.href = '/'
    }
    return (
        <div>
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
                            <MenuItem
                                onClick={handleLogOut}
                                icon={<FiLogOut />}
                            >
                                Cerrar sessión
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Flex>
        </div>
    )
}

export default Header
