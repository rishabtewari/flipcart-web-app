import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Flex,
    Input,
    Button,
    InputRightElement,
    InputGroup,
    Center,
    Box,
    Spacer,
    Stack,
    IconButton,
} from '@chakra-ui/react'
import Image from 'next/image'
import Logoimg from '../../../public/flipkart.jpg'
import Login from '../Authentication/Login'
import Logout from '../Authentication/Logout'
import UserProfile from '../userprofile/UserProfile'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import CircleIcon from '../customIcon/CartIcon'
import styles from './Header.module.scss'
import { useAuth0 } from '@auth0/auth0-react'

const propTypes = {}

const defaultProps = {}

/**
 *
 */
const Header: React.FunctionComponent = () => {
    const { isAuthenticated } = useAuth0()
    return (
        <Box p={2} backgroundColor="#2874f0">
            <Container maxW="container.xl">
                <Flex>
                    <Center width="60%">
                        <Image src={Logoimg} alt="fliplogo" />
                        <InputGroup size="md" width="70%">
                            <Input
                                pr="4.5rem"
                                type="text"
                                placeholder="Search for product, brands and more"
                                flex={1}
                                sx={{
                                    marginLeft: '9px',
                                    borderRadius: '0px',
                                    backgroundColor: '#fff',
                                    fontFamily: 'body',
                                }}
                            />
                            <InputRightElement width="4.5rem">
                                <IconButton
                                    sx={{
                                        backgroundColor: '#fff',
                                        outline: 'none',
                                    }}
                                    height="12px"
                                    aria-label="Search"
                                    icon={<SearchIcon />}
                                />
                            </InputRightElement>
                        </InputGroup>
                    </Center>
                    <Center>
                        <Stack direction="row" spacing={10}>
                            {!isAuthenticated ? (
                                <Center>
                                    <Login />
                                </Center>
                            ) : (
                                <Center>
                                    <Logout />
                                </Center>
                            )}
                            <Button
                                rightIcon={<ChevronDownIcon />}
                                sx={{
                                    backgroundColor: '#2874f0',
                                    color: '#fff',
                                }}
                            >
                                More
                            </Button>
                            <Button
                                leftIcon={<CircleIcon />}
                                sx={{
                                    backgroundColor: '#2874f0',
                                    color: '#fff',
                                }}
                            >
                                Cart
                            </Button>
                        </Stack>
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps
// #endregion

export default Header
