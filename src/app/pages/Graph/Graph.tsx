import { Container } from '@chakra-ui/react'
import { FunctionComponent, useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { ChartData } from '../../../types/Weight'
import { getChart } from '../../../API/weight'
import './Graph.css'

const Graph: FunctionComponent = () => {
    const [chart, setChart] = useState<ChartData[]>([])
    useEffect(() => {
        getData()
    }, [])
    const newchartData: ChartData[] = []
    chart.forEach((element) => {
        newchartData.push({
            date: element.date,
            weight: element.weight,
        })
    })
    const getData = async () => {
        setChart(await getChart(sessionStorage.getItem('userId')))
    }
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    )
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Seguimiento de peso',
            },
        },
    }
    const labels = newchartData.map((element) => element.date)
    const data = {
        labels,
        datasets: [
            {
                label: 'peso',
                data: newchartData.map((element) => element.weight),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    return (
        <div>
            <Container>
                <Line options={options} data={data} />
            </Container>
        </div>
    )
}

export default Graph
