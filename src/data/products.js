
import monstera from "../assets/images/monstera.jpg";
import snakePlant from "../assets/images/snake-plant.jpg";
import peaceLily from "../assets/images/peace-lily.jpg";

import rose from "../assets/images/rose.jpg";
import hibiscus from "../assets/images/hibiscus.jpg";
import bougainvillea from "../assets/images/bougainvillea.jpg";

import tomatoSeeds from "../assets/images/tomato-seeds.jpg";
import sunflowerSeeds from "../assets/images/sunflower-seeds.jpg";
import corianderSeeds from "../assets/images/coriander-seeds.jpg";

import ceramicPot from "../assets/images/ceramic-pot.jpg";
import hangingPlanter from "../assets/images/hanging-planter.jpg";
import plasticPlanter from "../assets/images/plastic-planter.jpg";

const products = [
    // Indoor Plants
    {
        id: 1,
        name: "Monstera Deliciosa",
        category: "indoor",
        price: 599,
        rating: 4.8,
        image: monstera,
        description: "A beautiful indoor plant with large split leaves."
    },
    {
        id: 2,
        name: "Snake Plant",
        category: "indoor",
        price: 399,
        rating: 4.7,
        image: snakePlant,
        description: "An easy-care plant for your home or office."
    },
    {
        id: 3,
        name: "Peace Lily",
        category: "indoor",
        price: 499,
        rating: 4.6,
        image: peaceLily,
        description: "A lovely indoor plant with elegant white flowers."
    },

    // Outdoor Plants
    {
        id: 4,
        name: "Rose Plant",
        category: "outdoor",
        price: 299,
        rating: 4.7,
        image: rose,
        description: "A flowering plant that adds beauty to your garden."
    },
    {
        id: 5,
        name: "Hibiscus Plant",
        category: "outdoor",
        price: 249,
        rating: 4.5,
        image: hibiscus,
        description: "A colourful flowering plant for outdoor spaces."
    },
    {
        id: 6,
        name: "Bougainvillea",
        category: "outdoor",
        price: 349,
        rating: 4.8,
        image: bougainvillea,
        description: "A vibrant flowering plant for balconies and gardens."
    },

    // Seeds
    {
        id: 7,
        name: "Tomato Seeds",
        category: "seeds",
        price: 99,
        rating: 4.6,
        image: tomatoSeeds,
        description: "Grow fresh tomatoes in your home garden."
    },
    {
        id: 8,
        name: "Sunflower Seeds",
        category: "seeds",
        price: 79,
        rating: 4.7,
        image: sunflowerSeeds,
        description: "Grow bright sunflowers in your garden."
    },
    {
        id: 9,
        name: "Coriander Seeds",
        category: "seeds",
        price: 49,
        rating: 4.5,
        image: corianderSeeds,
        description: "Grow fresh coriander at home."
    },

    // Pots & Planters
    {
        id: 10,
        name: "Ceramic Plant Pot",
        category: "pots",
        price: 299,
        rating: 4.8,
        image: ceramicPot,
        description: "A stylish ceramic pot for indoor plants."
    },
    {
        id: 11,
        name: "Hanging Planter",
        category: "pots",
        price: 399,
        rating: 4.6,
        image: hangingPlanter,
        description: "A decorative planter for balconies and corners."
    },
    {
        id: 12,
        name: "Plastic Planter",
        category: "pots",
        price: 149,
        rating: 4.4,
        image: plasticPlanter,
        description: "A lightweight planter for everyday gardening."
    }
];

export default products;
