import { ArrowForwardIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Button, Container, Input } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import './LoginPage.css'

const LoginPage: FunctionComponent = () => {
    return (
        <div>
            <Container maxW={'md'}>
                <img
                    className="user-icon"
                    alt="User Icon"
                    src={`${window.location.origin}/UserIcon.png`}
                />

                <Input placeholder="Usuario o correo" />
                <Input placeholder="Contraseña" />
                <Link to="/CreateUser">
                    <Button rightIcon={<SmallAddIcon />} colorScheme={'blue'}>
                        Crear cuenta
                    </Button>
                </Link>
                <Link to="/">
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme={'blue'}
                    >
                        Iniciar sesión
                    </Button>
                </Link>
            </Container>
        </div>
    )
}

export default LoginPage
