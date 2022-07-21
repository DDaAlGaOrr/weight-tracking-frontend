import { FunctionComponent } from 'react'
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    FormControl,
    Input,
    Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { CreateNewweightData } from '../../../../API/weightData'

interface NewWeightDataModalProps {
    onClose: () => void
    isOpen: boolean
}
const NewWeightDataModal: FunctionComponent<NewWeightDataModalProps> = ({
    onClose,
    isOpen,
}) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data: any) => {
        CreateNewweightData(data)
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSubmit(onSubmit)} name="form">
                            <FormControl>
                                <Input
                                    isRequired
                                    {...register('date')}
                                    placeholder="date"
                                    type={'date'}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <Input
                                    isRequired
                                    {...register('weight')}
                                    placeholder="Peso"
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" mr={3}>
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

export default NewWeightDataModal
