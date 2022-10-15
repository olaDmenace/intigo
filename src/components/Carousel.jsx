import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NFT from '../images/NFT.png'
import NFT1 from '../images/NFT1.png'
import NFT2 from '../images/NFT2.png'
import NFT3 from '../images/NFT3.png'

function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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