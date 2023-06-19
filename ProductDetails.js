import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from './ProductsData';
import Header from './Header';
import './ProductDetails.css'; 
import potato from './img/potato.png';
import gawar from "./img/gawar.png";
import flower from "./img/flower.png";
import karal from "./img/karal.png";
import cucumber from "./img/cucumber.png"
import cabage from "./img/cabage.png";
import shimla from "./img/shimla.png";
import tomato from "./img/tomato.png";
import Pomegranate from './img/Pomegranate.png';
import apple1 from "./img/apple1.png";
import orange from "./img/orange.png";
import mango from "./img/mango.png"; 
import peru from './img/peru.png';
import Watermelon from './img/watermelon.png';
import passion_fruit from "./img/passion_fruit.png";
import avocado from "./img/avocado.png";
import berry from "./img/berry.png";
import lichi from "./img/lichi.png";
import mangosteen from "./img/mangosteen.png";
import cashew_apple from "./img/cashew_apple.png";
import persimmon from "./img/Persimmon.png";
import dragon_fruit from "./img/dragon_fruit.png";
import red_cabbage from './img/red_cabbage.png';
import cherry_tomato from "./img/cherry_tomato.png";
import Brocolli from "./img/Brocolli.png";
import Red_Peprika from "./img/Red_Peprika.png";
import yellow_pepper from "./img/yellow_pepper.png";
import musroom from "./img/mushroom.png";
import babycorn from "./img/babycorn.png";
import green_lettuce from "./img/green_lettuce.png";
const productImage ={
  potato: potato,
  gawar: gawar,
  flower: flower,
  karal: karal,
  cucumber: cucumber,
  cabage: cabage,
  shimla: shimla,
  tomato: tomato,
  Pomegranate: Pomegranate,
  apple1: apple1,
  orange: orange,
  mango: mango,
  peru: peru,
  Watermelon: Watermelon,
  passion_fruit: passion_fruit,
  avocado: avocado,
  berry: berry,
  lichi: lichi,
  mangosteen: mangosteen,
  cashew_apple: cashew_apple,
  persimmon: persimmon,
  dragon_fruit: dragon_fruit,
  red_cabbage: red_cabbage,
  cherry_tomato: cherry_tomato,
  Brocolli: Brocolli,
  Red_Peprika: Red_Peprika,
  yellow_pepper: yellow_pepper,
  musroom: musroom,
  babycorn: babycorn,
  green_lettuce: green_lettuce

}

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Access the 'id' parameter from the URL

  useEffect(() => {
    const selectedProduct = productsData.find((product) => product.id === id);

    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const imageSrc = productImage[product.image];
  return (
    <>
    <Header />
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={imageSrc} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
    </div>
    </>
  );
}

export default ProductDetails;
