import {
    Button,
    Center,
    Container,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiArrowLeft, FiSave } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { createNewUser } from '../../../API/User'

const CreateUser: FunctionComponent = () => {
    const { register, handleSubmit } = useForm()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const onSubmit = async (data: any) => {
        const existsUser = await createNewUser(data)
        !existsUser ? (window.location.href = '/') : ''
    }

    return (
        <div>
            <Container maxW="550px">
                <form
                    method="POST"
                    onSubmit={handleSubmit(onSubmit)}
                    name="form"
                >
                    <VStack spacing={'15px'} className="app-margin-bottom">
                        <FormControl>
                            <Input
                                isRequired
                                {...register('email')}
                                placeholder="Correo Electrónico"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                isRequired
                                {...register('firstname')}
                                placeholder="Nombre(s)"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                isRequired
                                {...register('lastname')}
                                placeholder="Apellidos"
                            />
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                                <Input
                                    isRequired
                                    {...register('password')}
                                    placeholder="Contraseña"
                                    type={show ? 'text' : 'password'}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                    >
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <Input
                                isRequired
                                placeholder="Repite tu contraseña"
                                type={'password'}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                isRequired
                                {...register('firstWeight')}
                                placeholder="Tu peso actual(KG)"
                                type={'number'}
                                inputMode="numeric"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                isRequired
                                {...register('age')}
                                placeholder="Edad"
                                type={'number'}
                                inputMode="numeric"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                isRequired
                                {...register('height')}
                                placeholder="Altura(M)"
                                inputMode="numeric"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                isRequired
                                {...register('targetWeight')}
                                placeholder="Peso final deseado(KG)"
                                inputMode="numeric"
                                type={'number'}
                            />
                        </FormControl>
                    </VStack>
                    <Center>
                        <Link to="/">
                            <Button
                                colorScheme={'blue'}
                                className="app-margin-right"
                                leftIcon={<FiArrowLeft />}
                            >
                                Regresar
                            </Button>
                        </Link>
                        <Button
                            colorScheme={'blue'}
                            type="submit"
                            rightIcon={<FiSave />}
                        >
                            Crear
                        </Button>
                    </Center>
                </form>
            </Container>
        </div>
    )
}

export default CreateUser
