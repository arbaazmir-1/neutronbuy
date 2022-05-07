const products = [
  {
    
    name: "Men's Jacket",
    image: 'https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Soft and Comfy',
    brand: 'LV',
    category: 'Men',
    price: 89.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 12,
    promotions: {
      isOnSale:false,

    }
  },
  {
    
    name: 'Woman Jacket',
    image: 'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Comfy and Soft',
    brand: 'Adidas',
    category: 'Women',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    promotions: {
      isOnSale:true,
      promoPrice: 439.90
    }
  },
  {
    
    name: 'Titan Watch',
    image: 'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'The best watch you can find in the world!',
    brand: 'Titan',
    category: 'Accessories',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
    promotions: {
      isOnSale:false,
      
    }
  },
  {
    
    name: 'LV BackPack',
    image: 'https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'The ultimate backpack you need!',
    brand: 'LV',
    category: 'Accessories',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    promotions: {
      isOnSale:true,
      promoPrice: 419.90
    }
  },
  {
    
    name: 'Denim Jacket',
    image: 'https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Fashion Reexamined',
    brand: 'Denim',
    category: 'Men',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    promotions: {
      isOnSale:false,
      
    }
  },
  {
    
    name: 'Women FullSleeve Jacket',
    image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Your winter fashion Companion',
    brand: 'Denim',
    category: 'Woman',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
    promotions: {
      isOnSale:true,
      promoPrice: 19.90
    }
  },
]

module.exports = products
