export class Purchase {
    private _id: number;
    private _id_ticket: string;
    private _expiration_date: Date;
    private _price: number;

    constructor(id: number, id_ticket: string, expiration_date: Date,
        price: number
     ){
        this._id = id;
        this._id_ticket = id_ticket;
        this._expiration_date = expiration_date;
        this._price = price;
    }
    // GETTERS and SETTERS

    // Read-only id
    get purchaseId(){
        return this._id;
    }

    // Read-only id ticket
    get ticketId(){
        return this._id_ticket;
    }

    //Expiration_date
    public get expiration_date(){
        return this._expiration_date;
    }

    public set expiration_date(newExpiration_date: Date){
        this._expiration_date = newExpiration_date;
    }

    //Price
    public get price(){
        return this._price;
    }

    public set price(newPrice: number){
        this._price = newPrice;
    }

}