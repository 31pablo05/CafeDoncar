const featuredItems = [
  // 🍔 HAMBURGUESAS DESTACADAS (2 productos)
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Queso, jamón, huevo, lechuga, tomate y aros de cebolla",
    price: 1100,
    priceDouble: 2100,
    category: "Hamburguesas",
    type: "Clásica",
    image: "/placeholder.svg?height=300&width=400&text=Hamburguesa+Clásica",
    sizes: ["Simple", "Doble"],
    featured: true,
    popular: true
  },
  {
    id: 6,
    name: "Hamburguesa Doncar",
    description: "Cheddar, provolone, aros de cebolla, huevo y hongos",
    price: 1300,
    priceDouble: 2500,
    category: "Hamburguesas",
    type: "Especial",
    image: "/placeholder.svg?height=300&width=400&text=Hamburguesa+Doncar",
    sizes: ["Simple", "Doble"],
    featured: true,
    popular: true
  },

  // 🍕 PIZZAS DESTACADAS (3 productos)
  {
    id: 13,
    name: "Pizza Mozzarella",
    description: "Salsa, mozzarella y aceitunas",
    price: 1250,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Mozzarella",
    featured: true,
    popular: true
  },
  {
    id: 18,
    name: "Pizza Jamón y Mozzarella",
    description: "Salsa, mozzarella, jamón y aceitunas",
    price: 1450,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Jamón+Mozzarella",
    featured: true,
    popular: true
  },
  {
    id: 43,
    name: "Pizza Café Doncar",
    description: "Salsa, mozzarella, 4 burgers, tomate en rodajas, verdeo, 4 huevos fritos, jamón y morrones",
    price: 3500,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Café+Doncar",
    featured: true,
    popular: true
  },

  // 🍟 CHIPS DESTACADAS (2 productos)
  {
    id: 9,
    name: "Chips Clásicas",
    description: "Papas fritas tradicionales",
    price: 600,
    priceExtra: 900,
    category: "Chips",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Chips+Clásicas",
    sizes: ["500g", "800g"],
    featured: true,
    popular: true
  },
  {
    id: 11,
    name: "Chips con Cheddar",
    description: "Papas fritas con queso cheddar derretido",
    price: 680,
    priceExtra: 980,
    category: "Chips",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Chips+con+Cheddar",
    sizes: ["500g", "800g"],
    featured: true,
    popular: true
  },

  // 🥪 SANDWICHES DESTACADOS (2 productos)
  {
    id: 54,
    name: "Sandwich de Pollo 1",
    description: "Cebolla, tomates cherrys caramelizados, mozzarella y mayonesa",
    price: 1000,
    category: "Sandwiches",
    type: "Pollo",
    image: "/placeholder.svg?height=300&width=400&text=Sandwich+Pollo+1",
    featured: true,
    popular: true
  },
  {
    id: 56,
    name: "Sandwich de Bondiola de Cerdo",
    description: "Pan, lechuga, tomate, aros de cebolla, bondiola, mozzarella y queso",
    price: 1350,
    category: "Sandwiches",
    type: "Cerdo",
    image: "/placeholder.svg?height=300&width=400&text=Sandwich+Bondiola",
    featured: true,
    popular: true
  },

  // 🍖 GRILLE DESTACADOS (2 productos)
  {
    id: 58,
    name: "Pechuga de Pollo",
    description: "Papas fritas a caballo / opcional salsa criolla",
    price: 950,
    category: "Grille",
    type: "Pollo",
    image: "/placeholder.svg?height=300&width=400&text=Pechuga+Pollo",
    featured: true,
    popular: true
  },
  {
    id: 59,
    name: "Milanesa de Carne",
    description: "A caballo con papas fritas",
    price: 1000,
    category: "Grille",
    type: "Carne",
    image: "/placeholder.svg?height=300&width=400&text=Milanesa+Carne",
    featured: true,
    popular: true
  }
];

export default featuredItems;
