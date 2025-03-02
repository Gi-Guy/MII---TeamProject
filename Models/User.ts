export class User {
    id: string = crypto.randomUUID().replaceAll("-", "").slice(-8);
    name: string;
    email: string;
    password: string;
    isAdmin: boolean = false;

    constructor(name: string, email: string, password: string, isAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
export class Login {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

