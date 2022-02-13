import react from 'react'
import { Icon, createIcon } from '@chakra-ui/react'

const CircleIcon = () => (
    <Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        aria-labelledby="title"
        aria-describedby="desc"
        role="img"
        width="8"
        height="8"
    >
        <title>Shopping Cart</title>
        <desc>A solid styled icon from Orion Icon Library.</desc>
        <circle
            data-name="layer1"
            cx="23.9"
            cy="56.3"
            r="4"
            fill="#fff"
        ></circle>
        <circle
            data-name="layer1"
            cx="49.9"
            cy="56.3"
            r="4"
            fill="#fff"
        ></circle>
        <path
            data-name="layer2"
            d="M23.4 48.3h31l7.7-24H19.7L15.9 7.8A2 2 0 0 0 14 6.3H3.9a2 2 0 0 0 0 4h8.4l9 38z"
            fill="#fff"
        ></path>
        <path
            data-name="layer1"
            fill="#fff"
            d="M21.9 20.3H38l.1-.2-8-8-8.2 8.2zm28-8l2.2-5.6-7.4-3-6.6 16.4.1.2h8.4l1.5-3.7v3.7h12v-8H49.9z"
        ></path>
    </Icon>
)

export default CircleIcon
