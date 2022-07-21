import { Grid, GridItem } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import CreateUser from './pages/CreateUser/CreateUser'
import Graph from './pages/Graph/Graph'
import LoginPage from './pages/Login/LoginPage'
import TablePage from './pages/Table/table'

const App: FunctionComponent = () => {
    return (
        <div>
            <Grid
                templateAreas={`"header header"
                                "sidebar content"
                                "sidebar footer"`}
                gridTemplateRows={'86px 1fr 300px'}
                gridTemplateColumns={'200px 1fr'}
                h="200px"
                gap="1"
                color="blackAlpha.700"
            >
                <BrowserRouter>
                    <GridItem area={'header'}>
                        <Header />
                    </GridItem>
                    <GridItem area={'sidebar'}>
                        <Sidebar />
                    </GridItem>
                    <GridItem area={'content'}>
                        <Routes>
                            <Route path="/" element={<TablePage />} />
                            <Route path="/Graph" element={<Graph />} />
                            <Route
                                path="/CreateUser"
                                element={<CreateUser />}
                            />
                            <Route path="/LoginPage" element={<LoginPage />} />
                        </Routes>
                    </GridItem>
                </BrowserRouter>
            </Grid>
        </div>
    )
}

export default App
