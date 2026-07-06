export class Purchase {
    private id: string;
    private id_ticket: string;
    private _expiration_date: Date;
    private _price: number;

    constructor(id: string, id_ticket: string, expiration_date: Date,
        price: number
     ){
        this.id = id;
        this.id_ticket = id_ticket;
        this._expiration_date = expiration_date;
        this._price = price;
    }

    //Expiration_date
    public get expiration_date(){
        return this._expiration_date;
    }

    public set expiration_date(newExpiration_date: Date){
        //if (!newExpiration_date.includes('@')) {
        //    throw new Error('Invalid email format')
        //}
        this._expiration_date = newExpiration_date;
    }

    //Price
    public get price(){
        return this._price;
    }

    public set price(newPrice: number){
        this._price = newPrice;
    }

    // Read-only id
    get purchaseId(){
        return this.id;
    }

    // Read-only id ticket
    get ticketId(){
        return this.id_ticket;
    }


}