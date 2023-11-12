import { Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NewsCard } from "./cards";

const newsCardResponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const paymentCardResponse = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

export const PaymentCardCarousel = ({data}) => {
    return (
        <Carousel responsive={paymentCardResponse} autoPlay="ture">
            {
                data?.map((item, index) => (
                    <div className="text-center" key={index}>
                        <Image src={item.image} alt={item.title} width="100"/>
                    </div>
                ))
            }
        </Carousel>
    )
}

export const NewsCardCarousel = ({data}) => {
    return (
        <Carousel responsive={newsCardResponsive}>
            {
                data?.map((item, index) => (
                    <div key={index}>
                        <NewsCard title={item.title} description={item.description} image={item.image} date={item.date} day={item.day}/>
                    </div>
                ))
            }
        </Carousel>
    )
}