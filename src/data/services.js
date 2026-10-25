
import plantCare from "../assets/images/plant-care.jpg";
import gardenMaintenance from "../assets/images/garden-maintainence.jpg";
import plantDelivery from "../assets/images/plant-delivery.jpg";
import repotting from "../assets/images/repotting.jpg";

const services = [
    {
        id: 1,
        name: "Plant Care",
        description:
            "Keep your plants healthy with watering, pruning, and regular plant maintenance.",
        price: 299,
        duration: "1 hour",
        rating: 4.8,
        image: plantCare,
    },
    {
        id: 2,
        name: "Garden Maintenance",
        description:
            "Maintain a beautiful garden with lawn care, grass cutting, and weed removal.",
        price: 599,
        duration: "2 hours",
        rating: 4.9,
        image: gardenMaintenance,
    },
    {
        id: 3,
        name: "Plant Delivery",
        description:
            "Get your favourite plants delivered safely to your doorstep.",
        price: 99,
        duration: "Same day",
        rating: 4.7,
        image: plantDelivery,
    },
    {
        id: 4,
        name: "Repotting Service",
        description:
            "Give your plants more room to grow with fresh soil and suitable pots.",
        price: 199,
        duration: "45 minutes",
        rating: 4.8,
        image: repotting,
    },
];

export default services;
