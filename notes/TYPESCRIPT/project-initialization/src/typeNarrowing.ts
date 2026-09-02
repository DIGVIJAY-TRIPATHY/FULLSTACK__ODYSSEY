function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }
    return `Making ${kind} cups of chai`;
}

function serverChai(msg?: string) {
    if (msg) {
        return `servering ${msg} chai`;
    }
    return "servering normal chai";
}

class kulhadChai {
    serve() {
        return "Serving kulhad chai";
    }
}
class cuttingChai {
    serve() {
        return "Serving cutting chai";
    }
}

function serve(chai: kulhadChai | cuttingChai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
    return chai.serve();
}

type chaiOrder = {
    type: string;
    sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar}`;
    }
    return `serving custom chai ${item}`;
}

type MasalaChai = { type: "Masala"; spicelevel: number };
type GingerChai = { type: "Ginger"; amount: number };
type ElaichiChai = { type: "Elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
    switch (order.type) {
        case "Masala":
            return `Masala chai with spice level ${order.spicelevel}`;

        case "Elaichi":
            return `Elaichi chai with aroma ${order.aroma}`;

        case "Ginger":
            return `Ginger chai with ${order.amount} ginger`;
    }
}

console.log(serve(new kulhadChai()));
// Serving kulhad chai

console.log(serve(new cuttingChai()));
// Serving cutting chai

console.log(
    serveOrder({
        type: "Masala",
        sugar: 2
    })
);
// Serving Masala chai with 2 spoons of sugar

console.log(serveOrder("Special chai"));
// Serving custom chai Special chai

console.log(
    makeChai({
        type: "Masala",
        spicelevel: 5
    })
);
// Masala chai with spice level 5