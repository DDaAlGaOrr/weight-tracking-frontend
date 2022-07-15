import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Grid, GridItem } from '@chakra-ui/react'

import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'
import CreateUser from './pages/Users/CreateUser/CreateUser'
import EditUser from './pages/Users/EditUser/EditUser'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

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
                            <Route path="/" element={<HomePage />} />
                            <Route path="/EditUser" element={<EditUser />} />
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
