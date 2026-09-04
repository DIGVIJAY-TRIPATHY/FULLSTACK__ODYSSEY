const chai = {
    name: "Kadak chai",
    price: 20,
    isHot: true,
};

/* {
    name: string;
    price: number;
    isHot: boolean;
}
 */

let tea : {
    name: string;
    price: number;
    isHot: boolean
};

tea = {
    name: "Ginger tea",
    price: 30,
    isHot: true,
};

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["Ginger", "Cinnamon", "Black Pepper"]
}


//this is duck typing and it is like that if the minimum conditions are satisfied then i dont have any issue
type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup

type Chai ={
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with ", updates);
}

updateChai({price: 25})