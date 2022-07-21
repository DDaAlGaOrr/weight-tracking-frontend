import { HStack, Image, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'

const Sidebar: FunctionComponent = () => {
    return (
        <div className="sidebar-background">
            <>
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
                        <ul>
                            <li>
                                <Link to="/">Tabla</Link>
                            </li>
                            <li>
                                <Link to="/Graph">Grafica</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Sidebar
