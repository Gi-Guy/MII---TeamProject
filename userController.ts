import { User } from "./User.js";

export class UserController {
    private static users: User[] = [];
    private static admins: User[] = [];

    private static saveUsers(): void {
        const allUsers = [...UserController.users, ...UserController.admins];
        localStorage.setItem("users", JSON.stringify(allUsers));
    }

    static loadUsers(): void {
        const allUsers = localStorage.getItem("users");
        const userArray = allUsers ? JSON.parse(allUsers) : [];

        UserController.users = userArray.filter((user: User) => !user.isAdmin);
        UserController.admins = userArray.filter((user: User) => user.isAdmin);
    }

    static getUsers(): User[] {
        return UserController.users;
    }

    static getAdmins(): User[] {
        return UserController.admins;
    }

    static getUserByEmail(email: string): User | undefined {
        return [...UserController.users, ...UserController.admins].find((user: User) => user.email === email);
    }

    static addNewUser(name: string, email: string, password: string, isAdmin: boolean): User | null {
        if (!UserController.getUserByEmail(email)) {
            const newUser = new User(name, email, password, isAdmin);
            if (isAdmin) {
                UserController.admins.push(newUser);
            } else {
                UserController.users.push(newUser);
            }
            UserController.saveUsers();
            console.log("New user added: ", newUser);
            return newUser;
        } else {
            console.log("User already exists");
            return null;
        }
    }

    static login(email: string, password: string): User | undefined {
        const user = UserController.getUserByEmail(email);
        if (user && user.password === password) {
            UserController.setLoggedInUser(user);
            return user;
        }
        return undefined;
    }
    
    static setLoggedInUser(user: User): void {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    }

    static getLoggedInUser(): User | null {
        const userData = localStorage.getItem("loggedInUser");
        return userData ? JSON.parse(userData) : null;
    }

    static logout(): void {
        localStorage.removeItem("loggedInUser");
    }
    static updateUser(email: string, newName: string, isAdmin: boolean): void {
        let users = [...UserController.getUsers(), ...UserController.getAdmins()];
        const user = users.find(user => user.email === email);
    
        if (!user) return;
    
        user.name = newName;
        user.isAdmin = isAdmin;
    
        localStorage.setItem("users", JSON.stringify(users));
    }
}
