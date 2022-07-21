import { Button, Container, FormControl, Input } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { CreateNewUser } from '../../../API/User'

const CreateUser: FunctionComponent = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data: any) => {
        CreateNewUser(data)
    }

    return (
        <div>
            <Container maxW="550px">
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
                            {...register('firstname')}
                            placeholder="Nombre(s)"
                        />
                        <Input
                            isRequired
                            {...register('lastname')}
                            placeholder="Apellidos"
                        />
                        <Input
                            isRequired
                            {...register('password')}
                            placeholder="Contraseña"
                        />
                        <Input
                            isRequired
                            {...register('age')}
                            placeholder="Edad"
                            type={'number'}
                            inputMode="numeric"
                        />
                        <Input
                            isRequired
                            {...register('height')}
                            placeholder="Altura(cms)"
                            inputMode="numeric"
                        />
                        <Input
                            isRequired
                            {...register('targetWeight')}
                            placeholder="Peso final deseado (KLS)"
                            inputMode="numeric"
                        />
                        <Link to="/LoginPage">
                            <Button colorScheme={'blue'}>regresar</Button>
                        </Link>
                        <Button colorScheme={'blue'} type="submit">
                            Crear
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </div>
    )
}

export default CreateUser
