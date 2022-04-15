interface iPunto {
    x: number,
    y: number
}
export const objetoConGetterSetter = {
    get data() {
        return {uno: "doble"}
    },
    get formAction() {
        return this.data
    }
}
export const creaiPunto = (objetoLabel: iPunto) => {
    console.log("Vamos a devolver un elemento");
    return objetoLabel;
}

export class CPunto implements iPunto {
    public x: number
    public y: number
    //public punto: CPunto

    public constructor(x: number, y:number) {
        this.x = x
        this.y = y
        //this.punto = this.creaCpunto(6, 8)
    }

    public creaCpunto = (x: number, y:number) => new CPunto(x, y)

}