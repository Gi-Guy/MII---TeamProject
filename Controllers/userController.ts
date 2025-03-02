import { User } from "../Models/User";

export class UserController {
    private static users: User[] = [];
    private static admins: User[] = [];

    private static saveUsers(): void{
        const allUser = [...UserController.users, ...UserController.admins];
        localStorage.setItem("users", JSON.stringify(allUser));
    }

    static loadUsers(): void{
        const allUsers = localStorage.getItem("users");
        const userArray = allUsers ? JSON.parse(allUsers) : [];

        UserController.users = userArray.filter((user: User) => !user.isAdmin);
        UserController.admins = userArray.filter((user: User) => user.isAdmin);
    }
    static getUsers(): User[]{
        return UserController.users;
    }
    static getAdmins(): User[]{
        return UserController.admins;
    }
    static getUserByEmail(email: string): User | undefined{
        return [...UserController.users, ...UserController.admins].find((user: User) => user.email === email);
    }
    static addNewUser(name: string, email: string, password: string, isAdmin: boolean): User | null{
        if(!UserController.getUserByEmail(email)){
            const newUser = new User(name, email, password, isAdmin);
            if(isAdmin){
                UserController.admins.push(newUser);
            }else{
                UserController.users.push(newUser);
            }
            UserController.saveUsers();
            return newUser;
        }
        else{
            console.log("User already exists");
            return null;
        }
    }
    static login(email: string, password: string): User | undefined{
        const user = UserController.getUserByEmail(email);
        if(user && user.password === password){
            return user;
        }
        return undefined;
    }
}

