import {
    Button,
    Container,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from '@chakra-ui/react'
import {
    Area,
    AreaChart,
    AreaSeries,
    Gradient,
    GradientStop,
    Line,
    Stripes,
} from 'reaviz'
import { FunctionComponent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CreateNewweightData } from './../../../API/weightData'

import { DEFAULT_WEIGHT_DATA, WeightData } from './../../../types/WeightData'

const TablePage: FunctionComponent = () => {
    const { register, handleSubmit } = useForm()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const { onOpen, onClose, isOpen } = useDisclosure()
    const [weightData, setweightData] =
        useState<WeightData>(DEFAULT_WEIGHT_DATA)

    const singleDateData = [
        { key: new Date('7/11/2022'), data: 91 },
        { key: new Date('7/12/2022'), data: 91 },
        { key: new Date('7/13/2022'), data: 90 },
        { key: new Date('7/14/2022'), data: 87 },
        { key: new Date('7/15/2022'), data: 86 },
    ]

    const hideModal = () => {
        setIsModalVisible(false)
    }
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleResetDefault = () => {
        setweightData(DEFAULT_WEIGHT_DATA)
    }
    const handleAddWeightData = () => {
        console.log('hola')
    }
    const onSubmit = (data: any) => {
        CreateNewweightData(data)
    }
    return (
        <div>
            <Container maxW="container.sm" className="app-margin-top">
                <TableContainer>
                    <Table variant="simple" border="1px" borderColor="gray.200">
                        <Thead>
                            <Tr>
                                <Th>Peso inicial</Th>
                                <Th>Peso Actual</Th>
                                <Th>Peso deseado final</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>91</Td>
                                <Td>90</Td>
                                <Td>75</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                <TableContainer className="app-margin-top">
                    <Button onClick={onOpen} className="app-margin-bottom">
                        Nuevo registro
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create your account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <form
                                    method="POST"
                                    onSubmit={handleSubmit(onSubmit)}
                                    name="form"
                                >
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
                                    <Button
                                        type="submit"
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
                    <Table variant="simple" border="1px" borderColor="gray.200">
                        <Thead>
                            <Tr>
                                <Th>Fecha</Th>
                                <Th>Peso actual</Th>
                                <Th>Peso Perdido</Th>
                                <Th>IMC</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>07/11/2022</Td>
                                <Td>90</Td>
                                <Td>1</Td>
                                <Td>36</Td>
                            </Tr>
                            <Tr>
                                <Td>07/12/2022</Td>
                                <Td>90</Td>
                                <Td>1</Td>
                                <Td>36</Td>
                            </Tr>
                            <Tr>
                                <Td>07/13/2022</Td>
                                <Td>90</Td>
                                <Td>1</Td>
                                <Td>36</Td>
                            </Tr>
                            <Tr>
                                <Td>07/14/2022</Td>
                                <Td>90</Td>
                                <Td>1</Td>
                                <Td>36</Td>
                            </Tr>
                            <Tr>
                                <Td>07/15/2022</Td>
                                <Td>90</Td>
                                <Td>1</Td>
                                <Td>36</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <AreaChart
                    data={singleDateData}
                    series={
                        <AreaSeries
                            area={
                                <Area
                                    mask={<Stripes />}
                                    gradient={
                                        <Gradient
                                            stops={[
                                                <GradientStop
                                                    key={'1'}
                                                    offset="10%"
                                                    stopOpacity={0}
                                                />,
                                                <GradientStop
                                                    key={'2'}
                                                    offset="80%"
                                                    stopOpacity={1}
                                                />,
                                            ]}
                                        />
                                    }
                                />
                            }
                            line={<Line strokeWidth={3} />}
                        />
                    }
                />
            </Container>
        </div>
    )
}

export default TablePage
