export class User {
    constructor(name, email, password, isAdmin) {
        this.id = crypto.randomUUID().replaceAll("-", "").slice(-8);
        this.isAdmin = false;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
