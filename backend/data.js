import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Vlad",
      email: "vlad.maidanyuk95@gmail.com",
      password: bcrypt.hashSync("Alex62alex", 8),
      isAdmin: true,
    },
    {
      name: "Olga",
      email: "marmoklive666@gmail.com",
      password: bcrypt.hashSync("alex28alex", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Elisabeth doll",
      category: "Shmatyanka",
      image: "/images/p1.jpg",
      price: 59,
      countInStock: 10,
      brand: "Olalka",
      rating: 5,
      numReviews: 10,
      description: "high quality interier doll",
    },
    {
      name: "Gloria doll",
      category: "Shmatyanka",
      image: "/images/p2.jpg",
      price: 59,
      countInStock: 20,
      brand: "Olalka",
      rating: 4.5,
      numReviews: 34,
      description: "high quality interier doll",
    },
    {
      name: "Jess doll",
      category: "Shmatyanka",
      image: "/images/p3.jpg",
      price: 89,
      countInStock: 0,
      brand: "Olalka",
      rating: 4.6,
      numReviews: 16,
      description: "high quality interier doll",
    },
    {
      name: "Kasia doll",
      category: "Shmatyanka",
      image: "/images/p4.jpg",
      price: 59,
      countInStock: 16,
      brand: "Olalka",
      rating: 4,
      numReviews: 10,
      description: "high quality interier doll",
    },
    {
      name: "Busya doll",
      category: "Shmatyanka",
      image: "/images/p5.jpg",
      price: 69,
      countInStock: 1,
      brand: "Olalka",
      rating: 4.8,
      numReviews: 100,
      description: "high quality interier doll",
    },
    {
      name: "Julya doll",
      category: "Shmatyanka",
      image: "/images/p6.jpg",
      price: 140,
      countInStock: 100,
      brand: "Olalka",
      rating: 5,
      numReviews: 1000,
      description: "high quality interier doll",
    },
  ],
};

export default data;
