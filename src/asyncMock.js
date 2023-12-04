const products = [
  {
    id: "1",
    name: "Excursiones",
    price: 30000,
    category: "Excursiones",
    img: "https://img.freepik.com/free-photo/cyclist-sunny-day-bike-adventure-travel-photo_1150-7513.jpg?t=st=1701640732~exp=1701641332~hmac=0496c6ecbe9b35d1cabc4ee4597fe4558b206645ecc0bff25858d0cfedea7758",
    stock: 25,
    description: "Excursiones por Argentina",
  },
  {
    id: "2",
    name: "Entrenamientos Personalizados",
    price: 6500,
    category: "Entrenamiento",
    img: "https://img.freepik.com/free-photo/full-shot-people-training-gym_23-2149049754.jpg?w=740&t=st=1701640128~exp=1701640728~hmac=4a235ae03436e40d440e80f2cb211a332082bc71035898c24cf3702166478460",
    stock: 16,
    description: "Entrenamientos personalizados",
  },
  {
    id: "3",
    name: "Yoga",
    price: 10000,
    category: "Yoga",
    img: "https://img.freepik.com/free-photo/back-view-woman-doing-yoga-outdoors_23-2148769551.jpg?w=740&t=st=1701641703~exp=1701642303~hmac=2463c0f36b9d3dcf4a2beaa41cf44e4028ffa1079650c254c12f5e6db102207e",
    stock: 3,
    description: "Clases de Yoga",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
