import { Box, Button, Circle, Flex, Float, Icon, Text } from '@chakra-ui/react'
import { Md3dRotation } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { IoBagHandle } from "react-icons/io5";
import { useAppSelector } from '../../redux';

const Navbar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const { cart } = useAppSelector((state) => state.cart)

    return (
        <>
            <Box flex="1" bgColor="blackAlpha.50" shadow={'lg'} shadowColor={'white'} height={20} alignItems={'center'} display={'flex'} justifyContent={"space-between"} px={10}>
                <Flex alignItems={'center'} gap={5}>
                    <Icon fontSize="40px" color="tomato">
                        <Md3dRotation />
                    </Icon>
                    <Text fontSize={30} color={"tomato"} fontFamily={"cursive"}>Comp</Text>
                </Flex>
                <Flex gap={5} alignItems={'center'}>
                    <Text position="relative" color={"white"} onClick={() => !token ? navigate('/auth') : alert("halooooo")}>
                        <IoBagHandle size={40} />
                        <Float offset="2">
                            <Circle size="5" bg="red" color="white">
                                {cart.map((item) => item.cartItem.length)}
                            </Circle>
                        </Float>
                    </Text>
                    <Button variant={'solid'} onClick={() => navigate("/auth")}>Login</Button>
                    <Button variant={'solid'} onClick={() => navigate("/auth/register")} color={'white'} bgColor={"tomato"}>Register</Button>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar