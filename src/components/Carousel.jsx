import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NFT from '../images/NFT.png'
import NFT1 from '../images/NFT1.png'
import NFT2 from '../images/NFT2.png'
import NFT3 from '../images/NFT3.png'


/**
 * Please, note that this carouse is handled by Swiper JS library.
 * Details and documentation can be found at: https://swiperjs.com/
 */

function Carousel() {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={NFT} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={NFT1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={NFT2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={NFT3} alt="" />
            </SwiperSlide>
            ...
        </Swiper>
    )
}

export default Carousel