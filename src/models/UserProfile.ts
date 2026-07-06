export class UserProfile {
    private id: string;
    private _name: string;
    private _email: string;

    constructor(id: string, name: string, email: string){
        this.id = id;
        this._name = name;
        this._email = email;
    }

    //getter 
    public get email(){
        return this._email;
    }

    // update safely
    public set email(newEmail: string){
        if (!newEmail.includes('@')) {
            throw new Error('Invalid email format')
        }
        this._email = newEmail;
    }

    // Read-only
    get userId(){
        return this.id;
    }
}