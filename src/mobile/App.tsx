import { FunctionComponent } from 'react'
import { IonReactRouter } from '@ionic/react-router'
import { statsChart, tabletPortrait } from 'ionicons/icons'
import '@ionic/react/css/core.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/typography.css'
import {
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
} from '@ionic/react'

import { Route } from 'react-router-dom'

import CreateUser from './pages/CreateUser/CreateUser'
import Chart from './pages/Chart/Chart'
import Login from './pages/Login/Login'
import Table from './pages/Table/Table'

const App: FunctionComponent = () => {
    return (
        <div>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path="/">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <CreateUser />
                        </Route>
                        <Route path="/chart">
                            <Chart />
                        </Route>
                        <Route path="/table">
                            <Table />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="tab1" href="/chart">
                            <IonIcon icon={statsChart} />
                            <IonLabel>Grafica</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab2" href="/tabla">
                            <IonIcon icon={tabletPortrait} />
                            <IonLabel>Grafica</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </div>
    )
}

export default App
