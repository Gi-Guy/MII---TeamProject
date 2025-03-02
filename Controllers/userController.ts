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
}

