import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src='https://www.chrislovesjulia.com/wp-content/uploads/2018/07/Screen-Shot-2018-07-15-at-11.13.14-PM.png' alt=""  id='bannerImg'/>
        </div>
        <div>
          <img src='https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png' alt="" id='bannerImg'/>
        </div>
        <div>
          <img src='https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg' alt="" id='bannerImg'/>
        </div>
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-slick-arrow next-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="arrow-icon">›</i>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-slick-arrow prev-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="arrow-icon">‹</i>
      </div>
    );
  }
  

export default Banner;