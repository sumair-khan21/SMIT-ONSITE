// function expression jo varaible k ander store hota hy
// JavaScript Hoisting ka kam hota hy function ko upar le jata hy
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element

// var x; // Declare x

// // example 2
// var x; // Declare x
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element


// function ko upar le jata hy to undefined return karta hy

// varaible scope 


let products = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    },
    {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
    "rate": 4.7,
    "count": 500
    }
    },
    {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
    "rate": 2.1,
    "count": 430
    }
    },
    {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 4.6,
    "count": 400
    }
    },
    {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 70
    }
    },
    {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 3,
    "count": 400
    }
    },
    {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 1.9,
    "count": 100
    }
    },
    {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
    "rate": 3.3,
    "count": 203
    }
    },
    {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 470
    }
    },
    {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
    "rate": 4.8,
    "count": 319
    }
    },
    {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
    "rate": 4.8,
    "count": 400
    }
    },
    {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 250
    }
    },
    {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
    "rate": 2.2,
    "count": 140
    }
    },
    {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
    "rate": 2.6,
    "count": 235
    }
    },
    {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 340
    }
    },
    {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
    "rate": 3.8,
    "count": 679
    }
    },
    {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
    "rate": 4.7,
    "count": 130
    }
    },
    {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
    "rate": 4.5,
    "count": 146
    }
    },
    {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
    "rate": 3.6,
    "count": 145
    }
    }
]






















let recipes =  [
    {
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste"
    ],
    "instructions": [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "tags": [
    "Pizza",
    "Italian"
    ],
    "userId": 166,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "reviewCount": 98,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 2,
    "name": "Vegetarian Stir-Fry",
    "ingredients": [
    "Tofu, cubed",
    "Broccoli florets",
    "Carrots, sliced",
    "Bell peppers, sliced",
    "Soy sauce",
    "Ginger, minced",
    "Garlic, minced",
    "Sesame oil",
    "Cooked rice for serving"
    ],
    "instructions": [
    "In a wok, heat sesame oil over medium-high heat.",
    "Add minced ginger and garlic, sauté until fragrant.",
    "Add cubed tofu and stir-fry until golden brown.",
    "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
    "Pour soy sauce over the stir-fry and toss to combine.",
    "Serve over cooked rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Medium",
    "cuisine": "Asian",
    "caloriesPerServing": 250,
    "tags": [
    "Vegetarian",
    "Stir-fry",
    "Asian"
    ],
    "userId": 143,
    "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
    "rating": 4.7,
    "reviewCount": 26,
    "mealType": [
    "Lunch"
    ]
    },
    {
    "id": 3,
    "name": "Chocolate Chip Cookies",
    "ingredients": [
    "All-purpose flour",
    "Butter, softened",
    "Brown sugar",
    "White sugar",
    "Eggs",
    "Vanilla extract",
    "Baking soda",
    "Salt",
    "Chocolate chips"
    ],
    "instructions": [
    "Preheat the oven to 350°F (175°C).",
    "In a bowl, cream together softened butter, brown sugar, and white sugar.",
    "Beat in eggs one at a time, then stir in vanilla extract.",
    "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
    "Fold in chocolate chips.",
    "Drop rounded tablespoons of dough onto ungreased baking sheets.",
    "Bake for 10-12 minutes or until edges are golden brown.",
    "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 24,
    "difficulty": "Easy",
    "cuisine": "American",
    "caloriesPerServing": 150,
    "tags": [
    "Cookies",
    "Dessert",
    "Baking"
    ],
    "userId": 34,
    "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
    "rating": 4.9,
    "reviewCount": 13,
    "mealType": [
    "Snack",
    "Dessert"
    ]
    },
    {
    "id": 4,
    "name": "Chicken Alfredo Pasta",
    "ingredients": [
    "Fettuccine pasta",
    "Chicken breast, sliced",
    "Heavy cream",
    "Parmesan cheese, grated",
    "Garlic, minced",
    "Butter",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
    ],
    "instructions": [
    "Cook fettuccine pasta according to package instructions.",
    "In a pan, sauté sliced chicken in butter until fully cooked.",
    "Add minced garlic and cook until fragrant.",
    "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
    "Season with salt and pepper to taste.",
    "Combine the Alfredo sauce with cooked pasta.",
    "Garnish with fresh parsley before serving."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 4,
    "difficulty": "Medium",
    "cuisine": "Italian",
    "caloriesPerServing": 500,
    "tags": [
    "Pasta",
    "Chicken"
    ],
    "userId": 136,
    "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
    "rating": 4.9,
    "reviewCount": 82,
    "mealType": [
    "Lunch",
    "Dinner"
    ]
    },
    {
    "id": 5,
    "name": "Mango Salsa Chicken",
    "ingredients": [
    "Chicken thighs",
    "Mango, diced",
    "Red onion, finely chopped",
    "Cilantro, chopped",
    "Lime juice",
    "Jalapeño, minced",
    "Salt and pepper to taste",
    "Cooked rice for serving"
    ],
    "instructions": [
    "Season chicken thighs with salt and pepper.",
    "Grill or bake chicken until fully cooked.",
    "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
    "Dice the cooked chicken and mix it with the mango salsa.",
    "Serve over cooked rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "cuisine": "Mexican",
    "caloriesPerServing": 380,
    "tags": [
    "Chicken",
    "Salsa"
    ],
    "userId": 26,
    "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
    "rating": 4.9,
    "reviewCount": 63,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 6,
    "name": "Quinoa Salad with Avocado",
    "ingredients": [
    "Quinoa, cooked",
    "Avocado, diced",
    "Cherry tomatoes, halved",
    "Cucumber, diced",
    "Red bell pepper, diced",
    "Feta cheese, crumbled",
    "Lemon vinaigrette dressing",
    "Salt and pepper to taste"
    ],
    "instructions": [
    "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
    "Drizzle with lemon vinaigrette dressing and toss to combine.",
    "Season with salt and pepper to taste.",
    "Chill in the refrigerator before serving."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Mediterranean",
    "caloriesPerServing": 280,
    "tags": [
    "Salad",
    "Quinoa"
    ],
    "userId": 197,
    "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
    "rating": 4.4,
    "reviewCount": 59,
    "mealType": [
    "Lunch",
    "Side Dish"
    ]
    },
    {
    "id": 7,
    "name": "Tomato Basil Bruschetta",
    "ingredients": [
    "Baguette, sliced",
    "Tomatoes, diced",
    "Fresh basil, chopped",
    "Garlic cloves, minced",
    "Balsamic glaze",
    "Olive oil",
    "Salt and pepper to taste"
    ],
    "instructions": [
    "Preheat the oven to 375°F (190°C).",
    "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
    "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
    "Season with salt and pepper to taste.",
    "Top each toasted baguette slice with the tomato-basil mixture.",
    "Drizzle with balsamic glaze before serving."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 6,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 120,
    "tags": [
    "Bruschetta",
    "Italian"
    ],
    "userId": 137,
    "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
    "rating": 4.7,
    "reviewCount": 95,
    "mealType": [
    "Appetizer"
    ]
    },
    {
    "id": 8,
    "name": "Beef and Broccoli Stir-Fry",
    "ingredients": [
    "Beef sirloin, thinly sliced",
    "Broccoli florets",
    "Soy sauce",
    "Oyster sauce",
    "Sesame oil",
    "Garlic, minced",
    "Ginger, minced",
    "Cornstarch",
    "Cooked white rice for serving"
    ],
    "instructions": [
    "In a bowl, mix soy sauce, oyster sauce, sesame oil, and cornstarch to create the sauce.",
    "In a wok, stir-fry thinly sliced beef until browned. Remove from the wok.",
    "Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok.",
    "Add the cooked beef back to the wok and pour the sauce over the mixture.",
    "Stir until everything is coated and heated through.",
    "Serve over cooked white rice."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Medium",
    "cuisine": "Asian",
    "caloriesPerServing": 380,
    "tags": [
    "Beef",
    "Stir-fry",
    "Asian"
    ],
    "userId": 18,
    "image": "https://cdn.dummyjson.com/recipe-images/8.webp",
    "rating": 4.7,
    "reviewCount": 58,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 9,
    "name": "Caprese Salad",
    "ingredients": [
    "Tomatoes, sliced",
    "Fresh mozzarella cheese, sliced",
    "Fresh basil leaves",
    "Balsamic glaze",
    "Extra virgin olive oil",
    "Salt and pepper to taste"
    ],
    "instructions": [
    "Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.",
    "Tuck fresh basil leaves between the slices.",
    "Drizzle with balsamic glaze and extra virgin olive oil.",
    "Season with salt and pepper to taste.",
    "Serve immediately as a refreshing salad."
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 200,
    "tags": [
    "Salad",
    "Caprese"
    ],
    "userId": 128,
    "image": "https://cdn.dummyjson.com/recipe-images/9.webp",
    "rating": 4.6,
    "reviewCount": 82,
    "mealType": [
    "Lunch"
    ]
    },
    {
    "id": 10,
    "name": "Shrimp Scampi Pasta",
    "ingredients": [
    "Linguine pasta",
    "Shrimp, peeled and deveined",
    "Garlic, minced",
    "White wine",
    "Lemon juice",
    "Red pepper flakes",
    "Fresh parsley, chopped",
    "Salt and pepper to taste"
    ],
    "instructions": [
    "Cook linguine pasta according to package instructions.",
    "In a skillet, sauté minced garlic in olive oil until fragrant.",
    "Add shrimp and cook until pink and opaque.",
    "Pour in white wine and lemon juice. Simmer until the sauce slightly thickens.",
    "Season with red pepper flakes, salt, and pepper.",
    "Toss cooked linguine in the shrimp scampi sauce.",
    "Garnish with chopped fresh parsley before serving."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Medium",
    "cuisine": "Italian",
    "caloriesPerServing": 400,
    "tags": [
    "Pasta",
    "Shrimp"
    ],
    "userId": 114,
    "image": "https://cdn.dummyjson.com/recipe-images/10.webp",
    "rating": 4.3,
    "reviewCount": 5,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 11,
    "name": "Chicken Biryani",
    "ingredients": [
    "Basmati rice",
    "Chicken, cut into pieces",
    "Onions, thinly sliced",
    "Tomatoes, chopped",
    "Yogurt",
    "Ginger-garlic paste",
    "Biryani masala",
    "Green chilies, sliced",
    "Fresh coriander leaves",
    "Mint leaves",
    "Ghee",
    "Salt to taste"
    ],
    "instructions": [
    "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt.",
    "In a pot, sauté sliced onions until golden brown. Remove half for later use.",
    "Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot.",
    "Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions.",
    "Cover and cook on low heat until the rice is fully cooked and aromatic.",
    "Serve hot, garnished with additional coriander and mint leaves."
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 45,
    "servings": 6,
    "difficulty": "Medium",
    "cuisine": "Pakistani",
    "caloriesPerServing": 550,
    "tags": [
    "Biryani",
    "Chicken",
    "Main course",
    "Indian",
    "Pakistani",
    "Asian"
    ],
    "userId": 133,
    "image": "https://cdn.dummyjson.com/recipe-images/11.webp",
    "rating": 5,
    "reviewCount": 32,
    "mealType": [
    "Lunch",
    "Dinner"
    ]
    },
    {
    "id": 12,
    "name": "Chicken Karahi",
    "ingredients": [
    "Chicken, cut into pieces",
    "Tomatoes, chopped",
    "Green chilies, sliced",
    "Ginger, julienned",
    "Garlic, minced",
    "Coriander powder",
    "Cumin powder",
    "Red chili powder",
    "Garam masala",
    "Cooking oil",
    "Fresh coriander leaves",
    "Salt to taste"
    ],
    "instructions": [
    "In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.",
    "Add chicken pieces and cook until browned on all sides.",
    "Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.",
    "Cover and simmer until the chicken is tender and the oil separates from the masala.",
    "Garnish with fresh coriander leaves and serve hot with naan or rice."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Pakistani",
    "caloriesPerServing": 420,
    "tags": [
    "Chicken",
    "Karahi",
    "Main course",
    "Indian",
    "Pakistani",
    "Asian"
    ],
    "userId": 49,
    "image": "https://cdn.dummyjson.com/recipe-images/12.webp",
    "rating": 4.8,
    "reviewCount": 68,
    "mealType": [
    "Lunch",
    "Dinner"
    ]
    },
    {
    "id": 13,
    "name": "Aloo Keema",
    "ingredients": [
    "Ground beef",
    "Potatoes, peeled and diced",
    "Onions, finely chopped",
    "Tomatoes, chopped",
    "Ginger-garlic paste",
    "Cumin powder",
    "Coriander powder",
    "Turmeric powder",
    "Red chili powder",
    "Cooking oil",
    "Fresh coriander leaves",
    "Salt to taste"
    ],
    "instructions": [
    "In a pan, heat cooking oil and sauté chopped onions until golden brown.",
    "Add ginger-garlic paste and sauté until fragrant.",
    "Add ground beef and cook until browned. Drain excess oil if needed.",
    "Add diced potatoes, chopped tomatoes, and spices. Mix well.",
    "Cover and simmer until the potatoes are tender and the masala is well-cooked.",
    "Garnish with fresh coriander leaves and serve hot with naan or rice."
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 35,
    "servings": 5,
    "difficulty": "Medium",
    "cuisine": "Pakistani",
    "caloriesPerServing": 380,
    "tags": [
    "Keema",
    "Potatoes",
    "Main course",
    "Pakistani",
    "Asian"
    ],
    "userId": 152,
    "image": "https://cdn.dummyjson.com/recipe-images/13.webp",
    "rating": 4.6,
    "reviewCount": 53,
    "mealType": [
    "Lunch",
    "Dinner"
    ]
    },
    {
    "id": 14,
    "name": "Chapli Kebabs",
    "ingredients": [
    "Ground beef",
    "Onions, finely chopped",
    "Tomatoes, finely chopped",
    "Green chilies, chopped",
    "Coriander leaves, chopped",
    "Pomegranate seeds",
    "Ginger-garlic paste",
    "Cumin powder",
    "Coriander powder",
    "Red chili powder",
    "Egg",
    "Cooking oil",
    "Salt to taste"
    ],
    "instructions": [
    "In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds.",
    "Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well.",
    "Add an egg to bind the mixture and form into round flat kebabs.",
    "Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides.",
    "Serve hot with naan or mint chutney."
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 20,
    "servings": 4,
    "difficulty": "Medium",
    "cuisine": "Pakistani",
    "caloriesPerServing": 320,
    "tags": [
    "Kebabs",
    "Beef",
    "Indian",
    "Pakistani",
    "Asian"
    ],
    "userId": 152,
    "image": "https://cdn.dummyjson.com/recipe-images/14.webp",
    "rating": 4.7,
    "reviewCount": 98,
    "mealType": [
    "Lunch",
    "Dinner",
    "Snacks"
    ]
    },
    {
    "id": 15,
    "name": "Saag (Spinach) with Makki di Roti",
    "ingredients": [
    "Mustard greens, washed and chopped",
    "Spinach, washed and chopped",
    "Cornmeal (makki ka atta)",
    "Onions, finely chopped",
    "Green chilies, chopped",
    "Ginger, grated",
    "Ghee",
    "Salt to taste"
    ],
    "instructions": [
    "Boil mustard greens and spinach until tender. Drain and blend into a coarse paste.",
    "In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown.",
    "Add the greens paste and cook until it thickens.",
    "Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads).",
    "Cook the rotis on a griddle until golden brown.",
    "Serve hot saag with makki di roti and a dollop of ghee."
    ],
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Medium",
    "cuisine": "Pakistani",
    "caloriesPerServing": 280,
    "tags": [
    "Saag",
    "Roti",
    "Main course",
    "Indian",
    "Pakistani",
    "Asian"
    ],
    "userId": 43,
    "image": "https://cdn.dummyjson.com/recipe-images/15.webp",
    "rating": 4.3,
    "reviewCount": 86,
    "mealType": [
    "Breakfast",
    "Lunch",
    "Dinner"
    ]
    },
    {
    "id": 16,
    "name": "Japanese Ramen Soup",
    "ingredients": [
    "Ramen noodles",
    "Chicken broth",
    "Soy sauce",
    "Mirin",
    "Sesame oil",
    "Shiitake mushrooms, sliced",
    "Bok choy, chopped",
    "Green onions, sliced",
    "Soft-boiled eggs",
    "Grilled chicken slices",
    "Norwegian seaweed (nori)"
    ],
    "instructions": [
    "Cook ramen noodles according to package instructions and set aside.",
    "In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer.",
    "Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender.",
    "Divide the cooked noodles into serving bowls and ladle the hot broth over them.",
    "Top with green onions, soft-boiled eggs, grilled chicken slices, and nori.",
    "Serve hot and enjoy the authentic Japanese ramen!"
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Medium",
    "cuisine": "Japanese",
    "caloriesPerServing": 480,
    "tags": [
    "Ramen",
    "Japanese",
    "Soup",
    "Asian"
    ],
    "userId": 85,
    "image": "https://cdn.dummyjson.com/recipe-images/16.webp",
    "rating": 4.9,
    "reviewCount": 38,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 17,
    "name": "Moroccan Chickpea Tagine",
    "ingredients": [
    "Chickpeas, cooked",
    "Tomatoes, chopped",
    "Carrots, diced",
    "Onions, finely chopped",
    "Garlic, minced",
    "Cumin",
    "Coriander",
    "Cinnamon",
    "Paprika",
    "Vegetable broth",
    "Olives",
    "Fresh cilantro, chopped"
    ],
    "instructions": [
    "In a tagine or large pot, sauté chopped onions and minced garlic until softened.",
    "Add diced carrots, chopped tomatoes, and cooked chickpeas.",
    "Season with cumin, coriander, cinnamon, and paprika. Stir to coat.",
    "Pour in vegetable broth and bring to a simmer. Cook until carrots are tender.",
    "Stir in olives and garnish with fresh cilantro before serving.",
    "Serve this flavorful Moroccan dish with couscous or crusty bread."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Moroccan",
    "caloriesPerServing": 320,
    "tags": [
    "Tagine",
    "Chickpea",
    "Moroccan"
    ],
    "userId": 207,
    "image": "https://cdn.dummyjson.com/recipe-images/17.webp",
    "rating": 4.5,
    "reviewCount": 50,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 18,
    "name": "Korean Bibimbap",
    "ingredients": [
    "Cooked white rice",
    "Beef bulgogi (marinated and grilled beef slices)",
    "Carrots, julienned and sautéed",
    "Spinach, blanched and seasoned",
    "Zucchini, sliced and grilled",
    "Bean sprouts, blanched",
    "Fried egg",
    "Gochujang (Korean red pepper paste)",
    "Sesame oil",
    "Toasted sesame seeds"
    ],
    "instructions": [
    "Arrange cooked white rice in a bowl.",
    "Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts.",
    "Place a fried egg on top and drizzle with gochujang and sesame oil.",
    "Sprinkle with toasted sesame seeds before serving.",
    "Mix everything together before enjoying this delicious Korean bibimbap!",
    "Feel free to customize with additional vegetables or protein."
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Medium",
    "cuisine": "Korean",
    "caloriesPerServing": 550,
    "tags": [
    "Bibimbap",
    "Korean",
    "Rice"
    ],
    "userId": 121,
    "image": "https://cdn.dummyjson.com/recipe-images/18.webp",
    "rating": 4.9,
    "reviewCount": 56,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 19,
    "name": "Greek Moussaka",
    "ingredients": [
    "Eggplants, sliced",
    "Ground lamb or beef",
    "Onions, finely chopped",
    "Garlic, minced",
    "Tomatoes, crushed",
    "Red wine",
    "Cinnamon",
    "Allspice",
    "Nutmeg",
    "Olive oil",
    "Milk",
    "Flour",
    "Parmesan cheese",
    "Egg yolks"
    ],
    "instructions": [
    "Preheat oven to 375°F (190°C).",
    "Sauté sliced eggplants in olive oil until browned. Set aside.",
    "In the same pan, cook chopped onions and minced garlic until softened.",
    "Add ground lamb or beef and brown. Stir in crushed tomatoes, red wine, and spices.",
    "In a separate saucepan, make béchamel sauce: melt butter, whisk in flour, add milk, and cook until thickened.",
    "Remove from heat and stir in Parmesan cheese and egg yolks.",
    "In a baking dish, layer eggplants and meat mixture. Top with béchamel sauce.",
    "Bake for 40-45 minutes until golden brown. Let it cool before slicing.",
    "Serve slices of moussaka warm and enjoy this Greek classic!"
    ],
    "prepTimeMinutes": 45,
    "cookTimeMinutes": 45,
    "servings": 6,
    "difficulty": "Medium",
    "cuisine": "Greek",
    "caloriesPerServing": 420,
    "tags": [
    "Moussaka",
    "Greek"
    ],
    "userId": 173,
    "image": "https://cdn.dummyjson.com/recipe-images/19.webp",
    "rating": 4.3,
    "reviewCount": 26,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 20,
    "name": "Butter Chicken (Murgh Makhani)",
    "ingredients": [
    "Chicken thighs, boneless and skinless",
    "Yogurt",
    "Ginger-garlic paste",
    "Garam masala",
    "Kashmiri red chili powder",
    "Tomato puree",
    "Butter",
    "Heavy cream",
    "Kasuri methi (dried fenugreek leaves)",
    "Sugar",
    "Salt to taste"
    ],
    "instructions": [
    "Marinate chicken thighs in a mixture of yogurt, ginger-garlic paste, garam masala, and Kashmiri red chili powder.",
    "In a pan, melt butter and sauté the marinated chicken until browned.",
    "Add tomato puree and cook until the oil separates. Stir in heavy cream.",
    "Sprinkle kasuri methi, sugar, and salt. Simmer until the chicken is fully cooked.",
    "Serve this creamy butter chicken over rice or with naan for an authentic Pakistani/Indian experience."
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 25,
    "servings": 4,
    "difficulty": "Medium",
    "cuisine": "Pakistani",
    "caloriesPerServing": 480,
    "tags": [
    "Butter chicken",
    "Curry",
    "Indian",
    "Pakistani",
    "Asian"
    ],
    "userId": 138,
    "image": "https://cdn.dummyjson.com/recipe-images/20.webp",
    "rating": 4.5,
    "reviewCount": 44,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 21,
    "name": "Thai Green Curry",
    "ingredients": [
    "Chicken thighs, boneless and skinless",
    "Green curry paste",
    "Coconut milk",
    "Fish sauce",
    "Sugar",
    "Eggplant, sliced",
    "Bell peppers, sliced",
    "Basil leaves",
    "Jasmine rice for serving"
    ],
    "instructions": [
    "In a pot, simmer green curry paste in coconut milk.",
    "Add chicken, fish sauce, and sugar. Cook until chicken is tender.",
    "Stir in sliced eggplant and bell peppers. Simmer until vegetables are cooked.",
    "Garnish with fresh basil leaves.",
    "Serve hot over jasmine rice and enjoy this Thai classic!"
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 30,
    "servings": 4,
    "difficulty": "Medium",
    "cuisine": "Thai",
    "caloriesPerServing": 480,
    "tags": [
    "Curry",
    "Thai"
    ],
    "userId": 153,
    "image": "https://cdn.dummyjson.com/recipe-images/21.webp",
    "rating": 4.2,
    "reviewCount": 18,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 22,
    "name": "Mango Lassi",
    "ingredients": [
    "Ripe mango, peeled and diced",
    "Yogurt",
    "Milk",
    "Honey",
    "Cardamom powder",
    "Ice cubes"
    ],
    "instructions": [
    "In a blender, combine diced mango, yogurt, milk, honey, and cardamom powder.",
    "Blend until smooth and creamy.",
    "Add ice cubes and blend again until the lassi is chilled.",
    "Pour into glasses and garnish with a sprinkle of cardamom.",
    "Enjoy this refreshing Mango Lassi!"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 2,
    "difficulty": "Easy",
    "cuisine": "Indian",
    "caloriesPerServing": 180,
    "tags": [
    "Lassi",
    "Mango",
    "Indian",
    "Pakistani",
    "Asian"
    ],
    "userId": 76,
    "image": "https://cdn.dummyjson.com/recipe-images/22.webp",
    "rating": 4.7,
    "reviewCount": 15,
    "mealType": [
    "Beverage"
    ]
    },
    {
    "id": 23,
    "name": "Italian Tiramisu",
    "ingredients": [
    "Espresso, brewed and cooled",
    "Ladyfinger cookies",
    "Mascarpone cheese",
    "Heavy cream",
    "Sugar",
    "Cocoa powder"
    ],
    "instructions": [
    "In a bowl, whip heavy cream until stiff peaks form.",
    "In another bowl, mix mascarpone cheese and sugar until smooth.",
    "Gently fold the whipped cream into the mascarpone mixture.",
    "Dip ladyfinger cookies into brewed espresso and layer them in a serving dish.",
    "Spread a layer of the mascarpone mixture over the cookies.",
    "Repeat layers and finish with a dusting of cocoa powder.",
    "Chill in the refrigerator for a few hours before serving.",
    "Indulge in the decadence of this classic Italian Tiramisu!"
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 0,
    "servings": 6,
    "difficulty": "Medium",
    "cuisine": "Italian",
    "caloriesPerServing": 350,
    "tags": [
    "Tiramisu",
    "Italian"
    ],
    "userId": 130,
    "image": "https://cdn.dummyjson.com/recipe-images/23.webp",
    "rating": 4.6,
    "reviewCount": 0,
    "mealType": [
    "Dessert"
    ]
    },
    {
    "id": 24,
    "name": "Turkish Kebabs",
    "ingredients": [
    "Ground lamb or beef",
    "Onions, grated",
    "Garlic, minced",
    "Parsley, finely chopped",
    "Cumin",
    "Coriander",
    "Red pepper flakes",
    "Salt and pepper to taste",
    "Flatbread for serving",
    "Tahini sauce"
    ],
    "instructions": [
    "In a bowl, mix ground meat, grated onions, minced garlic, chopped parsley, and spices.",
    "Form the mixture into kebab shapes and grill until fully cooked.",
    "Serve the kebabs on flatbread with a drizzle of tahini sauce.",
    "Enjoy these flavorful Turkish Kebabs with your favorite sides."
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Turkish",
    "caloriesPerServing": 280,
    "tags": [
    "Kebabs",
    "Turkish",
    "Grilling"
    ],
    "userId": 26,
    "image": "https://cdn.dummyjson.com/recipe-images/24.webp",
    "rating": 4.6,
    "reviewCount": 78,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 25,
    "name": "Blueberry Banana Smoothie",
    "ingredients": [
    "Blueberries, fresh or frozen",
    "Banana, peeled and sliced",
    "Greek yogurt",
    "Almond milk",
    "Honey",
    "Chia seeds (optional)"
    ],
    "instructions": [
    "In a blender, combine blueberries, banana, Greek yogurt, almond milk, and honey.",
    "Blend until smooth and creamy.",
    "Add chia seeds for extra nutrition and blend briefly.",
    "Pour into a glass and enjoy this nutritious Blueberry Banana Smoothie!"
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 0,
    "servings": 1,
    "difficulty": "Easy",
    "cuisine": "Smoothie",
    "caloriesPerServing": 220,
    "tags": [
    "Smoothie",
    "Blueberry",
    "Banana"
    ],
    "userId": 16,
    "image": "https://cdn.dummyjson.com/recipe-images/25.webp",
    "rating": 4.8,
    "reviewCount": 30,
    "mealType": [
    "Breakfast",
    "Beverage"
    ]
    },
    {
    "id": 26,
    "name": "Mexican Street Corn (Elote)",
    "ingredients": [
    "Corn on the cob",
    "Mayonnaise",
    "Cotija cheese, crumbled",
    "Chili powder",
    "Lime wedges"
    ],
    "instructions": [
    "Grill or roast corn on the cob until kernels are charred.",
    "Brush each cob with mayonnaise, then sprinkle with crumbled Cotija cheese and chili powder.",
    "Serve with lime wedges for squeezing over the top.",
    "Enjoy this delicious and flavorful Mexican Street Corn!"
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Mexican",
    "caloriesPerServing": 180,
    "tags": [
    "Elote",
    "Mexican",
    "Street food"
    ],
    "userId": 93,
    "image": "https://cdn.dummyjson.com/recipe-images/26.webp",
    "rating": 4.6,
    "reviewCount": 2,
    "mealType": [
    "Snack",
    "Side Dish"
    ]
    },
    {
    "id": 27,
    "name": "Russian Borscht",
    "ingredients": [
    "Beets, peeled and shredded",
    "Cabbage, shredded",
    "Potatoes, diced",
    "Onions, finely chopped",
    "Carrots, grated",
    "Tomato paste",
    "Beef or vegetable broth",
    "Garlic, minced",
    "Bay leaves",
    "Sour cream for serving"
    ],
    "instructions": [
    "In a pot, sauté chopped onions and garlic until softened.",
    "Add shredded beets, cabbage, diced potatoes, grated carrots, and tomato paste.",
    "Pour in broth and add bay leaves. Simmer until vegetables are tender.",
    "Serve hot with a dollop of sour cream on top.",
    "Enjoy the hearty and comforting flavors of Russian Borscht!"
    ],
    "prepTimeMinutes": 30,
    "cookTimeMinutes": 40,
    "servings": 6,
    "difficulty": "Medium",
    "cuisine": "Russian",
    "caloriesPerServing": 220,
    "tags": [
    "Borscht",
    "Russian",
    "Soup"
    ],
    "userId": 1,
    "image": "https://cdn.dummyjson.com/recipe-images/27.webp",
    "rating": 4.3,
    "reviewCount": 39,
    "mealType": [
    "Dinner"
    ]
    },
    {
    "id": 28,
    "name": "South Indian Masala Dosa",
    "ingredients": [
    "Dosa batter (fermented rice and urad dal batter)",
    "Potatoes, boiled and mashed",
    "Onions, finely chopped",
    "Mustard seeds",
    "Cumin seeds",
    "Curry leaves",
    "Turmeric powder",
    "Green chilies, chopped",
    "Ghee",
    "Coconut chutney for serving"
    ],
    "instructions": [
    "In a pan, heat ghee and add mustard seeds, cumin seeds, and curry leaves.",
    "Add chopped onions, green chilies, and turmeric powder. Sauté until onions are golden brown.",
    "Mix in boiled and mashed potatoes. Cook until well combined and seasoned.",
    "Spread dosa batter on a hot griddle to make thin pancakes.",
    "Place a spoonful of the potato mixture in the center, fold, and serve hot.",
    "Pair with coconut chutney for a delicious South Indian meal."
    ],
    "prepTimeMinutes": 40,
    "cookTimeMinutes": 20,
    "servings": 4,
    "difficulty": "Medium",
    "cuisine": "Indian",
    "caloriesPerServing": 320,
    "tags": [
    "Dosa",
    "Indian",
    "Asian"
    ],
    "userId": 138,
    "image": "https://cdn.dummyjson.com/recipe-images/28.webp",
    "rating": 4.4,
    "reviewCount": 96,
    "mealType": [
    "Breakfast"
    ]
    },
    {
    "id": 29,
    "name": "Lebanese Falafel Wrap",
    "ingredients": [
    "Falafel balls",
    "Whole wheat or regular wraps",
    "Tomatoes, diced",
    "Cucumbers, sliced",
    "Red onions, thinly sliced",
    "Lettuce, shredded",
    "Tahini sauce",
    "Fresh parsley, chopped"
    ],
    "instructions": [
    "Warm falafel balls according to package instructions.",
    "Place a generous serving of falafel in the center of each wrap.",
    "Top with diced tomatoes, sliced cucumbers, red onions, shredded lettuce, and fresh parsley.",
    "Drizzle with tahini sauce and wrap tightly.",
    "Enjoy this Lebanese Falafel Wrap filled with fresh and flavorful ingredients!"
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Easy",
    "cuisine": "Lebanese",
    "caloriesPerServing": 400,
    "tags": [
    "Falafel",
    "Lebanese",
    "Wrap"
    ],
    "userId": 110,
    "image": "https://cdn.dummyjson.com/recipe-images/29.webp",
    "rating": 4.7,
    "reviewCount": 84,
    "mealType": [
    "Lunch"
    ]
    },
    {
    "id": 30,
    "name": "Brazilian Caipirinha",
    "ingredients": [
    "Cachaça (Brazilian sugarcane spirit)",
    "Lime, cut into wedges",
    "Granulated sugar",
    "Ice cubes"
    ],
    "instructions": [
    "In a glass, muddle lime wedges with granulated sugar to release the juice.",
    "Fill the glass with ice cubes.",
    "Pour cachaça over the ice and stir well.",
    "Sip and enjoy the refreshing taste of the Brazilian Caipirinha!",
    "Adjust sugar and lime to suit your taste preferences."
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "servings": 1,
    "difficulty": "Easy",
    "cuisine": "Brazilian",
    "caloriesPerServing": 150,
    "tags": [
    "Caipirinha",
    "Brazilian",
    "Cocktail"
    ],
    "userId": 134,
    "image": "https://cdn.dummyjson.com/recipe-images/30.webp",
    "rating": 4.4,
    "reviewCount": 55,
    "mealType": [
    "Beverage"
    ]
    }
    ]
    
    
   




let show1 = document.getElementById("show1");

for(let i = 0; i < products.length; i++){
    console.log(products[i].category);
     
    show1.innerHTML += `
    <div class="card1">
    <img src="${products[i].image}" alt="" class="card1-img">
    <div class="card1-content">
        <p>${products[i].category}</p>
        <p>${products[i].description}</p>
        <p>${products[i].price}</p>
        <p>${products[i].rating}</p>
        <p>${products[i].title}</p>
        <p>${products[i].id}</p>
    </div>
    </div>
    `   
}


let show = document.getElementById("show");

for(let i = 0; i < recipes.length; i++){
    console.log(recipes[i].category);
     
    show.innerHTML += `
    <div class="card">
    <img src="${recipes[i].image}" alt="" class="card-img">
    <div class="card-content">
        <p><b>Calories: </b> ${recipes[i].caloriesPerServing}</p>
        <p><b>Cook Time Minutes: </b> ${recipes[i].cookTimeMinutes}</p>
        <p><b>Cuisine: </b> ${recipes[i].cuisine}</p>
        <p><b>Difficulty: </b> ${recipes[i].difficulty}</p>
        <p><b>Ingredients: </b> ${recipes[i].ingredients}</p>
        <p><b>Name: </b> ${recipes[i].name}</p>
        <p><b>Prep Time Minutes: </b> ${recipes[i].prepTimeMinutes}</p>
        <p><b>Rating: </b> ${recipes[i].rating}</p>
        <p><b>Review Count: </b> ${recipes[i].reviewCount}</p>
        <p><b>Servings: </b> ${recipes[i].servings}</p>
        <p><b>User ID: </b> ${recipes[i].userId}</p>
    </div>
    </div>
    `   
}

