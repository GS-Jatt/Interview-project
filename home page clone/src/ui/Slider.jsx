import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const StyledSlider =styled.div`
margin-top: 140px;
    width:100%;
`
const Img = styled.img`
    /* height: 400px; */
`

function Slider() {
    return (
        <StyledSlider>
            <Carousel
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
                showIndicators={false}
                showStatus={false}
                showArrows={false}
            >
                <div>
                    <Img
                        src={
                            "https://yore-care.s3.ap-south-1.amazonaws.com/YoreCare+Website+V2/Web+Banner/Website-Banner-1.jpg"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <Img
                        src={
                            "https://yore-care.s3.ap-south-1.amazonaws.com/YoreCare+Website+V2/Web+Banner/Website-Banner-3.jpg"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <Img
                        src={
                            "https://yore-care.s3.ap-south-1.amazonaws.com/YoreCare+Website+V2/Web+Banner/Website-Banner-4.jpg"
                        }
                        alt=""
                    />
                </div>
                
            </Carousel>
        </StyledSlider>
    );
}

export default Slider;
