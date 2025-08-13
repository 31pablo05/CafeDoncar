const menuItems = [
  // 🍔 HAMBURGUESAS
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Queso, jamón, huevo, lechuga, tomate y aros de cebolla",
    price: 1100,
    priceDouble: 2100,
    category: "Hamburguesas",
    type: "Clásica",
    image: "/images/burgerclásica.jpg",
    sizes: ["Simple", "Doble"]
  },
  {
    id: 2,
    name: "Hamburguesa Yankee",
    description: "Cheddar, bacón, lechuga, barbacoa, tomate y aros de cebolla morada",
    price: 1200,
    priceDouble: 2300,
    category: "Hamburguesas",
    type: "Premium",
    image: "/images/doblebacon cheeseDoble medallónDoblecheddar.jpg",
    sizes: ["Simple", "Doble"]
  },
  {
    id: 3,
    name: "Hamburguesa Blue",
    description: "Cebolla caramelizada, queso azul, hongos",
    price: 1300,
    priceDouble: 2500,
    category: "Hamburguesas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Hamburguesa+Blue",
    sizes: ["Simple", "Doble"]
  },
  {
    id: 4,
    name: "Hamburguesa Bacón",
    description: "Cheddar y bacón",
    price: 1100,
    priceDouble: 2100,
    category: "Hamburguesas",
    type: "Clásica",
    image: "/images/hamburguesa bacon.jpg",
    sizes: ["Simple", "Doble"]
  },
  {
    id: 5,
    name: "Hamburguesa Mediterránea",
    description: "Rúcula, cherrys y parmesano",
    price: 1200,
    priceDouble: 2300,
    category: "Hamburguesas",
    type: "Premium",
    image: "/placeholder.svg?height=300&width=400&text=Hamburguesa+Mediterránea",
    sizes: ["Simple", "Doble"]
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
    sizes: ["Simple", "Doble"]
  },
  {
    id: 7,
    name: "Hamburguesa Simple",
    description: "Pan y carne",
    price: 800,
    category: "Hamburguesas",
    type: "Básica",
    image: "/placeholder.svg?height=300&width=400&text=Hamburguesa+Simple",
    sizes: ["Simple"]
  },
  {
    id: 8,
    name: "Super Burger 1Kg",
    description: "Hamburguesa gigante de 1 kilogramo",
    price: 3500,
    category: "Hamburguesas",
    type: "Especial",
    image: "/placeholder.svg?height=300&width=400&text=Super+Burger+1Kg",
    sizes: ["Gigante"]
  },

  // 🍟 CHIPS
  {
    id: 9,
    name: "Chips Clásicas",
    description: "Papas fritas tradicionales",
    price: 600,
    priceExtra: 900,
    category: "Chips",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Chips+Clásicas",
    sizes: ["500g", "800g"]
  },
  {
    id: 10,
    name: "Chips con Huevos Revueltos",
    description: "Papas fritas con huevos revueltos",
    price: 680,
    priceExtra: 980,
    category: "Chips",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Chips+con+Huevos",
    sizes: ["500g", "800g"]
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
    sizes: ["500g", "800g"]
  },
  {
    id: 12,
    name: "Chips con Verdeo y Cheddar",
    description: "Papas fritas con verdeo y queso cheddar",
    price: 900,
    priceExtra: 1200,
    category: "Chips",
    type: "Premium",
    image: "/placeholder.svg?height=300&width=400&text=Chips+Verdeo+Cheddar",
    sizes: ["500g", "800g"]
  },
  {
    id: 60,
    name: "Combo Kids",
    description: "Nuggets de pollo, papas crinkle y ketchup",
    price: 850,
    category: "Chips",
    type: "Infantil",
    image: "/placeholder.svg?height=300&width=400&text=Combo+Kids",
    featured: false,
    popular: true
  },

  // 🍕 PIZZAS CLÁSICAS
  {
    id: 13,
    name: "Pizza Mozzarella",
    description: "Salsa, mozzarella y aceitunas",
    price: 1250,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Mozzarella"
  },
  {
    id: 14,
    name: "Pizza Doble Mozzarella",
    description: "Salsa, 1/2 Kg de mozzarella y aceitunas",
    price: 1400,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Doble+Mozzarella"
  },
  {
    id: 15,
    name: "Pizza Provolone",
    description: "Salsa, mozzarella, provolone y aceitunas",
    price: 1700,
    category: "Pizzas",
    type: "Quesos",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Provolone"
  },
  {
    id: 16,
    name: "Pizza Napolitana con Jamón",
    description: "Salsa, mozzarella, rodajas de tomate, ajo, jamón y aceitunas",
    price: 1600,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Napolitana+Jamón"
  },
  {
    id: 17,
    name: "Pizza Napolitana",
    description: "Salsa, mozzarella, rodajas de tomate y ajo",
    price: 1450,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Napolitana"
  },
  {
    id: 18,
    name: "Pizza Jamón y Mozzarella",
    description: "Salsa, mozzarella, jamón y aceitunas",
    price: 1450,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Jamón+Mozzarella"
  },
  {
    id: 19,
    name: "Pizza Especial",
    description: "Salsa, mozzarella, jamón, morrón y aceitunas",
    price: 1600,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Especial"
  },
  {
    id: 20,
    name: "Pizza Primavera",
    description: "Salsa, mozzarella, jamón, huevo rallado, morrones y aceitunas",
    price: 1700,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Primavera"
  },

  // 🍕 PIZZAS CON ROQUEFORT
  {
    id: 21,
    name: "Pizza Roquefort",
    description: "Salsa, mozzarella, roquefort y aceitunas",
    price: 1700,
    category: "Pizzas",
    type: "Quesos",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Roquefort"
  },
  {
    id: 22,
    name: "Pizza Roquefort con Jamón",
    description: "Salsa, mozzarella, jamón, roquefort y aceitunas",
    price: 1800,
    category: "Pizzas",
    type: "Quesos",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Roquefort+Jamón"
  },
  {
    id: 23,
    name: "Pizza Roquefort, Apio y Nuez",
    description: "Salsa, mozzarella, roquefort, apio y nuez",
    price: 1750,
    category: "Pizzas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Roquefort+Apio+Nuez"
  },

  // 🍕 PIZZAS ESPECIALES
  {
    id: 24,
    name: "Pizza Pepperoni",
    description: "Salsa, mozzarella, pepperoni y aceitunas",
    price: 1600,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Pepperoni"
  },
  {
    id: 25,
    name: "Fugazza",
    description: "Cebolla y mozzarella",
    price: 1450,
    category: "Pizzas",
    type: "Clásicas",
    image: "/placeholder.svg?height=300&width=400&text=Fugazza"
  },
  {
    id: 26,
    name: "Fugazza Especial",
    description: "Cebolla, mozzarella, roquefort, jamón y morrones",
    price: 1750,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Fugazza+Especial"
  },
  {
    id: 27,
    name: "Pizza Provolone con Jamón",
    description: "Salsa, mozzarella, jamón, provolone y aceitunas",
    price: 1800,
    category: "Pizzas",
    type: "Quesos",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Provolone+Jamón"
  },

  // 🍕 PIZZAS CON PALMITOS
  {
    id: 28,
    name: "Pizza Palmitos",
    description: "Salsa, mozzarella, jamón, palmitos, salsa golf y morrones",
    price: 1750,
    category: "Pizzas",
    type: "Gourmet",
    image: "/images/pizzade palmitos.jpg"
  },
  {
    id: 29,
    name: "Pizza Palmitos Especial",
    description: "Salsa, mozzarella, jamón, palmitos, roquefort y morrones",
    price: 1850,
    category: "Pizzas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Palmitos+Especial"
  },
  {
    id: 30,
    name: "Pizza Palmitos con Crudo",
    description: "Salsa, mozzarella, jamón crudo, palmitos, salsa golf y aceitunas",
    price: 1850,
    category: "Pizzas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Palmitos+Crudo"
  },

  // 🍕 PIZZAS GOURMET
  {
    id: 31,
    name: "Pizza Americana",
    description: "Salsa, mozzarella, panceta salteada, huevo revuelto, morrón y aceitunas",
    price: 1750,
    category: "Pizzas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Americana"
  },
  {
    id: 32,
    name: "Pizza Serrana",
    description: "Salsa, mozzarella, crudo, morrón y aceitunas",
    price: 1750,
    category: "Pizzas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Serrana"
  },
  {
    id: 33,
    name: "Pizza Mediterránea",
    description: "Salsa, mozzarella, jamón crudo, cherry, ajo y aceitunas negras",
    price: 1850,
    category: "Pizzas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Mediterránea"
  },
  {
    id: 34,
    name: "Pizza Rúcula",
    description: "Salsa, mozzarella, jamón crudo, parmesano, rúcula y cherrys",
    price: 1850,
    category: "Pizzas",
    type: "Gourmet",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Rúcula"
  },
  {
    id: 35,
    name: "Pizza Ananá",
    description: "Salsa, mozzarella, jamón, ananá caramelizada y aceitunas",
    price: 1900,
    category: "Pizzas",
    type: "Dulces",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Ananá"
  },
  {
    id: 36,
    name: "Pizza Tropical",
    description: "Salsa, mozzarella, jamón crudo, ananá caramelizada y cerezas al marrasquino",
    price: 2000,
    category: "Pizzas",
    type: "Dulces",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Tropical"
  },

  // 🍕 PIZZAS VEGETARIANAS Y ESPECIALES
  {
    id: 37,
    name: "Pizza Capresse",
    description: "Salsa, mozzarella, cherrys, albahaca y aceitunas",
    price: 1600,
    category: "Pizzas",
    type: "Vegetarianas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Capresse"
  },
  {
    id: 38,
    name: "Pizza Anchoas",
    description: "Salsa, mozzarella, anchoas, morrones y aceitunas",
    price: 1650,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Anchoas"
  },
  {
    id: 39,
    name: "Pizza Cuatro Quesos",
    description: "Salsa, mozzarella, provolone, roquefort, pategrás y aceitunas",
    price: 1850,
    category: "Pizzas",
    type: "Quesos",
    image: "/assets/images/pizzacuatroquesos.jpg"
  },
  {
    id: 40,
    name: "Pizza Veggie",
    description: "Salsa, mozzarella y salteado de verduras",
    price: 1750,
    category: "Pizzas",
    type: "Vegetarianas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Veggie"
  },
  {
    id: 41,
    name: "Pizza Champiñones",
    description: "Salsa, mozzarella, champiñones y verdeo",
    price: 1750,
    category: "Pizzas",
    type: "Vegetarianas",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Champiñones"
  },
  {
    id: 42,
    name: "Pizza Yankee",
    description: "Salsa, mozzarella, panceta salteada, cheddar y papas fritas",
    price: 1950,
    category: "Pizzas",
    type: "Premium",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Yankee"
  },

  // 🍕 PIZZAS ESPECIALES DE LA CASA
  {
    id: 43,
    name: "Pizza Café Doncar",
    description: "Salsa, mozzarella, 4 burgers, tomate en rodajas, verdeo, 4 huevos fritos, jamón y morrones",
    price: 3500,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Café+Doncar"
  },
  {
    id: 44,
    name: "Pizza Tres Quesos con Jamón",
    description: "Salsa, mozzarella, provolone, roquefort y jamón",
    price: 1850,
    category: "Pizzas",
    type: "Quesos",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Tres+Quesos+Jamón"
  },
  {
    id: 45,
    name: "Pizza Tres Quesos Napolitana",
    description: "Salsa, mozzarella, provolone, roquefort y rodajas de tomate",
    price: 1650,
    category: "Pizzas",
    type: "Quesos",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Tres+Quesos+Napolitana"
  },
  {
    id: 46,
    name: "Pizza Panceta y Verdeo",
    description: "Salsa, mozzarella, panceta salteada, verdeo y aceitunas",
    price: 1750,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Panceta+Verdeo"
  },
  {
    id: 47,
    name: "Pizza Yankee 2",
    description: "Salsa, mozzarella, panceta salteada, papas fritas, ketchup y verdeo",
    price: 1950,
    category: "Pizzas",
    type: "Premium",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Yankee+2"
  },
  {
    id: 48,
    name: "Pizza Panceta y Champiñones",
    description: "Salsa, mozzarella, panceta salteada y champiñones",
    price: 1900,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Panceta+Champiñones"
  },
  {
    id: 49,
    name: "Pizza Don Jorge",
    description: "Salsa, mozzarella, ajo, rodajas de tomate, jamón, morrón, provolone, huevo rallado, aceitunas verdes y negras",
    price: 1950,
    category: "Pizzas",
    type: "Premium",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Don+Jorge"
  },
  {
    id: 50,
    name: "Pizza Tri Color",
    description: "Salsa, mozzarella, huevo rallado, verdeo y tomate",
    price: 1600,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Tri+Color"
  },
  {
    id: 51,
    name: "Pizza Especial con Huevos Fritos",
    description: "Salsa, mozzarella, jamón, morrón y huevos fritos",
    price: 1850,
    category: "Pizzas",
    type: "Especiales",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Especial+Huevos+Fritos"
  },
  {
    id: 52,
    name: "Pizza Pepperoni con Provolone",
    description: "Salsa, mozzarella, pepperoni y provolone",
    price: 1900,
    category: "Pizzas",
    type: "Premium",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Pepperoni+Provolone"
  },
  {
    id: 53,
    name: "Pizza Especial con Provolone",
    description: "Salsa, mozzarella, jamón, morrón y provolone",
    price: 1900,
    category: "Pizzas",
    type: "Premium",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Especial+Provolone"
  },

  // 🥪 SANDWICHES Y GRILLE
  {
    id: 54,
    name: "Sandwich de Pollo 1",
    description: "Cebolla, tomates cherrys caramelizados, mozzarella y mayonesa",
    price: 1000,
    category: "Sandwiches",
    type: "Pollo",
    image: "/placeholder.svg?height=300&width=400&text=Sandwich+Pollo+1"
  },
  {
    id: 55,
    name: "Sandwich de Pollo 2",
    description: "Rúcula, tomate, aros de cebolla morada y mayonesa con ciboulette",
    price: 1000,
    category: "Sandwiches",
    type: "Pollo",
    image: "/placeholder.svg?height=300&width=400&text=Sandwich+Pollo+2"
  },
  {
    id: 56,
    name: "Sandwich de Bondiola de Cerdo",
    description: "Pan, lechuga, tomate, aros de cebolla, bondiola, mozzarella y queso",
    price: 1350,
    category: "Sandwiches",
    type: "Cerdo",
    image: "/placeholder.svg?height=300&width=400&text=Sandwich+Bondiola"
  },
  {
    id: 57,
    name: "Sandwich de Bondiola de Cerdo Agridulce",
    description: "Pan, rúcula, bondiola, ananá caramelizada, cebolla caramelizada, pepinillos y mozzarella",
    price: 1450,
    category: "Sandwiches",
    type: "Cerdo",
    image: "/placeholder.svg?height=300&width=400&text=Sandwich+Bondiola+Agridulce"
  },
  {
    id: 58,
    name: "Pechuga de Pollo",
    description: "Papas fritas a caballo / opcional salsa criolla",
    price: 950,
    category: "Grille",
    type: "Pollo",
    image: "/placeholder.svg?height=300&width=400&text=Pechuga+Pollo"
  },
  {
    id: 59,
    name: "Milanesa de Carne",
    description: "A caballo con papas fritas",
    price: 1000,
    category: "Grille",
    type: "Carne",
    image: "/placeholder.svg?height=300&width=400&text=Milanesa+Carne"
  }
];

export default menuItems;
