import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
    Container,
    Flex,
    Input,
    Button,
    InputRightElement,
    InputGroup,
    Center,
} from '@chakra-ui/react'

const Logout: React.FunctionComponent = () => {
    const { logout } = useAuth0()
    return <Button onClick={() => logout()}>Logout</Button>
}

export default Logout
