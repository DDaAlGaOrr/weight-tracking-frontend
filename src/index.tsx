import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

import './index.css'
import './App.css'

const DesktopIndex = lazy(() => import('./app/DesktopIndex'))
const MobileIndex = lazy(() => import('./mobile/MobileIndex'))

ReactDOM.render(
    <ChakraProvider>
        <StrictMode>
            <Suspense fallback={<span />}>
                {isMobile ? <MobileIndex /> : <DesktopIndex />}
            </Suspense>
        </StrictMode>
    </ChakraProvider>,
    document.getElementById('root'),
)
