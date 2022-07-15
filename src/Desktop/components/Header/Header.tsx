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
        <div className="navbar-bacground-color root">
            <Flex className="header-margin-left header-margin-right">
                <HStack className="app-margin-top app-margin-bottom">
                    <Image
                        boxSize="60px"
                        objectFit="cover"
                        src={`${window.location.origin}/favicon.ico`}
                        alt="Weigth-Icon"
                    />
                    <Text color={'white'} fontSize={'3xl'}>
                        Weight tracking
                    </Text>
                </HStack>
                <Spacer />
                <HStack>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FiArrowDown />}>
                            Acciones
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<FiUser />}>Ver perfil</MenuItem>
                            <MenuItem icon={<FiLogOut />}>
                                Cerrar sesión
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/broken-link"
                    />
                </HStack>
            </Flex>
        </div>
    )
}

export default Header
