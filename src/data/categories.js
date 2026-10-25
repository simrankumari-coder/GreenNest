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
        link: "/categories/1",
        productCategory: "indoor"
    },
    {
        id: 2,
        name: "Outdoor Plants",
        description: "Make your garden and balcony more beautiful.",
        image: outdoorPlants,
        link: "/categories/2",
        productCategory: "outdoor"
    },
    {
        id: 3,
        name: "Seeds",
        description: "Grow something beautiful from the beginning.",
        image: seeds,
        link: "/categories/3",
        productCategory: "seeds"
    },
    {
        id: 4,
        name: "Pots & Planters",
        description: "Find beautiful pots for your favourite plants and decorate it.",
        image: potsAndPlanters,
        link: "/categories/4",
        productCategory: "pots"
    },
];

export default categories;
