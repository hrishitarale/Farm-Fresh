
const productsData = [
    {
      id: '111',
      title: 'Potato',
      description: `The potato is a starchy food, a tuber of the plant Solanum tuberosum and is a root vegetable. They are rich in vitamin C, which is an antioxidant. Potatoes were a life-saving food source in early times because the vitamin C prevented scurvy.Another major nutrient in potatoes is potassium, an electrolyte which aids in the workings of our heart, muscles, and nervous system.`, 
      price: `25/Kg`,
      image: 'potato',
    },
    {
      id: '112',
      title: 'Cluster Beans',
      description: `Cluster beans, also known as Gavar, are a simple vegetable. It used to be found in the wild, but now it's often found as food. They can also be used to grow plants. It grows in semiarid places where it rains often and regularly. Cluster beans are rich in fibers and potassium. They have low fat and calorie content and higher plant proteins. They reduce cholesterol, maintain blood flow in vessels and blood pressure levels, and improve heart health. The calcium and phosphorus minerals in guar beans fortify bones and enhance bone health.`,
      price: `50/kg`,
      image: 'gawar',
    },
    {
        id: '113',
        title: 'Cauliflower',
        description: `Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae family. It is an annual plant that reproduces by seed. Typically, only the head is eaten. Cauliflower is a heart-friendly vegetable thanks to a plant compound called sulforaphane. Acting as an antioxidant, sulforaphane reduces the inflammatory damage caused by oxidative stress, a process which plays a central role in the development of heart disease. In this way it helps reduce blood pressure and atherosclerosis.`,
        price:`30/Kg`,
        image: 'flower',
    },
    {
      id:'114',
      title: 'Bitter gourd (Karela)',
      description: `It is a tropical vine that belongs to the gourd family and is closely related to zucchini, squash, pumpkin, and cucumber.
      It’s cultivated around the world for its edible fruit, which is considered a staple in many types of Asian cuisine. Bitter gourd reduces several blood-sugar control markers, including hemoglobin A1c and fructosamine. Bitter gourd is low in calories and high in fibers, which helps decrease body weight. Vitamin folate, zinc, iron, and potassium are present in the bitter gourd, essential during neural growth and development in a fetus.`,
      price:`40/Kg`,
      image: 'karal',
    },
    {
      id: '115',
      title: 'cucumber',
      description: `The cucumber is a widely-cultivated creeping vine plant in the family Cucurbitaceae that bears cylindrical to spherical fruits, which are used as culinary vegetables. Cucumbers are popular long, lean, and green garden vegetables. Technically, they’re fruits from the same family as watermelons and pumpkins, but most people consider them veggies.`,
      price: `120/Kg`,
      image: 'cucumber',
    },
    {
      id: '116',
      title: 'Cabage',
      description: `Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. Cabbage, especially red cabbage, seems to raise levels of beta-carotene, lutein, and other heart-protective antioxidants. It also helps lower something called “oxidized” LDL, which is linked to hardening of the arteries. And since it eases inflammation, it can help prevent heart disease.`,
      price:`80/Kg`,
      image: 'cabage',
    },
    {
      id:'117',
      title:'Capsicum',
      description: `Capsicums are also called green, red or yellow peppers. The two varieties are sweet pepper or chili pepper. Capsicum may help in managing blood glucose, dyslipidemia, cancers, and healing wounds. Additionally, it may help in boosting immunity, metabolism, preventing cataracts, and may provide symptomatic relief in arthritis, Crohns disease and yellow fever.`,
      price:`120/Kg`,
      image:'shimla',
    },
    {
      id:'118',
      title: 'Tomato',
      description: `The tomato is a fruit from the nightshade family native to South America.
      Despite botanically being a fruit, it’s generally eaten and prepared like a vegetableTomatos may ease inflammation, boost your immune system, lower your cholesterol levels, and keep your blood from clotting. All those things may help prevent strokes.`,
      price:`90/Kg`,
      image:'tomato',
    },
    //Fruits
    {
      id:'200',
      title:'Pomegranate',
      description:`Pomegranates are round, red fruits. They feature a white inner flesh that’s densely packed with crunchy, juicy edible seeds called arils.
      They may be best known for the vibrantly colored juice they’re often used in, but these unique fruits have a lot more to offer. Pomegranates can have up to three times more antioxidants than green tea or red wine. Antioxidants protect cells from damage and reduce inflammation and the effects of aging. Studies have suggested that pomegranates can protect your heart in many ways, including lowering blood pressure and reducing blood sugar levels.`,
      price:`70/Kg`,
      image: 'Pomegranate',
    },
    {
      id:'201',
      title:'Apple',
      description: 'An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples are an incredibly nutritious fruit that offers multiple health benefits. They are rich in fiber and antioxidants. Eating them is linked to a lower risk of many chronic conditions, including diabetes, heart disease, and cancer.',
      price:`140/Kg`,
      image: 'apple1',
    },
    {
      id:'202',
      title:'Orange',
      description: `An orange is a fruit of various citrus species in the family Rutaceae. The orange originated in a region encompassing Southern China, Northeast India, and Myanmar. The vitamin C in oranges helps your body in lots of ways: Protects your cells from damage. Helps your body make collagen, a protein that heals wounds and gives you smoother skin. Makes it easier to absorb iron to fight anemia. Boosts your immune system, your body's defense against germs.`,
      price:`150/Kg`,
      image: 'orange',
    },
    {
      id: '203',
      title: 'Mango',
      description:`Mangifera indica, commonly known as mango, is a species of flowering plant in the family Anacardiaceae. It is a large fruit tree, capable of growing to a height of 30 metres. This juicy fruit, rightly called the 'king' has some 1500 varieties growing in India. Each variety has a distinct taste, shape and colour. From the rose-red Gulab Khas or Sindhura to parrot beak shaped Totapuri, unique mango varieties reign the Indian markets. They are a great source of magnesium and potassium, both of which are connected to lower blood pressure and a regular pulse. Furthermore, mangos are the source of a compound known as mangiferin, which early studies suggest may be able to reduce inflammation of the heart. Mangos can help stabilize your digestive system.`, 
      price:`120/Kg`,
      image:'mango',
    },
    {
      id:'204',
      title:'Guava',
      description: `The common guava Psidium guajava (lemon guava, apple guava) is a small tree in the myrtle family, Guava is the fourth most widely grown fruit crop in India. Guava is bursting with Vitamin C, which is critical for maintaining immune health. Studies show that Vitamin C can reduce the length of a cold's duration and fight bacteria.`,
      price:`150/kg`,
      image:'peru',
    },
    {
      id:'205',
      title:'Watermelon',
      description:`Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties.Watermelon's high water content, antioxidants, and amino acids may make for a better workout. It's also high in potassium, a mineral that could cut down on cramps at the gym. You can sip watermelon juice after you sweat, too. Doing so could help prevent muscle soreness, as long as you don't push yourself too hard.`, 
      price:`80/Kg`,
      image:'Watermelon',
    },
    //exotic vegetable
    {
      id:'300',
      title:'Brocolli',
      description: `Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. 
      Broccoli is a nutrient-rich vegetable that may enhance your health in a variety of ways, such as by reducing inflammation, improving blood sugar control, boosting immunity and promoting heart health.`,
      price:`180/Kg`,
      image:'Brocolli'
    },
    {
      id:'301',
      title:'Red Bell Pepper',
      description:`Red bell peppers are simply ripened green peppers. The vitamin A and beta-carotene in red peppers offers good support for your overall vision and eye health. Vitamin A is also helpful in supporting skin cells, healing wounds, and boosting white blood cell growth.`,
      price:`190/Kg`,
      image:'Red_Peprika'
    },
    {
      id:'302',
      title:'Yellow Bell Pepper',
      description: `Yellow Bell Pepper is a variety of coloured Capsicums. It gets its bright pigment from the pH of the soil and is basically a ripened green pepper. Yellow Peppers are very mild in flavour and sweet in taste. They are quite juicy and can be cooked very easily.
      They're packed with vitamins and low in calories! They are an excellent source of vitamin A, vitamin C, and potassium. Bell Peppers also contain a healthy dose of fiber, folate, and iron.`,
      price:`190/Kg`,
      image:'yellow_pepper'
    },
    {
      id:'303',
      title:'Button Mushroom',
      description: `Button mushrooms are a tasty, versatile mushroom variety. They have a full, woodsy flavour, holding their shape yet turning velvet soft as they cook. They can be sautéed, grilled, or used in risotto or as a pizza topping. Mushrooms contain macronutrients that support a healthy immune system. According to the Mushroom Council, your immune system will benefit from mushrooms whose nutrients include: Selenium, which helps your body make antioxidant enzymes to prevent cell damage.`,
      price:`150/Kg`,
      image:'musroom'
    },
    {
      id:'304',
      title:'Red Cabbage',
      description: `The red cabbage is a kind of cabbage, also known as Blaukraut after preparation. Its leaves are colored dark red/purple. However, the plant changes its color according to the pH value of the soil due to a pigment belonging to anthocyanins. In acidic soils, the leaves grow more reddish; in neutral soils, they will grow more purple.
      Red cabbage is high in fiber, making it easier to digest foods and keep your digestive system healthy. The high fiber content can keep food moving through your digestive system and reduce constipation. The soluble fiber in red cabbage can help the beneficial bacteria in your gut.`,
      price:`220/Kg`,
      image:'red_cabbage'
    },
    {
      id:'305',
      title:'Red Cherry Tomato',
      description: `The cherry tomato is a type of small round tomato believed to be an intermediate genetic admixture between wild currant-type tomatoes and domesticated garden tomatoes.
      Cherry tomatoes range in size from a thumbtip up to the size of a golf ball, and can range from spherical to slightly oblong in shape. Cherry tomatoes are rich in lycopene, which is great at fighting free radicals that cause disease. Lycopene can also limit UV damage to your skin from sun exposure and promote better heart health. Cherry tomatoes are also an excellent source of: Vitamin A.`,
      price:`140/Kg`,
      image:'cherry_tomato'
    },
    {
      id:'306',
      title:'Baby Corn',
      description: `Used extensively in Asian and oriental cooking, baby corn has been touted as one of the healthiest veggies you can add to your stir fries and salads. Baby corns are just regular corns which are picked before maturing.
      Baby Corn provides the valuable nutrients that lack in most people's diets. It is high in potassium, folic acid, and is a rich source of vitamins A, B, E and many other minerals. Furthermore, it is extremely low in fat and has a lower Glycemic index than regular corn making it a great substitute.`,
      price:`210/Kg`,
      image:'babycorn'
    },
    {
      id:'307',
      title:'Green Lettuce',
      description: `Lettuce is an annual plant of the family Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, 
      although it is also seen in other kinds of food, such as soups and sandwiches .Lettuce is an excellent source of beta carotene (vitamin A) which is needed for healthy skin, bones, and eyes. 
      Lettuce is a fair source of folate, which is needed for healthy cells and the healthy growth of babies during pregnancy in order to prevent neural tube defects.`,
      price:`210/Kg`,
      image:'green_lettuce'
    },
    {
      id:'400',
      title:'Avocado',
      description:`The avocado is a medium-sized, evergreen tree in the laurel family. It is native to the Americas and was first domesticated by Mesoamerican tribes more than 5,000 years ago. Then as now it was prized for its large and unusually oily fruit.
      Avocados contain a wide range of nutrients and may have various health benefits. These include improving digestion, lowering the risk of depression, preventing bone loss, supporting heart health, protecting against cancer,`,
      price:`275/Kg`,
      image:'Avocado',
    },
    {
      id:'401',
      title:'Lychees',
      description:`Lychee or litchi is an edible fleshy fruit of the soapberry family (Sapindaceae). This sweet fruit has brittle strawberry-red colored inedible leathery outer covering, a white flesh, and one large brown blacked seed. Lychees have a sweet and flowery flavor.
      As lychees are rich in potassium, it is a must-have food item on your list to maintain your blood pressure. It is rich in iron, copper, manganese, phosphorus, and magnesium, which improve bone and heart health.
      Lychees are a rich source of numerous antioxidant-plant compounds, including epicatechin and rutin, which help protect against oxidative stress, chronic diseases, cataract, diabetes, heart diseases, and cancers.`,
      price:`390/Kg`,
      image:'lichi',
    },
    {
      id:'402',
      title:'Passion Fruit',
      description:`Passion fruit is an exotic purple fruit, that can be a healthful addition to a balanced diet. Passion fruit contains high levels of key vitamins and minerals and is rich in antioxidants. Passion fruit is rich in antioxidants, dietary fiber,
      it has low glycemic index (GI) value. This means that it does not cause a steep increase in blood sugar after eating it, making it a good option for people with diabetes.`,
      price:`140/Kg`,
      image:'passion_fruit',
    },
    {
      id:'403',
      title:'Blue Berry',
      description:`Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium.
      Blueberries contain one of the highest antioxidant levels, anthocyanidins, which are found in berry fruits may support the cardiovascular system. Blueberries are both low in sugar and a good source of fibre, as a result they have a low Glycaemic Index (GI). This, together with their high flavonoid content, may help improve insulin sensitivity which is important for managing blood sugar levels`,
      price:`375/Kg`,
      image:'berry',
    },
    {
      id:'404',
      title:'Persimmon',
      description:`The persimmon is a fruit that comes from certain trees in the genus Diospyros. Like the tomato, it is technically a berry but rarely considered one.
      The fruit is picked in late fall and sometimes stays on the tree into winter. Depending on the strain, the color ranges from yellow to dark red-orange.Persimmons are rich in vitamins, minerals, and antioxidants, which each provide important health benefits. For example, vitamin C helps support the immune system and protect against heart disease.
      Persimmons are also high in soluble dietary fiber, which slows the digestion of carbohydrates, preventing spikes in blood sugar.`,
      price:`980/Kg`,
      image:'persimmon',
    },
    {
      id:'405',
      title:'Dragon Fruit',
      description:`Dragon fruit is a food that grows on a climbing cactus called hylocereus, which you'll find in tropical regions around the world.On the outside, the fruit has the appearance of a hot pink or yellow bulb with spike-like green leaves shooting up like flames around it. Cut it open, and you'll find fleshy white stuff inside dotted with black seeds that are OK to eat.
      Dragon fruit has many potential health benefits, It’s rich in antioxidants like flavonoids, phenolic acid, and betacyanin. These natural substances protect your cells from damage by free radicals -- molecules that can lead to diseases like cancer and premature aging.
      It’s naturally fat-free and high in fiber. It makes for a good snack because it can help keep you full for longer between meals.`,
      price:`180/Kg`,
      image:'dragon_fruit',
    },
    {
      id:'406',
      title:'Mangosteen',
      description:`Mangosteen is a tropical plant cultivated in areas such as Indonesia, Malaysia, Sri Lanka, Philippines, and Thailand. It has been consumed as fruit, juice and used as traditional medicine
      Mangosteen has been used to treat skin infections and diarrhea. Recent scientific studies suggest that mangosteen possesses strong antioxidant, anti-cancer, anti-inflammatory, anti-allergic, anti-microbial, and anti-malarial properties. Xanthone and vitamins in mangosteen are considered the major active components.`,
      price:`835/Kg`,
      image:'mangosteen',
    },
    {
      id:'407',
      title:'cashew apple',
      description:`Cashew apple is erroneously known as the fruit of the cashew tree, but it's not. The nuts are the true fruit and the apple is pseudo-fruit or the swollen stem of the fruit. That's because the nut develops first and the apple follows.In India, cashew apples are it's called kajoo phal in Hindi and Marathi, and kashu manga in Malayalam.
      The juicy, fibrous flesh of the cashew apples is rich in sugars, amino acids, tannins, ascorbic acid, pectin, dietary fibre and antioxidants. In addition to these, they also contain good amounts of minerals like calcium and phosphorus. The apples are six times richer than citrus fruits when it comes to vitamin C`,
      price:`900/Kg`,
      image:'cashew_apple',
    },
    
  ];
  
  export default productsData;
  