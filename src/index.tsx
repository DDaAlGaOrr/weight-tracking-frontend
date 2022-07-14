import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'

const DesktopIndex = lazy(() => import('./Desktop/DesktopIndex'))

ReactDOM.render(
    <ChakraProvider>
        <StrictMode>
            <Suspense fallback={<span />}>
                <DesktopIndex />
            </Suspense>
        </StrictMode>
        ,
    </ChakraProvider>,
    document.getElementById('root'),
)
