import { ArrowForwardIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Button, Center, Container, FormControl, Input } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { AuthLogin } from '../../../API/Login'
import './LoginPage.css'

const LoginPage: FunctionComponent = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data: any) => {
        AuthLogin(data)
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
                >
                    <FormControl>
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
                        <Link to="/CreateUser">
                            <Button
                                rightIcon={<SmallAddIcon />}
                                colorScheme={'blue'}
                                type="submit"
                            >
                                Crear cuenta
                            </Button>
                        </Link>
                        <Button
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme={'blue'}
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </div>
    )
}

export default LoginPage
