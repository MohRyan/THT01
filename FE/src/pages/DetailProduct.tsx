import { useEffect, useState } from "react"
import { API } from "../lib/api"
import { useParams } from "react-router-dom"
import { IProduct } from "../redux/types/state"
import { Container, Flex, Image, Text } from "@chakra-ui/react"

const DetailProduct = () => {

    const params = useParams()

    const [detailProduct, setDetailProduct] = useState<IProduct>()

    const getDetailProduct = async () => {
        const res = await API.get(`product/${params.id}`)
        setDetailProduct(res.data)
    }

    useEffect(() => {
        getDetailProduct()
    }, [])
    return (
        <>
            <Container display={'flex'} justifyContent={'center'} gap={5} paddingY={20}>
                <Flex>
                    <Image src={detailProduct?.image} h={600} />
                </Flex>
                <Flex flexDir={'column'} width={"40%"}>
                    <Text fontSize={25}>
                        {detailProduct?.name_product}
                    </Text>
                    <Text>
                        {detailProduct?.description}
                    </Text>
                    <Flex alignItems={'center'} justify={'space-between'}>
                        <Text fontWeight={"black"} fontSize={45}>{`Rp ${detailProduct?.price?.toLocaleString("id-ID")}`}</Text>
                        <Text fontSize={20}>Stok {detailProduct?.stock}</Text>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}

export default DetailProduct