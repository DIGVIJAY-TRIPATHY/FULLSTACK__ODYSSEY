function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`
    }
    return `Making ${kind} cups of chai`
}

function serverChai(msg? : string){
    if(msg) {
        return `servering ${msg} chai`
    }
    return "servering normal chai"
}
