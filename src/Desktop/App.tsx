import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import CreateUser from './pages/Users/CreateUser/CreateUser'
import HomePage from './pages/Home/HomePage'
import EditUser from './pages/Users/EditUser/EditUser'
import LoginPage from './pages/Login/LoginPage'

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
