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
    console.log(detailedTable)
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
                                <Td>{generalTable?.initialWeight} Kg</Td>
                                <Td>{generalTable?.actualWeight} Kg</Td>
                                <Td>{generalTable?.targetWeight} Kg</Td>
                                <Td>{generalTable?.remainingWeight} Kg</Td>
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
                                <Th>Peso </Th>
                                <Th>Peso Perdido</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {detailedTable.map(
                                (itemTable: DetailedTable, index) => (
                                    <Tr key={index}>
                                        <Td>{itemTable.date}</Td>
                                        <Td>{itemTable.weight} Kg</Td>
                                        <Td>{itemTable.loseWeight} Kg</Td>
                                    </Tr>
                                ),
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
                <NewWeightModal isOpen={isOpen} onClose={onClose} />
            </Container>
        </div>
    )
}

export default TablePage
