import { HStack, Image, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'

const Sidebar: FunctionComponent = () => {
    return (
        <div className="sidebar-root">
            <div className="wrapper">
                <div className="sidebar">
                    <HStack className="app-margin-top app-margin-bottom app-margin-left">
                        <Image
                            boxSize="60px"
                            objectFit="cover"
                            src={`${window.location.origin}/favicon.ico`}
                            alt="Weigth-Icon"
                        />
                        <Text color={'white'} fontSize={'3xl'}>
                            Health Tracking
                        </Text>
                    </HStack>
                    <ul style={{ width: '100%', height: '100%' }}>
                        <li>
                            <Link to="/Table">Tabla</Link>
                        </li>
                        <li>
                            <Link to="/Graph">Gráfica</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
