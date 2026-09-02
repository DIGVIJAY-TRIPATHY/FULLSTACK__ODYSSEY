type TeaRecipe = {
    water: number;
    milk: number;
};

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize {
    size: "small" | "medium" | "large";
}

class Chai implements CupSize {
    size: "small" | "medium" | "large" = "large";
}
