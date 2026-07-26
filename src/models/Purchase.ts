export class Purchase {
    private _id: number;
    private _id_ticket: string;
    private _expirationDate: Date;
    private _price: number;

    constructor(id: number, id_ticket: string, expirationDate: Date,
        price: number
     ){
        this._id = id;
        this._id_ticket = id_ticket;
        this._expirationDate = expirationDate;
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

    //expirationDate
    public get expirationDate(){
        return this._expirationDate;
    }

    public set expirationDate(newExpirationDate: Date){
        this._expirationDate = newExpirationDate;
    }

    //Price
    public get price(){
        return this._price;
    }

    public set price(newPrice: number){
        this._price = newPrice;
    }

}