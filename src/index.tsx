import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const DesktopIndex = lazy(() => import('./Desktop/DesktopIndex'))

ReactDOM.render(
    <StrictMode>
        <Suspense fallback={<span />}>
            <DesktopIndex />
        </Suspense>
    </StrictMode>,
    document.getElementById('root'),
)
