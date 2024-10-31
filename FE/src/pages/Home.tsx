import ProductCard from "../components/ProductCard";
import Slider from 'react-slick'
import { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { getProductAsync } from "../redux/async/productAsync";
import { useAppDispatch, useAppSelector } from "../redux";
import { InputGroup } from "../components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { getCartAsync } from "../redux/async/cartAsync";
import { Box, Container, createListCollection, Flex, IconButton, Input, Kbd, SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText, useBreakpointValue } from "@chakra-ui/react";


// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
}
const Home = () => {

    const { products } = useAppSelector((state) => state.product)
    const [slider, setSlider] = useState<Slider | null>(null)
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })
    const cards = [
        'https://dlcdnwebimgs.asus.com/gain/0C071033-E95F-47DF-AA97-D25A9378E0C9',
        'https://res.cloudinary.com/hiotuohju/image/upload/v1702621510/file_irtfho.webp',
        'https://www.mobileadvance.com/product_images/uploaded_images/msi-banner-dragonfever17-1200.jpg',
    ]

    const dispatch = useAppDispatch()

    const getProduct = () => {
        dispatch(getProductAsync())
        dispatch(getCartAsync())
    }
    useEffect(() => {
        getProduct()
    }, [])


    const category = createListCollection({
        items: [
            { label: "ASUS", value: "asus" },
            { label: "MSI", value: "msi" },
            { label: "ACER", value: "acer" },
        ],
    })

    const [searchCategory, setSearchCategory] = useState('')

    const searchPro = products.filter((e) => e.name_product?.toLowerCase().includes(searchCategory.toLowerCase()))
    return (
        <>
            <Container>
                <Box>
                    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
                        {/* CSS files for react-slick */}
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />
                        {/* Left Icon */}
                        <IconButton
                            aria-label="left-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="absolute"
                            left={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickPrev()}>
                            <BiLeftArrowAlt />
                        </IconButton>
                        {/* Right Icon */}
                        <IconButton
                            aria-label="right-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="absolute"
                            right={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickNext()}>
                            <BiRightArrowAlt />
                        </IconButton>
                        {/* Slider */}
                        <Slider {...settings} ref={(slider) => setSlider(slider)}>
                            {cards.map((url, index) => (
                                <Box
                                    key={index}
                                    height={'600px'}
                                    position="relative"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="contain"
                                    backgroundImage={`url(${url})`}

                                />
                            ))}
                        </Slider>
                    </Box>
                    <Flex flexDir={'column'} gap={10}>
                        <Flex>
                            <InputGroup
                                flex="1"
                                startElement={<LuSearch />}
                                endElement={<Kbd>⌘K</Kbd>}
                            >
                                {/* <Input placeholder="Search Products" value={searchCategory} onChange={(e)=>setSearchCategory(e.target.value)} /> */}
                                <Input placeholder="Search Products" value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} />
                            </InputGroup>
                        </Flex>
                        <Flex >
                            <SelectRoot collection={category} size="sm" width="320px"
                                onValueChange={(e) => setSearchCategory(e.value[0])}
                            >
                                <SelectLabel>Select Category</SelectLabel>
                                <SelectTrigger >
                                    <SelectValueText placeholder="Select Product" />
                                </SelectTrigger>
                                <SelectContent>
                                    {category.items.map((category) => (
                                        <SelectItem item={category} key={category.value} >
                                            {category.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </SelectRoot>
                        </Flex>
                        <Flex h={'full'} flexWrap={'wrap'} gap={6} justifyContent={'center'} alignItems={'center'}>
                            {searchPro.map((item, index) => (
                                <ProductCard key={index} data={item} />
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </>
    )
}

export default Home