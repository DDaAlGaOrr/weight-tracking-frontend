import {
    Button,
    Container,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import NewWeightModal from './Modal/NewWeightModal'

const TablePage: FunctionComponent = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()

    return (
        <div>
            <Container maxW="container.sm" className="app-margin-top">
                <TableContainer>
                    <Table variant="simple" border="1px" borderColor="gray.200">
                        <Thead>
                            <Tr>
                                <Th>Peso inicial</Th>
                                <Th>Peso Actual</Th>
                                <Th>Peso ideal</Th>
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
                <NewWeightModal isOpen={isOpen} onClose={onClose} />
            </Container>
        </div>
    )
}

export default TablePage
