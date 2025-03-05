import { UserController } from "./userController.js";

document.addEventListener("DOMContentLoaded", () => {
    const usersTableBody = document.querySelector("#users-table tbody") as HTMLTableSectionElement;

    function loadUsers() {
        usersTableBody.innerHTML = "";

        UserController.loadUsers();
        const users = UserController.getUsers();
        
        console.log(users);
        users.forEach((user) => {
            const row = document.createElement("tr");
          
            row.innerHTML = `
                <td><input type="text" class="user-name" data-email="${user.email}" value="${user.name}" /></td>
                <td>${user.email}</td>
                <td>
                    <select class="user-role" data-email="${user.email}">
                        <option value="user" ${user.isAdmin ? "" : "selected"}>User</option>
                        <option value="admin" ${user.isAdmin ? "selected" : ""}>Admin</option>
                    </select>
                </td>
                <td>
                    <input type="checkbox" class="permission-toggle" data-email="${user.email}" ${user.isAdmin ? "checked" : ""}>
                </td>
                <td>
                    <button class="save-user" data-email="${user.email}">Save</button>
                </td>
            `;

            usersTableBody.appendChild(row);
        });

        attachEventListeners();
    }

    function attachEventListeners() {
        document.querySelectorAll(".save-user").forEach((button) => {
            button.addEventListener("click", (event) => {
                const email = (event.target as HTMLButtonElement).dataset.email!;
                const name = (document.querySelector(`.user-name[data-email="${email}"]`) as HTMLInputElement).value;
                const role = (document.querySelector(`.user-role[data-email="${email}"]`) as HTMLSelectElement).value;
                const isAdmin = role === "admin";

                UserController.updateUser(email, name, isAdmin);
                alert("User details updated successfully!");
            });
        });
    }

    loadUsers();
});
