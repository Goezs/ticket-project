export class UserProfile {
    private id: string;
    private _name: string;
    private _email: string;
    private _residence: string;
    private _telephone: string;
    private _register_date: Date;
    private _certified_user: boolean;
    private _mean_punctiation: number;

    constructor(id: string, name: string, email: string,
        residence: string, telephone: string, register_date: Date,
        certified_user: boolean, mean_punctiation: number){
        this.id = id;
        this._name = name;
        this._email = email;
        this._residence = residence;
        this._telephone = telephone;
        this._register_date = register_date;
        this._certified_user = certified_user;
        this._mean_punctiation = mean_punctiation;
    }

    //name
    public get name(){
        return this._name;
    }

    public set name(newName: string){
        this._email = newName;
    }

    //email
    public get email(){
        return this._email;
    }

    public set email(newEmail: string){
        if (!newEmail.includes('@')) {
            throw new Error('Invalid email format')
        }
        this._email = newEmail;
    }

    //Residence
    public get residence(){
        return this._residence;
    }

    public set residence(newResidence: string){
        if (!newResidence.includes('#')) {
            throw new Error('Invalid residence format')
        }
        this._residence = newResidence;
    }

    //Telephone
    public get telephone(){
        return this._telephone;
    }

    public set telephone(newTelephone: string){
        if (!newTelephone.includes('#')) {
            throw new Error('Invalid telephone format')
        }
        this._telephone = newTelephone;
    }

    //Register_date
    public get register_date(){
        return this._register_date;
    }

    //Certified User
    public get certified_user(){
        return this._certified_user;
    }

    public set certified_user(newCertified_user: boolean){
        this._certified_user = newCertified_user;
    }

    //Mean punctiation
    public get mean_punctuation(){
        return this._mean_punctiation;
    }

    // Read-only
    get userId(){
        return this.id;
    }
}