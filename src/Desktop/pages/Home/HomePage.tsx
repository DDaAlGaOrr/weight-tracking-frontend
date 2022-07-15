import {
    Container,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
    AreaChart,
    AreaSeries,
    Area,
    Stripes,
    Gradient,
    GradientStop,
    Line,
} from 'reaviz'

const HomePage: FunctionComponent = () => {
    const singleDateData = [
        { key: new Date('7/11/2022'), data: 91 },
        { key: new Date('7/12/2022'), data: 91 },
        { key: new Date('7/13/2022'), data: 90 },
        { key: new Date('7/14/2022'), data: 87 },
        { key: new Date('7/15/2022'), data: 86 },
    ]

    return (
        <div>
            <Container maxW="container.sm">
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

                <TableContainer>
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
                                <Td>07/14/2022</Td>
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

export default HomePage
