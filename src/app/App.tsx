import { Center } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import CreateUser from './pages/CreateUser/CreateUser'
import Graph from './pages/Graph/Graph'
import LoginPage from './pages/Login/LoginPage'
import TablePage from './pages/Table/table'
import '../App.css'

const App: FunctionComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/Table" element={<TablePage />} />
                    <Route path="/Graph" element={<Graph />} />
                    <Route path="/CreateUser" element={<CreateUser />} />
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
