import {
    Button,
    Center,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'

import { createNewweight } from '../../../../API/weight'

interface NewWeightModalProps {
    onClose: () => void
    isOpen: boolean
}
const NewWeightModal: FunctionComponent<NewWeightModalProps> = ({
    onClose,
    isOpen,
}) => {
    const { register, handleSubmit } = useForm()
    const today = new Date().toISOString().split('T')[0]

    const onSubmit = async (data: any) => {
        const isCreate = await createNewweight({
            ...data,
            userId: sessionStorage.getItem('userId'),
        })
        isCreate ? (window.location.href = '/table') : ''
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Nuevo Registro</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit(onSubmit)} name="form">
                            <FormControl>
                                <Input
                                    isRequired
                                    {...register('date')}
                                    type={'date'}
                                    defaultValue={today}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <Input
                                    isRequired
                                    {...register('weight')}
                                    placeholder="Peso"
                                />
                            </FormControl>
                            <Center mt={15}>
                                <Button mr={15} onClick={onClose}>
                                    Cancelar
                                </Button>
                                <Button type="submit" colorScheme="blue">
                                    Guardar
                                </Button>
                            </Center>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default NewWeightModal
