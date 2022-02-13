import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Flex,
    Spacer,
    Box,
    MenuDivider,
} from '@chakra-ui/react'
import ProfileIcon from '../customIcon/ProfileIcon'
const Login: React.FunctionComponent = () => {
    const { loginWithRedirect } = useAuth0()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                sx={{
                    borderRadius: '0px',
                    backgroundColor: '#fff',
                    color: '#2874f0',
                    fontFamily: 'body',
                }}
                width="140px"
                height="32px"
                fontWeight="bold"
                onClick={() => loginWithRedirect()}
            >
                Login
            </MenuButton>

            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>
                    <Flex>
                        <Box>New customer?</Box>
                        <Spacer />
                        <Box>SignUp</Box>
                    </Flex>
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<ProfileIcon />}>My Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Orders</MenuItem>
                <MenuDivider />
                <MenuItem>Whishlist</MenuItem>
                <MenuDivider />
                <MenuItem>Rewards</MenuItem>
                <MenuDivider />
                <MenuItem>Gift Cards</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default Login
