import { FunctionComponent, ReactNode, useState } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
import Header from '../Header/Header'

interface Props {
    children: ReactNode
}
const DefaultPageLayout: FunctionComponent<Props> = (props: Props) => {
    return (
        <Box>
            <header>
                <Header />
            </header>
            <main>{props.children}</main>
        </Box>
    )
}
export default DefaultPageLayout
