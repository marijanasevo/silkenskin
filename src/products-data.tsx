const PRODUCTS_DATA = [
  {
    title: 'Body care',
    items: [
      {
        id: 1,
        name: 'Renewing Body Lotion',
        brand: 'Aveeno',
        volume: '300ml',
        price: 22,
        description:
          'This luxurious body lotion is infused with cocoa and shea butters to deliver intense moisture to dry skin, leaving it soft and smooth all day long.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        
        ingredientsList: [
          'Water',
          'Glycerin',
          'Petrolatum',
          'Stearic acid',
          'Glycol stearate',
        ],
        targets: [
          'Dryness',
          'Dullness',
          'Roughness',
          'Uneven texture',
          'Itchiness',
        ],
        suited: 'All skin types',
        productProperties: ['Paraben-free', 'Fragrance-free', 'Non-greasy'],
        
        averageStars: 4.5,
        numberOfReviews: 10,
        reviews: [
          {
            title: 'The Best Body Lotion I\'ve Used So Far',
            stars: 5,
            comment: 'This lotion is fantastic! It\'s light and absorbs quickly, leaving my skin feeling soft and hydrated all day. Highly recommend!',
          },
          {
            title: 'Love It!',
            stars: 4,
            comment: 'This product really helped with the dry patches on my skin, and it smells great too!',
          },
        ],
      },
      {
        id: 2,
        name: 'Nécessaire The Body Lotion',
        brand: 'Nécessaire',
        volume: '250ml',
        price: 25,
        description: 'A lightweight, non-greasy body lotion formulated with nourishing vitamins and plant-based ingredients to leave skin hydrated and smooth.',
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: ['Vitamins B3, C, and E', 'Marula oil', 'Shea butter'],
        targets: ['Dryness', 'Dullness', 'Uneven texture'],
        suited: 'All skin types',
        productProperties: ['Fragrance-free', 'Cruelty-free', 'Vegan'],
        averageStars: 4.5,
        numberOfReviews: 112,
        reviews: [
          {
            title: 'Love this lotion!',
            stars: 5,
            comment: 'This body lotion is amazing. It goes on smoothly and absorbs quickly, leaving my skin feeling soft and hydrated. I also love that it\'s fragrance-free and doesn\'t irritate my sensitive skin. Highly recommend!'
          },
          {
            title: 'Not moisturizing enough',
            stars: 3,
            comment: 'While I like the lightweight texture of this lotion, I don\'t find it moisturizing enough for my dry skin. I have to apply it multiple times a day to keep my skin from feeling tight and itchy.'
          },
        ],
      },
      {
        id: 3,
        name: 'Ultra Rich Body Butter',
        brand: 'The Body Shop',
        volume: '200ml',
        price: 20,
        description:
          'This body butter is infused with rich shea butter to provide intense hydration and nourishment to dry skin. It absorbs easily and leaves skin feeling incredibly soft and smooth.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Shea butter',
          'Cocoa butter',
          'Sweet almond oil',
          'Vitamin E',
        ],
        targets: [
          'Dryness',
          'Dullness',
          'Roughness',
          'Sensitivity',
          'Itchiness',
        ],
        suited: 'Dry, very dry, and sensitive skin',
        productProperties: [
          'Paraben-free',
          'Cruelty-free',
          '100% vegetarian',
        ],
        averageStars: 4.7,
        numberOfReviews: 8,
        reviews: [
          {
            title: 'Amazing product!',
            stars: 5,
            comment:
              'I love this body butter! It provides intense hydration without feeling greasy or heavy on the skin. And it smells fantastic too!',
          },
          {
            title: 'Great for sensitive skin',
            stars: 5,
            comment: 'I have very sensitive skin and this body butter is perfect for me. It hydrates and soothes my skin without causing any irritation. Highly recommend!',
          },
        ],
      },
      {
        id: 4,
        name: 'Nourishing Body Oil',
        brand: 'Kiehl\'s',
        volume: '100ml',
        price: 35,
        description:
          'This lightweight body oil is formulated with a blend of natural oils, including avocado and sesame, to nourish and moisturize the skin. It absorbs quickly and leaves skin feeling soft and silky.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Sesame oil',
          'Avocado oil',
          'Ginger root oil',
          'Apricot kernel oil',
        ],
        targets: [
          'Dryness',
          'Dullness',
          'Uneven texture',
        ],
        suited: 'All skin types',
        productProperties: [
          'Paraben-free',
          'Cruelty-free',
        ],
        averageStars: 4.2,
        numberOfReviews: 6,
        reviews: [
          {
            title: 'Lovely body oil',
            stars: 5,
            comment: 'This body oil is light and absorbs easily, and leaves my skin feeling incredibly soft and nourished. Highly recommend for those with dry or dull skin!',
          },
          {
            title: 'Nice scent',
            stars: 4,
            comment: 'This body oil smells great and provides a nice hydration boost to my skin. I do wish the bottle was larger though!',
          },
        ],
      },
      {
        id: 5,
        name: 'Soothing Body Cream',
        brand: 'A-Derma',
        
        volume: '400ml',
        
        price: 28,
        description:
          'This ultra-soothing body cream is formulated with oat milk and rhealbaÂ® oat plantlet extract to calm and comfort sensitive or irritated skin. It has a rich and creamy texture that absorbs quickly and leaves skin feeling soft and nourished.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Water',
          'Glycerin',
          'Caprylic/capric triglyceride',
          'Avena sativa (oat) kernel flour',
          'Helianthus annuus (sunflower) seed oil',
        ],
        targets: [
          'Dryness',
          'Itchiness',
          'Redness',
          'Sensitivity',
        ],
        suited: 'Sensitive and irritated skin',
        productProperties: [
          'Paraben-free',
          'Fragrance-free',
          'Allergen-free',
          'Cruelty-free',
        ],
        averageStars: 4.6,
        numberOfReviews: 12,
        reviews: [
          {
            title: 'Fantastic for sensitive skin',
            stars: 5,
            comment: 'This body cream is a lifesaver for my sensitive skin. It hydrates well and soothes any irritation or redness. Highly recommend!',
          },
          {
            title: 'Amazing!',
            stars: 5,
            comment: 'This cream is so rich and nourishing - perfect for those with dry or irritated skin. And it doesn\'t contain any fragrances or allergens so it\'s great for sensitive skin types.',
          },
        ],
      },
      {
        id: 6,
        name: 'Refreshing Body Mist',
        brand: 'Bath & Body Works',
        volume: '118ml',
        price: 15,
        description:
          'This light and refreshing body mist is infused with a blend of watermelon, raspberry, and cactus flower to provide a cool and invigorating burst of fragrance. It hydrates the skin and leaves it feeling fresh and revitalized.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Water',
          'Glycerin',
          'Fragrance',
          'Butylene glycol',
          'Hyaluronic acid',
        ],
        targets: [
          'Dryness',
          'Dullness',
          'Uneven texture',
        ],
        suited: 'All skin types',
        productProperties: [
          'Alcohol-free',
          'Paraben-free',
          'Cruelty-free',
        ],
        averageStars: 4.3,
        numberOfReviews: 5,
        reviews: [
          {
            title: 'Love this spray!',
            stars: 5,
            comment: 'This body mist is the perfect pick-me-up on a hot day. It has a refreshing scent and provides a light and cooling hydration to the skin. Highly recommend!',
          },
          {
            title: 'Smells great',
            stars: 4,
            comment: 'This spray smells amazing and does provide a nice burst of moisture to the skin. I just wish the bottle was bigger!',
          },
        ],
      },
      {
        id: 7,
        name: 'Firming Body Oil',
        brand: 'Nuxe',
        volume: '100ml',
        price: 30,
        description:
          'This luxurious body oil is formulated with six specially selected botanical oils, including macadamia and sweet almond, to firm, tone, and hydrate the skin. It absorbs quickly and leaves skin feeling smooth and supple.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Macadamia oil',
          'Hazelnut oil',
          'Sweet almond oil',
          'Sunflower seed oil',
          'Camellia seed oil',
          'Argan oil',
        ],
        targets: [
          'Dryness',
          'Dullness',
          'Sagging',
          'Uneven texture',
          'Stretch marks',
        ],
        suited: 'All skin types',
        productProperties: [
          'Silicone-free',
          'Paraben-free',
          'Cruelty-free',
        ],
        averageStars: 4.8,
        numberOfReviews: 10,
        reviews: [
          {
            title: 'Amazing oil!',
            stars: 5,
            comment: 'This oil is fantastic! It smells great and helps to firm and tone my skin, leaving it feeling incredibly soft and supple. Highly recommend!',
          },
          {
            title: 'Great for stretch marks',
            stars: 5,
            comment: 'This oil has really helped to diminish the appearance of my stretch marks. It provides long-lasting hydration and has a lovely texture. Would definitely repurchase!',
          },
        ],
      },
      {
        id: 8,
        name: 'Hydrating Body Lotion',
        brand: 'CeraVe',
        volume: '473ml',
        price: 14,
        description:
          'This lightweight and oil-free body lotion is formulated with three essential ceramides and hyaluronic acid to provide long-lasting hydration and improve the skin barrier. It is non-comedogenic and fragrance-free, making it suitable for all skin types.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Ceramides',
          'Hyaluronic acid',
          'MVE Delivery Technology',
          'Glycerin',
        ],
        targets: [
          'Dryness',
          'Roughness',
          'Dullness',
          'Flakiness',
        ],
        suited: 'All skin types',
        productProperties: [
          'Fragrance-free',
          'Non-comedogenic',
          'Accepted by the National Eczema Association',
        ],
        averageStars: 4.5,
        numberOfReviews: 13,
        reviews: [
          {
            title: 'Great body lotion',
            stars: 4,
            comment: 'This lotion provides great hydration and helps improve my skin texture. I just wish it came in a larger bottle!',
          },
          {
            title: 'Perfect for sensitive skin',
            stars: 5,
            comment: 'I have very sensitive skin and this lotion has been a lifesaver for me. It hydrates well and doesn\'t cause any irritation or breakouts. Highly recommend!',
          },
        ],
      },
      {
        id: 9,
        name: 'Exfoliating Body Scrub',
        brand: 'Lush',
        volume: '250g',
        price: 28,
        description:
          'This scrub is made with a blend of sea salt, coconut oil, and soy wax to gently exfoliate and nourish the skin. It has a refreshing citrus scent and leaves skin feeling soft and smooth.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        
          gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Fine sea salt',
          'Coconut oil',
          'Soy wax',
          'Lemon oil',
          'Grapefruit oil',
          'Lime oil',
        ],
        targets: [
          'Dryness',
          'Dullness',
          'Uneven texture',
        ],
        suited: 'All skin types',
        productProperties: [
          'Vegan',
          'Cruelty-free',
        ],
        averageStars: 4.2,
        numberOfReviews: 8,
        reviews: [
          {
            title: 'Love this scrub!',
            stars: 5,
            comment: 'This scrub smells amazing and leaves my skin feeling incredibly soft and smooth. It\'s gentle enough to use regularly and doesn\'t cause any irritation.',
          },
          {
            title: 'Not for sensitive skin',
            stars: 3,
            comment: 'While I love the scent of this scrub, it was a bit too harsh for my sensitive skin. It\'s definitely better suited for those with tougher skin types.',
          },
        ],
      },
      {
        id: 10,
        name: 'Replenishing Body Balm',
        brand: 'Aveeno',
        volume: '312g',
        price: 18,
        description:
          'This body balm is formulated with prebiotic oat and shea butter to provide intense hydration and nourishment to dry skin. It helps strengthen the skin barrier and improve the skin\'s natural moisture barrier. It is fragrance-free and non-greasy.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Shea butter',
          'Prebiotic oat',
          'Glycerin',
          'Petrolatum',
          'Dimethicone',
        ],
        targets: [
          'Dryness',
          'Roughness',
          'Dullness',
          'Flakiness',
        ],
        suited: 'Dry and sensitive skin',
        productProperties: [
          'Fragrance-free',
          'Non-greasy',
          'Accepted by the National Eczema Association',
        ],
        averageStars: 4.6,
        numberOfReviews: 14,
        reviews: [
          {
            title: 'Amazing!',
            stars: 5,
            comment: 'This balm has saved my dry and sensitive skin. It hydrates well without feeling greasy and doesn\'t cause any irritation. Highly recommend!',
          },
          {
            title: 'Great for winter',
            stars: 4,
            comment: 'This balm is perfect for cold weather - it helps protect my skin from dryness and provides long-lasting hydration. The only downside is that it\'s a bit pricey!',
          },
        ],
      },
      {
        id: 11,
        name: 'Soothing Bath Oil',
        brand: 'Kneipp',
        volume: '100ml',
        price: 20,
        description:
          'This bath oil is formulated with natural oils, including lavender and patchouli, to help relax and soothe the body and mind. It has a luxurious spa-like scent and leaves skin feeling soft and nourished after a bath.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Lavender oil',
          'Almond oil',
          'Patchouli oil',
          'Jojoba oil',
          'Soybean oil',
        ],
        targets: [
          'Dryness',
          'Stress',
          'Tension',
        ],
        suited: 'All skin types',
        productProperties: [
          'Natural formula',
          'No preservatives',
          'Cruelty-free',
        ],
        averageStars: 4.7,
        numberOfReviews: 9,
        reviews: [
          {
            title: 'Amazing bath oil',
            stars: 5,
            comment: 'This bath oil is the perfect way to unwind after a long day. It has a lovely calming scent and leaves my skin feeling soft and nourished. Highly recommend!',
          },
          {
            title: 'Luxurious',
            stars: 4,
            comment: 'This oil feels very luxurious and provides a nice hydration boost to the skin. However, I do wish that the scent was a bit stronger!',
          },
        ],
      },
      {
        id: 12,
        name: 'Cooling Body Gel',
        brand: 'Nivea',
        volume: '200ml',
        price: 10,
        description:
          'This gel is infused with menthol and a refreshing citrus scent to provide an instant cooling and invigorating effect to the skin. It absorbs quickly and leaves skin feeling refreshed and moisturized.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Menthol',
          'Glycerin',
          'Sodium hydroxide',
          'Citric acid',
          'Fragrance',
        ],
        targets: [
          'Dryness',
          'Heat',
          'Sweat',
        ],
        suited: 'All skin types',
        productProperties: [
          'Fast-absorbing',
          'Non-sticky',
          'Hydration for 48 hours',
        ],
        averageStars: 4.4,
        numberOfReviews: 7,
        reviews: [
          {
            title: 'Love it',
            stars: 5,
            comment: 'This gel feels amazing on the skin, especially in the hot summer months. It provides a nice cooling sensation and leaves my skin feeling soft and hydrated.',
          },
          {
            title: 'Great after workout',
            stars: 4,
            comment: 'I use this gel after my workouts and it helps soothe my muscles and cool down my skin. It has a refreshing scent and absorbs quickly without leaving any residue.',
          },
        ],
      },
    ],
  },
  {
    title: 'Moisturizers',
    items: [
      {
        id: 15,
        name: 'Oil-Free Moisturizer',
        brand: 'Neutrogena',
        volume: '118ml',
        price: 12,
        description:
          'This lightweight, oil-free moisturizer is formulated with salicylic acid to help prevent breakouts and keep the skin clear. It is non-comedogenic and absorbs quickly, leaving skin feeling soft and smooth.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        ingredientsList: [
          'Salicylic acid',
          'Glycerin',
          'Dimethicone',
          'C12-15 alkyl benzoate',
        ],
        targets: [
          'Acne',
          'Breakouts',
          'Clogged pores',
        ],
        suited: 'Oily and acne-prone skin',
        productProperties: [
          'Non-comedogenic',
          'Fragrance-free',
          'Dermatologist-tested',
        ],
        averageStars: 4.1,
        numberOfReviews: 11,
        reviews: [
          {
            title: 'Great for oily skin',
            stars: 4,
            comment: 'This moisturizer is perfect for my oily and acne-prone skin. It leaves my skin feeling moisturized without feeling greasy or causing any breakouts.',
          },
          {
            title: 'Effective but drying',
            stars: 3,
            comment: 'While this moisturizer does help prevent breakouts, I find that it can be a bit drying on my skin. I have to make sure to use a non-drying cleanser to balance it out.',
          },
        ],
      },
      {
        id: 16,
        name: 'Regenerating Cream',
        brand: 'La Roche-Posay',
        volume: '40ml',
        price: 35,
        description:
          'This regenerating cream is designed to help restore the skin\'s natural barrier and reduce the appearance of wrinkles and fine lines. It is formulated with niacinamide, shea butter, and glycerin for intense hydration and nourishment.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Niacinamide',
          'Shea butter',
          'Glycerin',
          'Dimethicone',
        ],
        targets: [
          'Aging',
          'Wrinkles',
          'Fine lines',
        ],
        suited: 'All skin types',
        productProperties: [
          'Fragrance-free',
          'Paraben-free',
          'Hypoallergenic',
        ],
        averageStars: 4.7,
        numberOfReviews: 22,
        reviews: [
          {
            title: 'Amazing',
            stars: 5,
            comment: 'This cream is fantastic - I noticed a difference in my fine lines and wrinkles after just a few weeks of use. It also feels very nourishing and moisturizing on the skin.',
          },
          {
            title: 'Expensive but worth it',
            stars: 4,
            comment: 'I was hesitant to spend this much on a moisturizer, but it has definitely been worth it. My skin looks more radiant and youthful, and it feels very soft and smooth.',
          },
        ],
      },
      {
        id: 17,
        name: 'Oil Control Moisturizer',
        brand: 'Clinique',
        volume: '50ml',
        price: 26,
        description:
          'This lightweight moisturizer is designed to control oil and shine throughout the day. It is formulated with mattifying powders and antioxidants to keep skin looking smooth and clear.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Salicylic acid',
          'Trehalose',
          'Glycerin',
          'Dimethicone',
          'Antioxidants',
        ],
        targets: [
          'Oiliness',
          'Shine',
          'Pores',
        ],
        suited: 'Oily and combination skin',
        productProperties: [
          'Allergy-tested',
          '100% fragrance-free',
          'Oil-free',
        ],
        averageStars: 4.4,
        numberOfReviews: 16,
        reviews: [
          {
            title: 'A new favorite',
            stars: 5,
            comment: 'I have very oily skin and this moisturizer keeps me matte throughout the day. It also doesn\'t cause any breakouts or irritation. This is definitely a new staple in my skincare routine!',
          },
          {
            title: 'Great texture',
            stars: 4,
            comment: 'This moisturizer has a great lightweight texture and absorbs quickly without leaving any residue. I just wish it had a higher SPF!',
          },
        ],
      },
      {
        id: 18,
        name: 'Brightening Moisturizer',
        brand: 'Glossier',
        volume: '50ml',
        price: 29,
        description:
          'This brightening moisturizer is designed to reduce the appearance of dark spots and discoloration and improve overall skin radiance. It is formulated with vitamin C and licorice root extract for brightening and antioxidant benefits.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Vitamin C',
          'Licorice root extract',
          'Hyaluronic acid',
          'Aloe vera',
        ],
        targets: [
          'Dark spots',
          'Discoloration',
          'Dullness',
        ],
        suited: 'All skin types',
        productProperties: [
          'Hypoallergenic',
          'Dermatologist-tested',
          'Cruelty-free',
        ],
        averageStars: 4.5,
        numberOfReviews: 12,
        reviews: [
          {
            title: 'Love this moisturizer',
            stars: 5,
            comment: 'This moisturizer has made a noticeable difference in my dark spots and overall skin radiance. It also feels very hydrating and has a lovely texture. I will definitely be repurchasing this!',
          },
          {
            title: 'Great for daily use',
            stars: 4,
            comment: 'I love using this moisturizer as a daily brightening treatment. It does take a few weeks to see results, but I have noticed that my skin looks more even and radiant.',
          },
        ],
      },
      {
        id: 19,
        name: 'Sensitive Skin Moisturizer',
        brand: 'Avene',
        volume: '50ml',
        price: 22,
        description:
          'This moisturizer is specially formulated for sensitive skin and provides long-lasting hydration and protection against environmental stressors. It is enriched with thermal spring water and is clinically proven to soothe and calm the skin.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        ingredientsList: [
          'Glycerin',
          'Thermal spring water',
          'Shea butter',
          'Squalane',
        ],
        targets: [
          'Dryness',
          'Irritation',
          'Sensitivity',
        ],
        suited: 'Sensitive skin',
        productProperties: [
          'Fragrance-free',
          'Hypoallergenic',
          'Non-comedogenic',
        ],
        averageStars: 4.8,
        numberOfReviews: 18,
        reviews: [
          {
            title: 'The best for sensitive skin',
            stars: 5,
            comment: 'This moisturizer is a game changer for me - it has really helped calm my sensitive skin and provide lasting hydration without causing any irritation or breakouts. Highly recommend for anyone with sensitive skin!',
          },
          {
            title: 'Great texture',
            stars: 4,
            comment: 'This moisturizer has a lovely lightweight texture that absorbs quickly into the skin. It has helped keep my skin feeling hydrated and looking healthy.',
          },
        ],
      },
      {
        id: 20,
        name: 'Ultra Repair Cream',
        brand: 'First Aid Beauty',
        volume: '170g',
        price: 32,
        description:
          'This cream is designed to provide deep hydration and nourishment for dry, flaky, or eczema-prone skin. It is formulated with colloidal oatmeal and allantoin to soothe and calm irritated skin, and it absorbs quickly without leaving a greasy residue.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Colloidal oatmeal',
          'Allantoin',
          'Shea butter',
          'Ceramides',
        ],
        targets: [
          'Dryness',
          'Flakiness',
          'Eczema',
        ],
        suited: 'Dry and sensitive skin',
        productProperties: [
          'Fragrance-free',
          'Paraben-free',
          'Phthalate-free',
        ],
        averageStars: 4.9,
        numberOfReviews: 24,
        reviews: [
          {
            title: 'A true lifesaver',
            stars: 5,
            comment: 'I have extremely dry and sensitive skin, and this cream has truly been a lifesaver for me. It helps deeply moisturize and soothe my skin without causing any irritation or breakouts.',
          },
          {
            title: 'Finally relief for my eczema',
            stars: 4,
            comment: 'I have been struggling with eczema on my hands for years, and this cream has finally provided some relief. It helps calm the itchiness and dryness and helps my skin feel so much better.',
          },
        ],
      },
      {
        id: 21,
        name: 'Water Bank Hydro Cream',
        brand: 'Laneige',
        volume: '50ml',
        price: 28,
        description:
          'This cream is designed to provide intense, long-lasting hydration for all skin types. It is formulated with a mineral-rich blend of seaweed and hyaluronic acid to help lock in moisture and improve skin elasticity.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Seaweed extract',
          'Hyaluronic acid',
          'Olive oil',
          'Squalane',
        ],
        targets: [
          'Dryness',
          'Dehydration',
          'Tightness',
        ],
        suited: 'All skin types',
        productProperties: [
          'Dermatologist-tested',
          'Cruelty-free',
          'Paraben-free',
        ],
        averageStars: 4.7,
        numberOfReviews: 20,
        reviews: [
          {
            title: 'Gorgeous texture',
            stars: 5,
            comment: 'This cream has such a beautiful, lightweight texture that feels great on the skin. It provides just the right amount of hydration without feeling heavy or greasy.',
          },
          {
            title: 'Excellent for dry skin',
            stars: 4,
            comment: 'I have very dry skin and this moisturizer has been excellent for providing long-lasting hydration. It has also helped improve the texture and overall appearance of my skin.',
          },
        ],
      },
      {
        id: 22,
        name: 'Moisture Surge',
        brand: 'Clinique',
        volume: '50ml',
        price: 39,
        description:
          'This gel-cream hybrid is designed to provide intense hydration and plumping for all skin types. It is formulated with hyaluronic acid and aloe vera to help lock in moisture and improve skin\'s natural moisture barrier.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Hyaluronic acid',
          'Aloe vera',
          'Glycerin',
          'Dimethicone',
        ],
        targets: [
          'Dryness',
          'Dehydration',
          'Fine lines',
        ],
        suited: 'All skin types',
        productProperties: [
          'Fragrance-free',
          'Oil-free',
          'Non-comedogenic',
        ],
        averageStars: 4.6,
        numberOfReviews: 18,
        reviews: [
          {
            title: 'Exactly what my skin needed',
            stars: 5,
            comment: 'This moisturizer is exactly what my skin needed - it provides intense hydration without feeling heavy or greasy. It has also helped improve the texture and appearance of my skin.',
          },
          {
            title: 'Great for sensitive skin',
            stars: 4,
            comment: 'I have very sensitive skin and this moisturizer has been great for keeping my skin hydrated and calm. It doesn\'t cause any irritation or breakouts and has a lovely texture.',
          },
        ],
      },
      {
        id: 23,
        name: 'Cicapair Tiger Grass Cream',
        brand: 'Dr. Jart+',
        volume: '50ml',
        price: 48,
        description:
          'This cream is designed to provide hydration and calming for irritated, sensitive, or rosacea-prone skin. It is formulated with tiger grass extract and a blend of herbs to help soothe and strengthen skin\'s natural barrier.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        ingredientsList: [
          'Tiger grass extract',
          'Centella asiatica',
          'Niacinamide',
          'Ceramides',
        ],
        targets: [
          'Irritation',
          'Redness',
          'Sensitivity',
        ],
        suited: 'Sensitive and rosacea-prone skin',
        productProperties: [
          'Fragrance-free',
          'Paraben-free',
          'Sulfate-free',
        ],
        averageStars: 4.4,
        numberOfReviews: 16,
        reviews: [
          {
            title: 'Calming and hydrating',
            stars: 5,
            comment: 'This cream has been fantastic for my sensitive and easily irritated skin. It helps soothe redness and irritation while providing lasting hydration.',
          },
          {
            title: 'Great for rosacea',
            stars: 4,
            comment: 'I have rosacea and this cream has helped calm the redness and irritation in my skin. It also feels very nourishing and hydrating without causing any breakouts or irritation.',
          },
        ],
      },
      {
        id: 24,
        name: 'Ultra Calming Moisturizer',
        brand: 'Dermalogica',
        volume: '50ml',
        price: 43,
        description:
          'This moisturizer is designed to provide hydration and calming for sensitive, reactive, or compromised skin. It is formulated with oat kernel extract and botanicals to help soothe and reduce inflammation.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        ingredientsList: [
          'Oat kernel extract',
          'Ginger',
          'Bisabolol',
          'Squalane',
        ],
        targets: [
          'Redness',
          'Irritation',
          'Sensitivity',
        ],
        suited: 'Sensitive and reactive skin',
        productProperties: [
          'Fragrance-free',
          'Paraben-free',
          'Sulfate-free',
        ],
        averageStars: 4.3,
        numberOfReviews: 14,
        reviews: [
          {
            title: 'Miracle product',
            stars: 5,
            comment: 'This moisturizer has been a true miracle product for my sensitive skin. It helps calm the redness and irritation while providing much-needed hydration.',
          },
          {
            title: 'Very soothing',
            stars: 4,
            comment: 'I love how calming and soothing this moisturizer feels on my skin. It definitely helps reduce inflammation and has a lovely texture.',
          },
        ],
      }
    ],
  },
  {
    title: 'Masks',
    items: [
      { 
        id: 27, 
        name: 'Supermud Clearing Treatment', 
        brand: 'Glamglow', 
        volume: '50g', 
        price: 59, 
        
        description: 'This face mask is designed to target blemishes, acne, and uneven skin texture. It contains a blend of six acids (glycolic, salicylic, lactic, mandelic, pyruvic, and tartaric) as well as activated charcoal to deeply cleanse and exfoliate the skin.', 
        
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        gallery: ['https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'], 
        ingredientsList: [
          'Six acid blend (glycolic, salicylic, lactic, mandelic, pyruvic, and tartaric)', 
          'Activated charcoal', 
          'K17-Clay', 
          'Teaoxi',
        ], 
        targets: ['Acne', 'Blemishes', 'Uneven skin texture',], 
        suited: 'Oily and combination skin', 
        productProperties: ['Paraben-free', 'Phthalate-free', 'Sulfate-free',], 
        averageStars: 4.6, 
        numberOfReviews: 28, 
        reviews: [
          { 
            title: 'Amazing for oily skin', 
            stars: 5, 
            comment: 'This mask is amazing for oily and congested skin. It helps clear out my pores and reduce the appearance of blemishes.',
          }, 
          { 
            title: 'Immediate results', 
            stars: 4, 
            comment: 'I noticed an immediate improvement in my skin texture and overall appearance after using this mask just once. I love the tingling sensation and the fresh feeling it gives me.', 
          },
        ], 
      }, 
      { 
        id: 28, 
        name: 'Radiance Renewal Mask', 
        brand: 'Ole Henriksen', 
        volume: '50g', 
        price: 43, 
        
        description: 'This face mask is designed to brighten and hydrate the skin, leaving it with a radiant glow. It contains a blend of AHAs and BHAs as well as Nordic birch sap to exfoliate and nourish the skin.', 
        
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ], 
        ingredientsList: [
          'AHAs (glycolic and lactic acids)', 
          'BHAs (salicylic and oleic acids)', 
          'Nordic birch sap', 
          'Chamomile extract',
        ], 
        targets: [
          'Dullness', 
          'Dark spots', 
          'Dryness',
        ], 
        suited: 'All skin types', 
        productProperties: [
          'Cruelty-free', 
          'Paraben-free', 
          'Phthalate-free',
        ], 
        averageStars: 4.7, 
        numberOfReviews: 25, 
        reviews: [
          { 
            title: 'Transforms my skin', 
            stars: 5, 
            comment: 'This mask is a game-changer for my skin. It leaves it looking so much brighter and more radiant, and helps fade my dark spots over time.', 
          }, 
          { 
            title: 'Amazing for dry skin', 
            stars: 4, 
            comment: 'I have very dry skin and this mask has been amazing for providing deep hydration and nourishment. It leaves my skin feeling so soft and smooth.', 
          },
        ], 
      }, 
      { 
        id: 29, 
        name: 'Blue Tansy Resurfacing Clarity Mask', 
        brand: 'Herbivore Botanicals', 
        volume: '50g', 
        price: 48, 
        
        description: 'This face mask is designed to gently resurface and clarify the skin using natural ingredients. It contains a blend of white willow bark, fruit enzymes, and blue tansy oil to exfoliate and soothe the skin.', 
        
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ], 
        ingredientsList: [
          'White willow bark', 
          'Fruit enzymes', 
          'Blue tansy oil', 
          'Aloe vera',
        ], 
        targets: [
          'Dullness', 
          'Acne', 
          'Congestion',
        ], 
        suited: 'All skin types', 
        productProperties: [
          'Cruelty-free', 
          'Paraben-free', 
          'Sulfate-free',
        ], 
        averageStars: 4.5, 
        numberOfReviews: 22, 
        reviews: [
          { 
          title: 'Works wonders on my acne', 
          stars: 5, 
          comment: 'This mask has worked wonders on my acne-prone skin. It helps clear out my pores and reduce breakouts without causing any irritation or dryness.', 
        }, 
        { 
          title: 'Gentle and effective', 
          stars: 4, 
          comment: 'I love how gentle and effective this mask is. It doesn\'t leave my skin feeling stripped or tight, but it still manages to leave it looking brighter and clearer.', 
        },
      ], 
      }, 
      { 
        id: 30, 
        name: 'Avocado Melt Retinol Sleeping Mask', 
        brand: 'Glow Recipe', 
        volume: '80ml', 
        price: 49, 
        
        description: 'This overnight mask is designed to smooth and plump the skin using retinol and avocado oil. It also contains PHAs and matcha to gently exfoliate and brighten the skin.', 
        
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ], 
        ingredientsList: [
          'Retinol', 
          'Avocado oil', 
          'Matcha', 
          'PHA blend',
        ], 
        targets: [
          'Fine lines', 
          'Dryness', 
          'Dullness',
        ], 
        suited: 'All skin types', 
        productProperties: [
          'Cruelty-free', 
          'Paraben-free', 
          'Phthalate-free',
        ], 
        averageStars: 4.8, 
        numberOfReviews: 18, 
        reviews: [
          { 
            title: 'My new favorite', 
            stars: 5, 
            comment: 'This sleeping mask has quickly become my new favorite. It leaves my skin feeling incredibly soft and smooth, and has definitely helped reduce the appearance of my fine lines over time.', 
          }, 
          { 
            title: 'Super nourishing', 
            stars: 4, 
            comment: 'I love how nourishing and hydrating this mask is. It feels like a treat for my skin and I always wake up with a nice glow after using it.', 
          },
        ], 
      },
      { 
        id: 31, 
        name: 'Clarifying Mask', 
        brand: 'Kiehl\'s', 
        volume: '100ml', 
        price: 30, 
        description: 'This face mask is designed to purify and detoxify the skin, leaving it looking clearer and brighter. It contains bentonite clay and Amazonian white clay to draw out impurities, as well as aloe vera and vitamin E to soothe and nourish the skin.', 
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        gallery: [ 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479' 
      ], 
      ingredientsList: [ 
        'Bentonite clay', 
        'Amazonian white clay', 
        'Aloe vera', 
        'Vitamin E', 
      ], 
        targets: [ 
          'Congestion', 
          'Dullness', 
          'Impurities', 
        ], 
        suited: 'All skin types', 
        productProperties: [ 
          'Paraben-free', 
          'Sulfate-free', 
          'Phthalate-free', 
        ], 
        averageStars: 4.6, 
        numberOfReviews: 26, 
        reviews: [ 
          { 
            title: 'Love this mask', 
            stars: 5, 
            comment: 'This mask is amazing for clearing out my pores and leaving my skin looking brighter and more radiant, I highly recommend it!', 
          }, 
          { 
            title: 'Great for oily skin', 
            stars: 4, 
            comment: 'I have very oily skin and this mask helps control my oil production and prevent breakouts. It also leaves my skin feeling very soft and smooth.', 
          }, 
        ], 
      }, 
      { 
        id: 32, 
        name: 'Tumeric 2-in-1 Brightening & Exfoliating Mask', 
        brand: 'Kora Organics', 
        volume: '100ml', 
        price: 48, 
        description: 'This face mask is designed to brighten and exfoliate the skin using natural ingredients like tumeric, papaya enzymes, and rosehip seeds. It also contains peppermint oil and aloe vera to soothe and cool the skin.', 
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        gallery: [ 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479' 
      ], 
      ingredientsList: [ 
        'Tumeric', 
        'Papaya enzymes', 
        'Rosehip seeds', 
        'Peppermint oil', 
        'Aloe vera', 
      ], 
      targets: [ 
        'Dullness', 
        'Dryness', 
        'Uneven skin tone', 
      ], 
      suited: 'All skin types', 
      productProperties: [ 
        'Cruelty-free', 
        'Vegan', 
        'Organic', 
      ], 
      averageStars: 4.4, 
      numberOfReviews: 20, 
      reviews: [ 
        { 
          title: 'Smells amazing!', 
          stars: 5, 
          comment: 'I love the smell of this mask and how soft and smooth it makes my skin. It helps brighten my complexion and fade dark spots too.', 
        }, 
        { 
          title: 'Gentle yet effective', 
          stars: 4, 
          comment: 'This mask is gentle enough for my sensitive skin but still manages to exfoliate and brighten my complexion. It\'s a great addition to my skincare routine.', 
        }, 
      ], 
      }, 
      { 
      id: 33, 
      name: 'Charcoal Mask', 
      brand: 'Boscia', 
      volume: '80g', 
      price: 34, 
      description: 'This face mask is designed to detoxify and purify the skin using activated charcoal. It also contains vitamin C and jojoba leaf to brighten and soothe the skin.', 
      thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
      gallery: [ 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479' 
    ], 
    ingredientsList: [ 
      'Activated charcoal', 
      'Vitamin C', 
      'Jojoba leaf', 
      'Willowherb', 
    ], 
    targets: [ 
      'Impurities', 
      'Congestion', 
      'Dullness', 
    ], 
    suited: 'All skin types', 
    productProperties: [ 
      'Cruelty-free', 
      'Gluten-free', 
      'Artificial fragrance-free', 
    ], 
    averageStars: 4.7, 
    numberOfReviews: 30, 
    reviews: [ 
      { 
        title: 'Best charcoal mask ever', 
        stars: 5, 
        comment: 'This is hands down the best charcoal mask I\'ve ever used. It helps clear out my pores but doesn\'t leave my skin feeling dry or tight.', 
      }, 
      { 
        title: 'Great for oily skin', 
        stars: 4, 
        comment: 'I love using this mask when my skin is feeling particularly greasy. It helps absorb excess oil and leaves my skin looking brighter and more refreshed.', 
      }, 
    ], 
      }, 
      { 
      id: 34, 
      name: 'White Tea Overnight Mask', 
      brand: 'Origins', 
      volume: '75ml', 
      price: 56, 
      description: 'This overnight mask is designed to hydrate and soothe the skin using white tea extract and aloe vera. It also contains vitamins C and E to brighten and protect the skin.', 
      thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
      gallery: [ 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479' ], ingredientsList: [ 
        'White tea extract', 
        'Aloe vera', 
        'Vitamin C', 
        'Vitamin E', 
      ], 
      targets: [ 
        'Dryness', 
        'Dullness', 
        'Fatigue', 
      ], 
      suited: 'All skin types', 
      productProperties: [ 
        'Paraben-free', 
        'Sulfate-free', 
        'Phthalate-free', 
      ], 
      averageStars: 4.5, 
      numberOfReviews: 24, 
      reviews: [ 
        { 
          title: 'Lovely overnight mask', 
          stars: 5, 
          comment: 'This mask is perfect for adding some extra hydration to my skin overnight. It leaves my skin feeling plump and refreshed in the morning.', 
        }, 
        { 
          title: 'Instantly soothes my skin', 
          stars: 4, 
          comment: 'I love how soothing and cooling this mask feels on my skin. The white tea extract and aloe vera really help calm any redness or irritation.', 
        }, 
      ], 
      }, 
      { 
        id: 35, 
        name: 'Honey Potion Renewing Antioxidant Hydration Mask', 
        brand: 'Farmacy', 
        volume: '50g', 
        price: 56, 
        description: 'This face mask is designed to hydrate and nourish the skin using natural ingredients like honey, propolis, and royal jelly. It also contains echinacea to boost the skin\'s resilience and protect against environmental stressors.', 
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        gallery: [ 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479' 
        ], 
        ingredientsList: [ 
          'Honey', 
          'Propolis', 
          'Royal jelly', 
          'Echinacea', 
          'Glycerin', 
        ], 
        targets: [ 
          'Dryness', 
          'Dullness', 
          'Antioxidant protection', 
        ], 
        suited: 'All skin types', 
        productProperties: [ 
          'Cruelty-free', 
          'Gluten-free', 
          'Sulfate-free', 
        ], 
          averageStars: 4.4, 
          numberOfRewievs: 16, 
          reviews: [ 
            { 
              title: 'One of my favorites', 
              stars: 5, 
              comment: 'This mask is one of my favorites for hydrating and nourishing my skin. The honey and royal jelly really help improve its texture and overall appearance.', 
            }, 
            { 
              title: 'Feels like a spa treatment', 
              stars: 4, 
              comment: 'I love how luxurious and pampering this mask feels on my skin. It leaves it feeling so soft and smooth, and gives me a nice glow too.', 
            }, 
          ], 
      }, 
      { 
          id: 36, 
          name: 'Green Tea Matcha Super-Antioxidant Mask', 
          brand: 'Youth to the People', 
          volume: '59ml', 
          price: 44, 
          description: 'This face mask is designed to protect and nourish the skin using green tea, matcha, and spinach. It also contains aloe vera and hyaluronic acid to hydrate and soothe the skin.', 
          thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          gallery: [ 
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479' 
          ], ingredientsList: [ 
            'Green tea', 
            'Matcha', 
            'Spinach', 
            'Aloe vera', 
            'Hyaluronic acid', 
          ], 
          targets: [ 
          'Antioxidant protection', 
          'Hydration', 
          'Soothing', 
        ], 
        suited: 'All skin types', 
        productProperties: [ 
          'Cruelty-free', 
          'Vegan', 
          'Organic', 
        ], 
        averageStars: 4.6, 
        numberOfReviews: 18, 
        reviews: [ 
          { 
            title: 'My skin feels amazing', 
            stars: 5, 
            comment: 'This mask has really improved the overall health and appearance of my skin. It helps calm any redness and irritation, and leaves my skin feeling so soft and smooth.', 
          }, 
          { 
            title: 'Great for sensitive skinRix Logo', 
            stars: 4, 
            comment: 'I really like how gentle and soothing this mask is on my sensitive skin. It helps hydrate and calm any irritation or redness.', 
          }, 
        ], 
      },
    ],
  },
  {
    title: 'Serums',
    items: [
      {
        id: 37,
        name: 'Azelaic Acid Suspension 10%',
        brand: 'The Ordinary',
        volume: '30ml',
        price: 7.9,
        description:
          'A brightening and exfoliating serum that reduces the appearance of acne scars, hyperpigmentation and redness. Infused with 10% azelaic acid that gently exfoliates and calms down the skin, leaving it smoother and more even.',
        thumbnailUrl:
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Aqua (Water)',
          'Azelaic Acid',
          'Dimethicone',
          'Propanediol',
          'Glycerin',
          'Dimethicone/Bis-Isobutyl PPG-20 Crosspolymer',
          'Dimethicone/Vinyl Dimethicone Crosspolymer',
          'Disteardimonium Hectorite',
          'Hexamethyldisiloxane',
          'PEG-10 Dimethicone',
          'Sodium Chloride',
          'Phenoxyethanol',
          'Chlorphenesin',
          'Caprylyl Glycol',
          'Triethoxycaprylylsilane',
          'Trisodium Ethylenediamine Disuccinate',
        ],
        targets: [
          'Acne scars',
          'Hyperpigmentation',
          'Redness',
        ],
        suited: 'All skin types, especially acne-prone and sensitive',
        productProperties: ['Cruelty-free', 'Vegan', 'Oil-free'],
        averageStars: 4.4,
        numberOfReviews: 12,
        reviews: [
          {
            title: 'Great for Acne Scars!',
            stars: 4,
            comment: 'I have been using this product for a few weeks and I already see a difference in my acne scars. They are less noticeable and my skin is smoother. The only downside is that it can feel a bit heavy on the skin, but it\'s nothing too bothersome. Overall, I\'m happy with my purchase and will continue to use it.',
          },
          {
            title: 'Works as Advertised',
            stars: 5,
            comment: 'This serum has made a huge difference in my skin\'s texture and appearance. It\'s brighter, smoother and the redness has reduced significantly. It\'s also very gentle and doesn\'t cause any irritation. Highly recommend to anyone with acne-prone or sensitive skin.',
          },
        ],
      },
      {
        id: 37,
        name: 'Vitamin B3 Serum',
        brand: 'The Ordinary',
        volume: '30ml',
        price: 9.9,
        description: 'A powerful and lightweight serum that reduces the appearance of blemishes, redness and enlarged pores. Infused with Vitamin B3 to strengthen the skin barrier and boost radiance.',
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
          'Water',
          'Niacinamide',
          'Butylene Glycol',
          'Glycerin',
          'Polyphosphorylcholine Glycol Acrylate',
        ],
        targets: [
          'Blemishes',
          'Redness',
          'Enlarged pores',
        ],
        suited: 'All skin types',
        productProperties: [
          'Alcohol-free',
          'Fragrance-free',
          'Cruelty-free',
        ],
        averageStars: 4.8,
        numberOfReviews: 20,
        reviews: [
          {
            title: 'Finally Something That Works!',
            stars: 5,
            comment: 'I have been using this serum for 2 weeks and I can already see a difference in my skin.  My pores are smaller, my skin is brighter, and my blemishes are clearing up. This is a staple in my skincare routine now.',
          },
        ],
      },
      { 
        id: 38, 
        name: 'Hyaluronic Acid 2% + B5', 
        brand: 'The Ordinary', 
        volume: '30ml', 
        price: 6.8, 
        description: 'A hydrating serum that improves skin hydration, texture and reduces the appearance of fine lines. Infused with hyaluronic acid that holds up to 1000 times its weight in water, and Vitamin B5 to nourish and soothe the skin.', 
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [ 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        ], 
        ingredientsList: [ 
          'Aqua (Water)', 
          'Sodium Hyaluronate', 
          'Pentylene Glycol', 
          'Propanediol', 
          'Sodium Hyaluronate Crosspolymer', 
          'Panthenol', 
          'Ahnfeltia Concinna Extract', 
          'Glycerin', 
          'Trisodium Ethylenediamine Disuccinate', 
          'Citric Acid', 
          'Isoceteth-20', 
          'Ethoxydiglycol', 
          'Ethylhexylglycerin', 
          'Hexylene Glycol', 
          '1,2-Hexanediol', 
          'Phenoxyethanol', 
          'Caprylyl Glycol', 
        ], 
        targets: [ 
          'Dehydrated skin', 
          'Fine lines', 
          'Rough texture', 
        ], 
        suited: 'All skin types', 
        productProperties: [
          'Cruelty-free', 
          'Vegan', 
          'Alcohol-free'
        ], 
        averageStars: 4.7, 
        numberOfReviews: 15, 
        reviews: [ 
          { 
            title: 'Amazingly Hydrating Serum', 
            stars: 5, 
            comment: 'I absolutely love this serum. It\'s incredibly hydrating and has improved the overall texture of my skin. It\'s also very affordable, so it\'s definitely worth trying if you haven\'t already!', 
          }, 
          { 
            title: 'Great Value', 
            stars: 4, 
            comment: 'This serum does exactly what it says it will do. It hydrates my skin and reduces fine lines. The only downside is that it takes a bit of time to dry and can feel tacky on the skin, but it\'s nothing too uncomfortable.', 
          }, 
        ], 
      }, 
      { 
        id: 39, 
        name: 'Lactic Acid 10% + HA', 
        brand: 'The Ordinary', 
        volume: '30ml', 
        price: 6.5, 
        description: 'An exfoliating serum that smooths out skin texture, reduces the appearance of dark spots and fine lines. Infused with 10% lactic acid that gently removes dead skin cells without causing irritation, and hyaluronic acid to hydrate and plump up the skin.', 
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [ 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        ], 
        ingredientsList: [ 
          'Aqua (Water)', 
          'Lactic Acid', 
          'Glycerin', 
          'Pentylene Glycol', 
          'Propanediol', 
          'Sodium Hyaluronate Crosspolymer', 
          'Tasmannia Lanceolata Fruit/Leaf Extract', 
          'Acacia Senegal Gum', 
          'Xanthan Gum', 
          'Trisodium Ethylenediamine Disuccinate', 
          'Sodium Hydroxide', 
          'Ethylhexylglycerin', 
          '1,2-Hexanediol', 
          'Caprylyl Glycol', 
        ], 
        targets: [ 
          'Uneven skin texture', 
          'Dark spots', 
          'Fine lines', 
        ], 
          suited: 'All skin types', 
          productProperties: ['Fragrance-free', 
          'Cruelty-free', 
          'Alcohol-free'], 
          averageStars: 4.9, 
          numberOfReviews: 25, 
          reviews: [ 
          { 
            title: 'Great Exfoliating Serum', 
            stars: 5, 
            comment: 'This serum has transformed my skin. I have been using it for 2 weeks now and my skin is smoother, brighter and more even. Highly recommend to anyone looking to improve their skin texture.', 
          }, 
          { 
            title: 'Amazing Value', 
            stars: 4, 
            comment: 'I was blown away by the results of this serum. It\'s gentle yet effective and it doesn\'t irritate my sensitive skin. The only issue is that it takes a bit of time to see the results, but it\'s definitely worth the wait!', 
          }, 
        ], 
      }, 
      { 
        id: 40, 
        name: 'Resveratrol 3% + Ferulic Acid 3%', 
        brand: 'The Ordinary', 
        volume: '30ml', 
        price: 8.3, 
        description: 'An antioxidant serum that protects the skin against environmental stressors and free radicals, leaving the skin brighter and healthier. Infused with 3% resveratrol that neutralizes free radicals, and 3% ferulic acid that enhances the effectiveness of other antioxidants.', 
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [ 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479', 
        ], 
        ingredientsList: [ 
          'Propanediol', 
          'Resveratrol', 
          'Ferulic Acid', 
          'Ethyl Ascorbic Acid', 
          'Ethoxydiglycol', 
          'Propylene Glycol', 
          'Glycerin', 
          'Lauryl Glucoside', 
          'Polyglyceryl-2 Dipolyhydroxystearate', 
          'Tocopherol', 
          'Phenoxyethanol', 
          'Potassium Sorbate', 
          'Hydroxyethylcellulose', 
          'Polyacrylate Crosspolymer-6', 
          'Sodium Hydroxide', 
          'Ethylhexylglycerin', 
        ], 
        targets: [ 
          'Environmental stressors', 
          'Free radicals', 
          'Brightening', 
        ], 
        suited: 'All skin types', 
        productProperties: ['Cruelty-free', 
          'Vegan', 
          'Paraben-free'
        ], 
        averageStars: 4.6, 
        numberOfReviews: 18, 
        reviews: [ 
          { 
            title: 'Excellent Antioxidant Serum', 
            stars: 5, 
            comment: 'This serum has done wonders for my skin. It\'s brighter and smoother than ever before, and I\'ve noticed a significant difference in how it handles environmental stressors. Highly recommend!', 
          }, 
          { 
            title: 'Great Price Point', 
            stars: 4, 
            comment: 'I love this antioxidant serum. It works really well and the price point is unbeatable, especially considering the ingredients. The only downside is that it takes a bit of time to see the results, but it\'s definitely worth the wait!', 
          }, 
        ], 
      },
      {
        id: 41,
        name: 'Hyaluronic Acid Serum',
        brand: 'The Ordinary',
        volume: '30ml',
        price: 8.2,
        description: 'A lightweight serum that contains three types of hyaluronic acid for optimal hydration. Suitable for all skin types.',
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        ingredientsList: [
            'Water',
            'Propanediol',
            'Glycerin',
            'Sodium Hyaluronate Crosspolymer',
            'Sodium Benzoate',
            'Citric Acid',
        ],
        targets: [
            'Dehydration',
            'Dullness',
            'Fine lines and wrinkles',
            'Uneven texture',
        ],
        suited: 'All skin types',
        productProperties: ['Alcohol-free', 'Fragrance-free', 'Oil-free'],
        averageStars: 4.7,
        numberOfReviews: 15,
        reviews: [
            {
                title: 'Amazing for dry skin',
                stars: 5,
                comment: 'I have dry and sensitive skin, and this serum has done wonders for hydrating and plumping up my skin. Highly recommend!',
            },
            {
                title: 'Not just for mature skin',
                stars: 4,
                comment: 'I thought this serum might be too "anti-aging" for me, but it actually works great on my early 20s skin. My skin looks brighter and smoother after using it.',
            },
        ],
      },
      {
        id: 42,
        name: 'Niacinamide 10% + Zinc 1%',
        brand: 'The Inkey List',
        volume: '30ml',
        price: 6.99,
        description: 'A serum that targets breakouts, congestion, and excess oil production with a potent combination of niacinamide and zinc. Suitable for oily and combination skin types.',
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
            'Water',
            'Niacinamide',
            'Zinc PCA',
            'Tamarindus Indica Seed Gum',
            'Sodium Hyaluronate',
            'Xanthan Gum',
            'Isoceteth-20',
            'Ethoxydiglycol',
            'Phenoxyethanol',
            'Chlorphenesin',
        ],
        targets: [
            'Acne',
            'Excess oil',
            'Congestion',
            'Uneven texture',
        ],
        suited: 'Oily and combination skin types',
        productProperties: ['Fragrance-free', 'Cruelty-free', 'Vegan'],
        averageStars: 4.3,
        numberOfReviews: 20,
        reviews: [
            {
                title: 'Helped reduce my breakouts',
                stars: 5,
                comment: 'This serum has been great for clearing up my acne-prone skin. It helps control oil production and keeps my skin looking clearer longer.',
            },
            {
                title: 'Good value for money',
                stars: 4,
                comment: 'I started using this serum as a cheaper alternative to my usual more expensive brand, and I don\'t regret it. It does what it says it will!',
            },
        ],
      },
      {
        id: 43,
        name: 'Vitamin C Serum',
        brand: 'Mad Hippie',
        volume: '30ml',
        price: 33.99,
        description: 'A serum that brightens the skin and reduces signs of aging with a blend of vitamin C, vitamin E, ferulic acid, hyaluronic acid, and konjac root. Suitable for all skin types, especially those concerned with brightening and anti-aging.',
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
            'Water',
            'Ethoxydiglycol',
            'L-Ascorbic Acid',
            'Glycerin',
            'Sodium Hyaluronate',
            'Aloe Barbadensis Leaf',
            'Tocopherol',
            'Ferulic Acid',
            'Panthenol',
            'Sodium Hydroxide',
            'Konjac Root',
        ],
        targets: [
            'Dullness',
            'Uneven texture',
            'Fine lines and wrinkles',
            'Sun damage',
        ],
        suited: 'All skin types',
        productProperties: ['Cruelty-free', 'Vegan', 'Fragrance-free'],
        averageStars: 4.8,
        numberOfReviews: 25,
        reviews: [
            {
                title: 'Brightened my skin in just a few days',
                stars: 5,
                comment: 'I was skeptical about the claims of this serum, but I noticed a difference in my skin tone and texture after just a few days of use. It\'s a little pricey, but worth it in my opinion.',
            },
            {
                title: 'Good for sensitive skin',
                stars: 4,
                comment: 'I have sensitive skin that reacts badly to a lot of skincare products, but this serum didn\'t cause any irritation or redness. My skin looks more even and bright with regular use.',
            },
        ],
      },
      {
        id: 44,
        name: 'Retinol 0.5 Refining Night Serum',
        brand: 'SkinCeuticals',
        volume: '30ml',
        price: 88,
        description: 'A potent night serum that reduces the appearance of fine lines, wrinkles, and uneven skin tone with a combination of retinol, bisabolol, and soothing botanicals. Suitable for all skin types, especially those concerned with anti-aging.',
        thumbnailUrl: 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        gallery: [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        ],
        ingredientsList: [
            'Aqua / Water',
            'Propanediol',
            'Dimethicone',
            'Cetearyl Ethylhexanoate',
            'Alcohol Denat.',
            'Dipropylene Glycol',
            'Ammonium Polyacryloyldimethyl Taurate',
            'Allyl Methacrylates Crosspolymer',
            'Polysilicone-11',
            'Phenoxyethanol',
            'Bisabolol',
            'Retinol',
            'Chlorphenesin',
            'Caprylyl Glycol',
            'Polysorbate 20',
            'Trisodium Ethylenediamine Disuccinate',
            'Citric Acid',
            'Dimethiconol',
            'Sodium Citrate',
            'BHT',
            'Propyl Gallate',
      
        ],
        targets: [
            'Fine lines and wrinkles',
            'Uneven skin tone',
            'Age spots',
            'Texture',
            'Pores',
        ],
        suited: 'All skin types, especially those concerned with anti-aging',
        productProperties: ['Paraben-free', 'Fragrance-free', 'Non-comedogenic'],
        averageStars: 4.3,
        numberOfReviews: 30,
        reviews: [
            {
                title: 'Definitely saw a difference in my skin',
                stars: 5,
                comment: 'I was hesitant to spend so much on a serum, but I\'m glad I did. After a few weeks of consistent use, I noticed that my skin looked smoother and more even. I haven\'t experienced any irritation, but I do make sure to moisturize well afterwards.',
            },
            {
                title: 'Worth the investment for anti-aging',
                stars: 4,
                comment: 'I\'ve been using this serum for a few months now, and I do think it\'s helped reduce the fine lines around my eyes and forehead. It\'s definitely expensive, but it feels like a worthwhile investment in my skincare routine.',
            },
        ],
      },
    ],
  },
  {
    title: 'Tools & Accessories',
    items: [
      {
        "id": 45,
        "name": "Facial Cleansing Brush",
        "brand": "Foreo",
        "price": 99,
        "description": "A silicone facial cleansing brush that gently exfoliates and removes dirt and impurities from the skin while improving circulation and promoting lymphatic drainage. Suitable for all skin types, including sensitive skin.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "All skin types",
        "productProperties": ["Waterproof", "Rechargeable", "Compact"],
        "averageStars": 4.9,
        "numberOfReviews": 25,
        "reviews": [
            {
                "title": "Gentle and effective",
                "stars": 5,
                "comment": "I was hesitant to invest in this cleansing brush, but I'm so glad I did. It's incredibly gentle on my sensitive skin but still removes all traces of makeup and dirt. I've noticed a significant improvement in the texture and clarity of my skin since using it.",
            },
            {
                "title": "Great for travel",
                "stars": 4,
                "comment": "I love that this brush is compact and easy to travel with. It's also super easy to clean, which is a big plus for me. Would definitely recommend!",
            },
        ],
      },
      {
        "id": 46,
        "name": "Jade Roller",
        "brand": "Herbivore",
        "price": 25,
        "description": "A facial massage tool made of genuine jade that helps to reduce puffiness, improve circulation, and promote lymphatic drainage. Suitable for all skin types.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "All skin types",
        "productProperties": ["Natural", "Easy to use"],
        "averageStars": 4.2,
        "numberOfReviews": 15,
        "reviews": [
            {
                "title": "Soothing and relaxing",
                "stars": 5,
                "comment": "This jade roller feels amazing on my skin! I love using it to massage my face after a long day. It's helped to reduce puffiness and leaves my skin looking bright and refreshed.",
            },
            {
                "title": "Great for headaches",
                "stars": 4,
                "comment": "I've been using this roller to massage my temples during headaches and it's been really helpful. It's also a great tool to use while watching TV or relaxing before bed.",
            },
        ],
      },
      {
        "id": 47,
        "name": "Pore Vacuum",
        "brand": "Eunon",
        "price": 35,
        "description": "A blackhead remover tool that uses suction to extract dirt, oil, and impurities from the pores. Comes with four different heads for customizability and a built-in rechargeable battery. Ideal for oily and acne-prone skin.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "Oily and acne-prone skin",
        "productProperties": [
          "Rechargeable", 
          "Easy to use", 
          "Effective"
        ],
        "averageStars": 3.8,
        "numberOfReviews": 12,
        "reviews": [
          {
              "title": "Good for blackheads",
              "stars": 4,
              "comment": "This pore vacuum works well for removing blackheads and extracting impurities from the pores. Just make sure to use it on the lowest setting at first to avoid irritation.",
          },
          {
              "title": "Not for sensitive skin",
              "stars": 3,
              "comment": "I found this tool to be a little too harsh for my skin, which is on the sensitive side. It did help remove some blackheads, but it also caused some redness and irritation.",
          },
        ],
      },
      {
        "id": 48,
        "name": "LED Light Therapy Mask",
        "brand": "Norlanya",
        "price": 129,
        "description": "A facial mask that uses LED light therapy to treat a variety of skin concerns, such as acne, fine lines, and wrinkles. Has seven different colors and modes for customized treatment. Comes with a built-in rechargeable battery and a Bluetooth speaker for added relaxation. Suitable for all skin types.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "All skin types",
        "productProperties": ["Rechargeable", "Bluetooth speaker", "Effective"],
        "averageStars": 4.6,
        "numberOfReviews": 20,
        "reviews": [
          {
              "title": "Amazing results",
              "stars": 5,
              "comment": "I was skeptical about this mask at first, but after using it regularly for a few weeks, I've noticed a significant improvement in my skin's texture and clarity. It's also incredibly relaxing to use and the Bluetooth speaker is a fun bonus.",
          },
          {
              "title": "Feels like a spa treatment",
              "stars": 4,
              "comment": "I love using this mask after a long day - it feels like a mini-spa treatment in the comfort of my own home. The different colors and modes make it easy to customize my treatment to my specific skin concerns.",
          },
        ],
      },
      {
        "id": 49,
        "name": "Facial Steamer",
        "brand": "NanoSteamer",
        "price": 39,
        "description": "A facial steaming tool that opens up the pores, removes dirt and impurities, and prepares the skin for better absorption of skincare products. Comes with a large water tank for up to 30 minutes of steam and a set of extraction tools for easy removal of blackheads and whiteheads. Suitable for all skin types.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "All skin types",
        "productProperties": ["Easy to use", "Effective", "Affordable"],
        "averageStars": 4.3,
        "numberOfReviews": 18,
        "reviews": [
          {
              "title": "Great for acne-prone skin",
              "stars": 5,
              "comment": "As someone with acne-prone skin, I've found this facial steamer to be incredibly helpful in reducing breakouts and improving the overall appearance of my skin. It's easy to use and lasts for a long time on one tank of water.",
          },
          {
              "title": "Good for the price",
              "stars": 4,
              "comment": "I wasn't sure what to expect from this facial steamer given the relatively low price, but it works really well! I've noticed a significant improvement in the clarity and texture of my skin since using it.",
          },
        ],
      },
      {
        "id": 50,
        "name": "Ice Roller",
        "brand": "ESARORA",
        "price": 12,
        "description": "A facial massage tool that uses cold therapy to reduce puffiness, soothe irritation, and increase circulation. Ideal for use after workouts, sun exposure, or stressful days. Can also be used on other parts of the body, such as the neck and shoulders. Suitable for all skin types.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "All skin types",
        "productProperties": ["Affordable", "Easy to use", "Effective"],
        "averageStars": 4.1,
        "numberOfReviews": 14,
        "reviews": [
          {
              "title": "Feels so refreshing",
              "stars": 5,
              "comment": "Using this ice roller after a workout or a long day is like heaven for my skin! It feels so refreshing and helps to reduce any redness or puffiness. Plus, it's super affordable!",
          },
          {
              "title": "Soothing on sunburns",
              "stars": 4,
              "comment": "I recently used this roller on a sunburn and it worked really well to soothe the burning sensation and reduce redness. It's also great for headaches!",
          },
        ],
      }
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        "id": 51,
        "name": "Jack Black Pure Clean Daily Facial Cleanser",
        "brand": "Jack Black",
        "price": 19,
        "description": "A gentle, pH-balanced facial cleanser that removes dirt and impurities without over-drying the skin. Contains aloe and sage leaf to soothe and calm the skin. Suitable for all skin types.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "Men's grooming",
        "productProperties": ["Gentle", "Soothing", "pH-balanced"],
        "averageStars": 4.6,
        "numberOfReviews": 34,
        "reviews": [
          {
              "title": "Best cleanser I've ever used",
              "stars": 5,
              "comment": "This cleanser is amazing! It's gentle but still removes all the dirt and oil from my face. My skin feels soft and hydrated after using it, and it hasn't caused any breakouts or irritation.",
          },
          {
              "title": "Great for sensitive skin",
              "stars": 4,
              "comment": "I have very sensitive skin and have had trouble finding a cleanser that doesn't cause redness or irritation. This one is perfect - it's gentle and doesn't contain any harsh ingredients.",
          },
        ],
      },
      {
        "id": 52,
        "name": "Clinique for Men Maximum Hydrator Activated Water-Gel Concentrate",
        "brand": "Clinique",
        "price": 40,
        "description": "An innovative water-gel moisturizer that instantly hydrates and plumps the skin. Contains caffeine to energize and refresh the skin, as well as hyaluronic acid to bind moisture to the skin. Suitable for all skin types.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
          'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "Men's grooming",
        "productProperties": ["Hydrating", "Refreshing", "Contains caffeine"],
        "averageStars": 4.4,
        "numberOfReviews": 64,
        "reviews": [
          {
              "title": "Works wonders",
              "stars": 5,
              "comment": "This moisturizer is fantastic! It's super hydrating and has really helped improve the texture and appearance of my skin. Plus, it feels really refreshing and helps wake me up in the morning.",
          },
          {
              "title": "Great for dry skin",
              "stars": 4,
              "comment": "I have really dry skin and have struggled to find a moisturizer that keeps it hydrated throughout the day. This one does the trick - it's lightweight but still packs a punch when it comes to hydration.",
          },
        ],
      },
      {
        "id": 53,
        "name": "Bulldog Skincare and Grooming For Men Original Face Scrub",
        "brand": "Bulldog Skincare and Grooming For Men",
        "price": 8,
        "description": "A scrubby face wash that exfoliates and brightens the skin with coconut shell, shea butter, and sweet almond oil. Contains green tea and camelina seed oil to nourish and protect the skin. Suitable for all skin types.",
        "thumbnailUrl": 'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
        "gallery": [
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479',
            'https://cdn.shopify.com/s/files/1/0034/8812/0947/products/01_THEBODYLOTION_PDP_1400x1400.jpg?v=1631164479'
        ],
        "suited": "Men's grooming",
        "productProperties": ["Exfoliating", "Nourishing", "Contains green tea"],
        "averageStars": 4.6,
        "numberOfReviews": 31,
        "reviews": [
          {
              "title": "Great scrub",
              "stars": 5,
              "comment": "This face scrub is awesome! It's really scrubby but doesn't feel harsh or irritating. My skin feels so smooth and refreshed after using it.",
          },
          {
              "title": "Perfect for my combination skin",
              "stars": 4,
              "comment": "I have oily skin in some areas and dry skin in others, so I've had a hard time finding products that work for me. This scrub is perfect - it exfoliates without stripping my skin and leaves it feeling balanced and hydrated.",
          },
        ],
      },
    ],
  },
];

export default PRODUCTS_DATA;