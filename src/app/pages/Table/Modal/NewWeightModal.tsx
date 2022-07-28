import {
    Button,
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

    const onSubmit = (data: any) => {
        createNewweight({ ...data, userId: sessionStorage.getItem('userId') })
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
                            <Button
                                type="submit"
                                onClick={() =>
                                    (window.location.href = '/table')
                                }
                                colorScheme="blue"
                                mr={3}
                            >
                                Guardar
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default NewWeightModal
