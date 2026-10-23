import indoorPlants from "../assets/images/indoor-plants.jpg"
import outdoorPlants from "../assets/images/outdoor-plants.jpg"
import seeds from "../assets/images/seeds.jpg"
import potsAndPlanters from "../assets/images/pots-planters.jpg"
const categories = [
    {
        id: 1,
        name: "Indoor Plants",
        description: "Bring freshness and natural beauty into your home.",
        image: indoorPlants,
        link: "/categories/indoor-plants",
    },
    {
        id: 2,
        name: "Outdoor Plants",
        description: "Make your garden and balcony more beautiful.",
        image: outdoorPlants,
        link: "/categories/outdoor-plants",
    },
    {
        id: 3,
        name: "Seeds",
        description: "Grow something beautiful from the beginning.",
        image: seeds,
        link: "/categories/seeds",
    },
    {
        id: 4,
        name: "Pots & Planters",
        description: "Find beautiful pots for your favourite plants and decorate it.",
        image: potsAndPlanters,
        link: "/categories/pots-planters",
    },
];

export default categories;
