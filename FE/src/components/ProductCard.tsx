import { Button, Card, Image, Text } from '@chakra-ui/react'
import { IProduct } from '../redux/types/state'
import { API } from '../lib/api'
import { useAppDispatch } from '../redux'
import { getCartAsync } from '../redux/async/cartAsync'
import { useNavigate } from 'react-router-dom'

interface IProps {
    key: number,
    data: IProduct
}

const ProductCard = ({ key, data }: IProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const postCartitem = async () => {
        await API.post("/cartitem", { cartId: "f3c5318d-09b4-4662-94ca-75af5a7226de", productId: data.id, status: "Unpaid" })
        return dispatch(getCartAsync())
    }

    return (
        <>
            <Card.Root maxW="sm" overflow="hidden" key={key}>
                <Image
                    onClick={() => navigate(`/detailproduct/${data.id}`)}
                    cursor={"pointer"}
                    src={data.image}
                    alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2">
                    <Card.Title onClick={() => navigate(`/detailproduct/${data.id}`)}>{data.name_product}</Card.Title>
                    <Card.Description>
                        {data.description}
                    </Card.Description>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        {`Rp ${data.price?.toLocaleString("id-ID")}`}
                    </Text>
                </Card.Body>
                <Card.Footer gap="2">
                    <Button variant="solid">Buy now</Button>
                    <Button variant="ghost" onClick={postCartitem}>Add to cart</Button>
                </Card.Footer>
            </Card.Root>
        </>
    )
}

export default ProductCard