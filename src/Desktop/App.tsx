import { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import {
    default as CreateUser,
    default as EditUser,
    default as HomePage,
    default as LoginPage,
} from './pages/CreateUser/CreateUser'

const App: FunctionComponent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" render={() => <HomePage />} exact />
                <Route path="/EditUser" render={() => <EditUser />} exact />
                <Route path="/CreateUser" render={() => <CreateUser />} exact />
                <Route path="/LoginPage" render={() => <LoginPage />} exact />
            </Switch>
        </div>
    )
}

export default App
