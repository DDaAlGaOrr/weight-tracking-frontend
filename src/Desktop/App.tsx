import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'
import CreateUser from './pages/Users/CreateUser/CreateUser'
import EditUser from './pages/Users/EditUser/EditUser'

const App: FunctionComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/EditUser" element={<EditUser />} />
                    <Route path="/CreateUser" element={<CreateUser />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
