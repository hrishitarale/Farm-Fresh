import Carousel from 'react-multi-carousel';
// import React, {useRef, useState} from 'react';
import "react-multi-carousel/lib/styles.css";
import Mycard from './Mycard';
import apple1 from "./img/apple1.png";
import orange from "./img/orange.png";
import potato from "./img/potato.png";
import flower from "./img/flower.png";
import karal from "./img/karal.png";
import gawar from "./img/gawar.png";

function Imagecarousel(){
    const responsive = {
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
    return(
        <Carousel responsive={responsive}>
            <Mycard id="123" title='Apple' price={60.00} image={apple1} />
            <Mycard id="121" title='Orange' price={70.00} image={orange} />
            <Mycard id="111" title='Potato' price={25.00} image={potato} />
            <Mycard id="112" title='Cluster Beans' price={50.00} image={gawar} />
            <Mycard id="113" title="Flower" price={30.00} image={flower} />
            <Mycard id="114" title="Karal" price={30.00} image={karal} />
        </Carousel>
    ) 
}


// const Imagecarousel = () => {
//     const [index, setIndex] = useState(0);
//     const length = 8;

//     const btnpressprev = () => {
//         const newIndex = index - 1;
//         setIndex(newIndex < 0?length - 1: newIndex);
//     };

//     const btnpressnext = () => {
//         const newIndex = index + 1;
//         setIndex(newIndex >= length ? 0: newIndex);
//     };
//     return (
//         <>
//         <div className='container_carousel' >
//             <h2>Best Seller</h2>
//             <div className="product-carousel">
//                 <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
//                 <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

//                 <div className="product-container" >
//                     
//                     
//                     {/* <Mycard cardno="7" />
//                     <Mycard cardno="8" />
//                     <Mycard cardno="9" /> */}
                    
                    
//                 </div>
//             </div>
//         </div>  
//         </>
//     )
// };

export default Imagecarousel;