import React from 'react';
import './About.css';
import Header from './Header';
import Footer from './Footer';
const AboutPage = () => {
  return (
    <>
    <Header />
    <div className='container_about'>
      <div className="about-page">
        <h1>About Organic Vegetables & Fruits</h1>
        <p className="about-text">
            The term “organic” refers to the way agricultural products are grown and processed. Organically grown food is food that has been produced without the use of synthetic pesticides, synthetic fertilizers or sewage sludge, bioengineering, or ionizing radiation.
        </p>
        <div className='main_text'>
          <h2>The benefits of organic food</h2>
          <p>
            Organic produce tends to contain higher levels of vitamin C and lower levels of nitrates. How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment. Organic foods often have more beneficial nutrients, such as antioxidants, than their conventionally-grown counterparts and people with allergies to foods, chemicals, or preservatives 
            may find their symptoms lessen or go away when they eat only organic foods. Organic produce contains fewer pesticides. Chemicals such as synthetic fungicides, herbicides, and insecticides are widely used in conventional agriculture and residues remain on (and in) the food we eat. Organic food is often fresher because it doesn't contain preservatives that make it last longer. Organic produce is sometimes (but not always, so watch where it is from) 
            produced on smaller farms nearer to where it is sold. Organic farming tends to be better for the environment. Organic farming practices may reduce pollution, conserve water, reduce soil erosion, increase soil fertility, and use less energy. Farming without synthetic pesticides is also better for nearby birds and animals as well as people who live close to farms.
            Organic food is GMO-free. Genetically Modified Organisms (GMOs) or genetically engineered (GE) foods are plants whose DNA has been altered in ways that cannot occur in nature or in traditional crossbreeding, most commonly in order to be resistant to pesticides or produce an insecticide.
          </p>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
