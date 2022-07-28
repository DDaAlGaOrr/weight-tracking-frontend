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
import { FunctionComponent, useEffect, useState } from 'react'

import { getDetailedTable, getGeneralTable } from './../../../API/weight'
import { DetailedTable, GeneralTable } from './../../../types/Weight'
import NewWeightModal from './Modal/NewWeightModal'
import './Table.css'

const TablePage: FunctionComponent = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const [generalTable, setGeneralTable] = useState<GeneralTable>()
    const [detailedTable, setDetailedTable] = useState<DetailedTable[]>([])

    useEffect(() => {
        getGeneral()
        getDetailed()
    }, [])
    const getGeneral = async () => {
        setGeneralTable(await getGeneralTable(sessionStorage.getItem('userId')))
    }
    const getDetailed = async () => {
        setDetailedTable(
            await getDetailedTable(sessionStorage.getItem('userId')),
        )
    }
    return (
        <div>
            <Container maxW="container.sm" className="app-margin-top">
                <TableContainer>
                    <Table variant="simple" border="1px" borderColor="gray.200">
                        <Thead>
                            <Tr>
                                <Th>Peso Inicial</Th>
                                <Th>Peso Actual</Th>
                                <Th>Peso meta</Th>
                                <Th>Peso por bajar</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{generalTable?.initialWeight}</Td>
                                <Td>{generalTable?.actualWeight}</Td>
                                <Td>{generalTable?.targetWeight}</Td>
                                <Td>{generalTable?.remainingWeight}</Td>
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
                                <Th>Peso meta</Th>
                                <Th>Peso por perder</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>07/11/2022</Td>
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
