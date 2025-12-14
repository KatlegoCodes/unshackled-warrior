import { image } from "framer-motion/client"
import project_img1 from "./Hoody-back.jpg";
import project_img2 from "./Hoody-front.jpg";
import project_img3 from "./back-tank.jpg";
import project_img4 from "./shake-bottle.png";

export const assets = {
    project_img1,
    project_img2,
    project_img3,
    project_img4
}

export const projectData = [
    {
        name: "Unshackle-Them Hoody",
        price: "R600",
        category: "Hoodie",
        image: assets.project_img1,
    },
    {
        name: "Unshackled Warrior Hoody",
        price: "R600",
        category: "Hoodie",
        image: assets.project_img2,
    },
    {
        name: "Unshackled Warrior Tank",
        price: "R400",
        category: "Tank",
        image: assets.project_img3,
    },
    {
        name: "Protein Shake bottle",
        price: "R100",
        category: "accessories",
        image: assets.project_img4,
    }
]