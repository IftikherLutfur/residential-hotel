
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className=' mt-10 mb-5'>

<Carousel>
                <div>
                    <img className='' src="https://e1.pxfuel.com/desktop-wallpaper/735/1008/desktop-wallpaper-100-duplex-home-design-duplex-house-design-for-2022.jpg" />
                   
                </div>
                <div>
                    <img className='' src="https://images.barrons.com/im-778480?width=700&height=471" />
                   
                </div>
                <div>
                    <img className='' src="https://c1.wallpaperflare.com/preview/91/37/233/home-house-exterior-luxury.jpg"/>   
                </div>
                <div>
                    <img className='' src=" https://e1.pxfuel.com/desktop-wallpaper/684/390/desktop-wallpaper-100-duplex-home-design-duplex-house-design-for-2022-duplex.jpg"/>   
                </div>
            </Carousel>

        </div>
    );
};

export default Slider;