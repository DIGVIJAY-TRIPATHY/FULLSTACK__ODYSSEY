function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("Masala", 2)



//this function never returns anything so we use "void"
function logChai(): void{
    console.log("Chai is ready");
}