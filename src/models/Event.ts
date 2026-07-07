export class Event {
    private id: string;
    private _name: string;
    private _description: string;
    private _selling_date: string;
    private _start_hour: string;
    private _place: string;
    private _maximum_person_capacity: number;
    private _category: string;
    private _author: string;

    constructor(
        id: string,
        name: string,
        description: string,
        selling_date: string,
        start_hour: string,
        place: string,
        maximum_person_capacity: number,
        category: string,
        author: string
    ){
        this.id = id;
        this._name = name;
        this._description = description;
        this._selling_date = selling_date;
        this._start_hour = start_hour;
        this._place = place;
        this._maximum_person_capacity = maximum_person_capacity;
        this._category = category;
        this._author = author;
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
    // Start Hour
    public set start_hour(newStartHour: string){
        if (newStartHour.trim() === ""){
            throw new Error("Start hour cannot be empty");
        }
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