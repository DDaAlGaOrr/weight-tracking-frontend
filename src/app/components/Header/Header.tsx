import { FunctionComponent } from 'react'
import {
    Text,
    Image,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    HStack,
    Flex,
    Spacer,
} from '@chakra-ui/react'
import { FiArrowDown, FiLogOut, FiUser } from 'react-icons/fi'
import './Header.css'

const Header: FunctionComponent = () => {
    return (
        <div className="root">
            <Flex className="header-margin-left header-margin-right app-margin-top">
                <Spacer />
                <HStack>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FiArrowDown />}>
                            Acciones
                        </MenuButton>
                        <MenuList>
                            <MenuItem as="a" href="/EditUser" icon={<FiUser />}>
                                Ver perfil
                            </MenuItem>
                            <MenuItem
                                as="a"
                                href="/LoginPage"
                                icon={<FiLogOut />}
                            >
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
