import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import DefaultPageLayout from '../components/layouts/DefaultPageLayout'
import { jsx } from '@emotion/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Auth0Provider } from '@auth0/auth0-react'
import { defaultTheme } from '../theme/theme'
function MyApp({ Component, pageProps }: AppProps): ReactJSXElement {
    const themeToUse = extendTheme(defaultTheme)
    return (
        <ChakraProvider theme={themeToUse}>
            <Auth0Provider
                domain="dev-ph6g-fj3.us.auth0.com"
                clientId="VRIGdz2in5lx0JQDHD6KNNlCArPid807"
                redirectUri="http://localhost:3000/"
            >
                <DefaultPageLayout>
                    <Component {...pageProps} />
                </DefaultPageLayout>
            </Auth0Provider>
        </ChakraProvider>
    )
}

export default MyApp
