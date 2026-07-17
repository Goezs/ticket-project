export interface EventJSON {
    id: number,
    name: string,
    description: string,
    selling_date: Date,
    start_hour: Date,
    place: string,
    maximum_person_capacity: number,
    category: string,
    author: string
}

export class Event {
    private id: number;
    private _name: string;
    private _description: string;
    private _selling_date: Date;
    private _start_hour: Date;
    private _place: string;
    private _maximum_person_capacity: number;
    private _category: string;
    private _author: string;

    constructor(data: EventJSON
    ){
        this.id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._selling_date = data.selling_date;
        this._start_hour = data.start_hour;
        this._place = data.place;
        this._maximum_person_capacity = data.maximum_person_capacity;
        this._category = data.category;
        this._author = data.author;
    }
    //getter
    //name
    public get name(){
        return this._name;
    }
    // Description
    public get description(){
        return this._description;
    }
    // Selling Date
    public get selling_date(){
        return this._selling_date;
    }
    // Start Hour
    public get start_hour(){
        return this._start_hour;
    }
    //Place
    public get place(){
        return this._place;
    }
    // Maximum Person Capacity
    public get maximum_person_capacity() {
    return this._maximum_person_capacity;
    }
    //Category
    public get category(){
        return this._category;
    }
    //Author
    public get author(){
        return this._author;
    }
    //Read-only
    public get eventId(){
        return this.id;
    }
    //Setter
    // Name
    public set name (newName:string){
        if(newName.trim() === ""){
            throw new Error("The event name cannot be empty");
        }
        this._name = newName;
    }
    // Description
    public set description(newDescription:string){
        if(newDescription.trim() ==="" ){
            throw new Error ("Description cannot be empty");
        }
        this._description = newDescription;
    }

    // Selling date
    public set selling_date(newSellingDate: Date){
        this._selling_date = newSellingDate;
    }

    // Start Hour
    public set start_hour(newStartHour: Date){
        this._start_hour = newStartHour;
    }
    // Place
    public set place(newPlace:string){
        if (newPlace.trim() === ""){
            throw new Error("Place cannot be empty");
        }
        this._place = newPlace;
    }
    // Maximum Person Capacity
    public set maximum_person_capacity(newCapacity: number){
        if (newCapacity <= 0){
            throw new Error("Capacity must be greater than zero");
        }
        this._maximum_person_capacity = newCapacity;
    }
    // Category
    public set category(newCategory: string){
        if (newCategory.trim() === ""){
            throw new Error("Category cannot be empty")
        }
        this._category = newCategory;
    }


}