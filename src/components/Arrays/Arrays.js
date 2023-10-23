const products = [
  {
    id: "1",
    name: "Camiseta 2022 de los Celtics",
    price: "20000",
    category: "Camisetas de los Celtics",
    img: "https://w7.pngwing.com/pngs/691/731/png-transparent-boston-celtics-houston-rockets-jersey-swingman-nba-store-nike-tshirt-active-shirt-adidas.png",
    stock: 100,
  },
  {
    id: "2",
    name: "Camiseta 2022 de los Warriors",
    price: "20000",
    category: "Camisetas de los Warriors",
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/22b482c8-0ef2-47f5-8de0-e4dc69bd7dc9/camiseta-nba-authentic-stephen-curry-warriors-icon-edition-2020-ZMF9qK.png",
    stock: 100,
  },
  {
    id: "3",
    name: "Camiseta 2022 de los Lakers",
    price: "19999",
    category: "Camisetas de los Lakers",
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5f9049ee-aba5-452d-93d9-bf5d3f02228b/camiseta-nba-swingman-lakers-icon-edition-2020-0XFknw.png",
    stock: 100,
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    });
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsByCategory = products.filter(
        (prod) => prod.category === category
      );
      resolve(productsByCategory);
    });
  });
};
