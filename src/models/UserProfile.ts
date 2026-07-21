export class UserProfile {
    private _id: number;
    private _name: string;
    private _email: string;
    private _residence: string;
    private _telephone: string;
    private _registerDate: Date;
    private _certifiedUser: boolean;
    private _mean_punctiation: number;

    constructor(id: number, name: string, email: string,
        residence: string, telephone: string, registerDate: Date,
        certifiedUser: boolean, mean_punctiation: number){
        this._id = id;
        this._name = name;
        this._email = email;
        this._residence = residence;
        this._telephone = telephone;
        this._registerDate = registerDate;
        this._certifiedUser = certifiedUser;
        this._mean_punctiation = mean_punctiation;
    }
    // GETTERS and SETTERS

    //id
    public get id(){
        return this._id;
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

    //registerDate
    public get registerDate(){
        return this._registerDate;
    }

    //Certified User
    public get certifiedUser(){
        return this._certifiedUser;
    }

    public set certifiedUser(newCertifiedUser: boolean){
        this._certifiedUser = newCertifiedUser;
    }

    //Mean punctiation
    public get mean_punctuation(){
        return this._mean_punctiation;
    }

    // Read-only
    get userId(){
        return this._id;
    }
}