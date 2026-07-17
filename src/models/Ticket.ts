//// TODO: Replace with enum when the project configuration allows it.
//export enum TicketStatus {
   // NORMAL = "Normal",
   // VIP = "VIP",
    //PALCO = "Palco"
//}

//export enum TicketState {
   // OPEN = "Open",
    //SOLD = "Sold",
    //RESERVED = "Reserved"
//}
export class Ticket {

    private _id: number;
    private _event_id: string;
    private _price: number;
    private _ticket_status: string;
    private _chair: string;
    private _row: string;
    private _column: string;
    private _state: string;
    //constructor
    constructor(
        id: number,
        event_id: string,
        price: number,
        ticket_status: string,
        chair: string,//TicketStatus
        row: string,
        column: string,
        state: string,//TicketState
    ){
        this._id = id;
        this._event_id = event_id;
        this._price = price;
        this._ticket_status = ticket_status;
        this._chair = chair;
        this._row = row;
        this._column = column;
        this._state = state;
    }
    //GETTERS
    //ID
    public get id(){
        return this._id;
    }
    // Event ID
    public get event_id(){
        return this._event_id;
    }
    // Price
    public get price(){
        return this._price;
    }
    // Ticket Status
    public get ticket_status(){
        return this._ticket_status;
    }
    //chair
    public get chair(){
        return this._chair;
    }
    //Row
    public get row() {
    return this._row;
    }
    //Column
    public get column(){
        return this._column;
    }
    //State
    public get state(){
        return this._state;
    }
    public get ticketId() {
    return this.id;
    }
    //SETTERS
    // Price
    public set price (newPrice: number){
        if (newPrice <= 0){
            throw new Error ("Price must be greater than zero");
        }
        this._price = newPrice;
    }
    // Ticket Status
    public set ticket_status(newTicketStatus: string ){
        if(
            newTicketStatus !== "Normal" &&
            newTicketStatus !== "VIP" &&
            newTicketStatus !== "Palco"
        ){
            throw new Error("Invalid ticket status");
        }
        this._ticket_status = newTicketStatus;
        
    }
    // Chair
    public set chair(newChair: string) {
        if (newChair.trim() === "") {
         throw new Error("Chair cannot be empty");
        }
      this._chair = newChair;
   }
   // Row
    public set row(newRow : string){

        if (newRow.trim() === ""){
          throw new Error("Row cannot be empty");

        }
        this._row = newRow;
    }
    // Column
    public set column (newColumn :string){
        if (newColumn.trim() === ""){
            throw new Error("Column cannot be empty");

        }
        this._column = newColumn;
    }
    // State
    public set state (newState :string){
        if(
            newState !== "Open" &&
            newState !== "Sold" &&
            newState !== "Reserved"
        ){
            throw new Error("Invalid ticket state");
        }
        this._state = newState;
        
    }

}






