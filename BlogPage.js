import React, { useState } from 'react';
import './BlogPage.css';
import Header from './Header';
import Food from "./img/Food.jpeg";
import mango from "./img/mango.jpeg";
const BlogPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'Old is gold and always will be',
      content: `Having a hard time choosing what to eat? Not good at all.
      True, there are several superfoods available to us that can satisfy our hunger as well as give us exactly the perfect amount of energy to get through the day. Additionally, according to popular belief, we do not consume more calories than our forebears. Despite taking several fitness programmes, it is our generation that experiences the greatest physical health issues and the greatest burden of various diseases.
      Why? The solution is actually found in what we eat, not in what we do. This necessitates a review of how our predecessors used to eat back then. This is due to the fact that, unlike what the general public believes, the broad variety of food we actually have in front of us does not actually promote our health. This argument most definitely does not hold given the present rise in allergies and chronic disorders.
      It's time to eat like our great-great-great grandparents if you want to combat this and survive long enough to become grandparents. It is considerably more desirable to pull out the recipes from our long-gone ancestors than to hunt for the most recent healthy cuisine book. Our bodies cannot just survive on the everyday consumption of nutritious shakes and juices since they are continually evolving. The ideal balance of all the nutrients that our bodies require is hindered by the foods we eat as well as the kind of additives we add to them. While heating vegetables does help to remove many unwanted chemicals, it is much more challenging to eliminate the chemical waste left over from farming. Additionally, the current practise of eating raw fruits and vegetables as a salad in several regions of the world means we also consume the dangerous pesticides.The key is to consume a sufficiently balanced diet to allay concerns about nutritional deficiency.
      It is also essential to take a second look at the types of ingredients being consumed in order to maintain this well-balanced diet.  When we additionally begin consuming organic food and veggies, eating like our forefathers can be properly rendered just. All of the nutrients required for the body's overall growth are retained in 100% organic food without any taste-related compromises.
      Our forefathers' diets included organic grains, organic pulses, and organic lentils. These organic foods and healthy diets significantly help with weight loss, heart disease prevention, and many other concomitant diseases.
      Eating culturally doesn't mean imitating their diet. It simply indicates that we appreciate our health more and do not endanger it by exposing it to unneeded toxic substances. Only for the sake of comfort can a healthy lifestyle be sacrificed.
      It takes a lot of effort to maintain a healthy body and mind. Organic fruits and vegetables are another way that everyone can stay on this path.
      The 100% organic produce available at Fram Fresh is dedicated to this positive health narrative. To browse their selection of farm fresh organic vegetables and have them delivered right to your door, all you have to do is visit their website`,
image: Food, 
    },
    {
      id: 2,
      title: 'Celebrating the mango: Why not?',
      Image: '/img/mango.jpg'  ,
      content: `Everyone can agree on two things about India: we Indians enjoy festivals and we love mangoes. This goes true for both taking enjoyment in the festival as it is happening right now and eagerly anticipating the upcoming season. Then someone had the brilliant idea to combine both of them. Guess what we finally had?
      Mango festivities! The mango festival is mostly organised in June and July, the height of summer, when the King of Fruits is at its ripest. For the great enjoyment of mango enthusiasts, all the renowned mangoes from various regions of India may be discovered in one location. The festival also provides an opportunity for mango growers to showcase their expertise. Mango products made organically have also gained popularity, and most customers seek them out. Although the traditional mango pickles, chutneys, etc. are still widely consumed, many people now prefer them with an organic twist. The International Mango Festival is held in Delhi, India, and features over 500 different mango types from throughout the world. Since 1987, a two-day event has been held there. The huge scope of this festival also impresses the majority of foreign tourists. The variety of foods that are actually produced using mangoes surprised them because they are used to only eating mangoes, whether it be the well-known Alphonso mango, Langda, etc. Even though India sells over 40000 metric tonnes of mangoes to 80 different nations, travellers still find the production size to be fascinating. When it comes to mango festivals, the place that is home to the famous Ratnagiri Alphonso cannot be far behind. AambaMahotsav is the variant held in Maharashtra. The festival is originally founded on the idea that mango aficionados should have the opportunity to purchase their preferred fruit directly from the farmers at market value. People can purchase their hapus and payari under one roof for a non-market price from the festival's farmers, the majority of them are from the Konkan region. However, most people are unable to find the time to attend to a festival to buy mangoes due to everyone's hectic schedules. They enjoy buying mangoes online since it is more convenient. Mangoes can be purchased online through services like “FarmFresh”. But what sets them distinct from competitors, in addition to offering consumers unique organic, farm-fresh, 100% certified mangoes, is that they also purchase their goods directly from the farmers.
      This indicates The amount you pay for buying mangoes online is the same price you would pay to a farmer in person at a mango festival because there is no middleman in the transaction. Don't hesitate to use this helpful local organic food delivery service.
      `,
      image: mango,
    },
    
  ];

  const handleCardClick = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <>
    <Header />
    <div className='container_blog'> 
    <div className="blog-page">
      {blogs.map((blog) => (
        <div
          className={`blog-card ${expandedCard === blog.id ? 'expanded' : ''}`}
          key={blog.id}
          onClick={() => handleCardClick(blog.id)}
        >
          <h2 className="blog-title">{blog.title}</h2>
          <img className='blog-image' src={blog.image} alt={blog.title}/>
          {expandedCard === blog.id ? 
          (
    
            <p className="blog-content">{blog.content}</p>
          ) : null}
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default BlogPage;
