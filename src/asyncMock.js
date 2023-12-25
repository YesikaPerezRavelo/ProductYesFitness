const products = [
  {
    id: "1",
    name: "Aventura",
    price: 30000,
    category: "Excursiones",
    img: "https://drive.google.com/uc?export=view&id=1XPk1BdLhwGVPQ9aFjb0QwrrVizgvMvru",
    stock: 25,
    description:
      "Agenda un excursion de aventura para conocer nuevos lugares en Argentina",
  },
  {
    id: "2",
    name: "Entrenamientos Personalizados",
    price: 6500,
    category: "Entrenamiento",
    img: "https://drive.google.com/uc?export=view&id=1VjvOYHQoR7Qpv9mwdKIcw9dVipPcvNbx",
    stock: 16,
    description:
      "Me dedicó a enseñar todo tipo de técnicas de entrenamiento, yoga, elongación y relajación. Mi meta es que puedas disfrutar de cada una de ellas",
  },
  {
    id: "3",
    name: "Yoga",
    price: 10000,
    category: "Yoga",
    img: "https://drive.google.com/uc?export=view&id=1jTnBvxl2QgjqKeASPUljW7fDe1y4iJfk",
    stock: 3,
    description:
      "Clases de yoga al aire libre para disfrutar de la naturaleza y hacerte una escapadita natural",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === itemId));
    }, 1000);
  });
};
