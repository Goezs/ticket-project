export interface EventJSON {
    id: number,
    name: string,
    description: string,
    sellingDate: Date,
    startHour: Date,
    place: string,
    maximumPersonCapacity: number,
    category: string,
    author: string,
    imageUrl: string
}

export class Event {
    private _id: number;
    private _name: string;
    private _description: string;
    private _sellingDate: Date;
    private _startHour: Date;
    private _place: string;
    private _maximumPersonCapacity: number;
    private _category: string;
    private _author: string;
    private _imageUrl: string;

    constructor(data: EventJSON
    ){
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._sellingDate = data.sellingDate;
        this._startHour = data.startHour;
        this._place = data.place;
        this._maximumPersonCapacity = data.maximumPersonCapacity;
        this._category = data.category;
        this._author = data.author;
        this._imageUrl = data.imageUrl;
    }
    //getter

    //id
    public get id(){
        return this._id;
    }
    //name
    public get name(){
        return this._name;
    }
    // Description
    public get description(){
        return this._description;
    }
    // Selling Date
    public get sellingDate(){
        return this._sellingDate;
    }
    // Start Hour
    public get startHour(){
        return this._startHour;
    }
    //Place
    public get place(){
        return this._place;
    }
    // Maximum Person Capacity
    public get maximumPersonCapacity() {
    return this._maximumPersonCapacity;
    }
    //Category
    public get category(){
        return this._category;
    }
    //Author
    public get author(){
        return this._author;
    }
   //Author
    public get imageUrl(){
        return this._imageUrl;
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
    public set sellingDate(newSellingDate: Date){
        this._sellingDate = newSellingDate;
    }

    // Start Hour
    public set startHour(newStartHour: Date){
        this._startHour = newStartHour;
    }
    // Place
    public set place(newPlace:string){
        if (newPlace.trim() === ""){
            throw new Error("Place cannot be empty");
        }
        this._place = newPlace;
    }
    // Maximum Person Capacity
    public set maximumPersonCapacity(newCapacity: number){
        if (newCapacity <= 0){
            throw new Error("Capacity must be greater than zero");
        }
        this._maximumPersonCapacity = newCapacity;
    }
    // Category
    public set category(newCategory: string){
        if (newCategory.trim() === ""){
            throw new Error("Category cannot be empty")
        }
        this._category = newCategory;
    }

    public set imageUrl(newImageUrl: string){
        if (newImageUrl.trim() === ""){
            throw new Error("url cannot be empty")
        }
        this._imageUrl = newImageUrl;
    }


}