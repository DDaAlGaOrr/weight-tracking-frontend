import { Button, Center, Container, Input, VStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { authLogin } from '../../../API/User'
import './LoginPage.css'

const LoginPage: FunctionComponent = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data: any) => {
        const tokenExist = await authLogin(data)
        tokenExist ? (window.location.href = '/table') : ''
    }

    return (
        <div>
            <Container maxW="550px">
                <Center>
                    <img
                        className="user-icon"
                        alt="User Icon"
                        src={`${window.location.origin}/UserIcon.png`}
                    />
                </Center>
                <form
                    method="POST"
                    onSubmit={handleSubmit(onSubmit)}
                    name="form"
                    className="app-margin-top"
                >
                    <VStack spacing={'15px'} className="app-margin-bottom">
                        <Input
                            isRequired
                            {...register('email')}
                            placeholder="Correo Electronico"
                        />
                        <Input
                            isRequired
                            {...register('password')}
                            placeholder="Contraseña"
                        />
                    </VStack>
                    <Center>
                        <Link to="/CreateUser">
                            <Button
                                rightIcon={<FiUserPlus />}
                                colorScheme={'blue'}
                                type="submit"
                                className="app-margin-right"
                            >
                                Crear cuenta
                            </Button>
                        </Link>
                        <Button
                            rightIcon={<FiLogIn />}
                            colorScheme={'blue'}
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>
                    </Center>
                </form>
            </Container>
        </div>
    )
}

export default LoginPage
