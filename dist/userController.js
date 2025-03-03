import { User } from "./User.js";
let UserController = /** @class */ (() => {
    class UserController {
        static saveUsers() {
            const allUser = [...UserController.users, ...UserController.admins];
            localStorage.setItem("users", JSON.stringify(allUser));
        }
        static loadUsers() {
            const allUsers = localStorage.getItem("users");
            const userArray = allUsers ? JSON.parse(allUsers) : [];
            UserController.users = userArray.filter((user) => !user.isAdmin);
            UserController.admins = userArray.filter((user) => user.isAdmin);
        }
        static getUsers() {
            return UserController.users;
        }
        static getAdmins() {
            return UserController.admins;
        }
        static getUserByEmail(email) {
            return [...UserController.users, ...UserController.admins].find((user) => user.email === email);
        }
        static addNewUser(name, email, password, isAdmin) {
            if (!UserController.getUserByEmail(email)) {
                const newUser = new User(name, email, password, isAdmin);
                if (isAdmin) {
                    UserController.admins.push(newUser);
                }
                else {
                    UserController.users.push(newUser);
                }
                UserController.saveUsers();
                console.log("New user added: ", newUser);
                return newUser;
            }
            else {
                console.log("User already exists");
                return null;
            }
        }
        static login(email, password) {
            const user = UserController.getUserByEmail(email);
            if (user && user.password === password) {
                return user;
            }
            return undefined;
        }
    }
    UserController.users = [];
    UserController.admins = [];
    return UserController;
})();
export { UserController };
