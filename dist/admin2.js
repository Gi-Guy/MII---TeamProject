const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'user', permissions: ['read'] },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'admin', permissions: ['read', 'write'] },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user', permissions: [] },
];
function renderUsers() {
    const tbody = document.querySelector("#users-table tbody");
    if (!tbody)
        return;
    tbody.innerHTML = '';
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <select data-userid="${user.id}" class="role-select">
            <option value="user" ${user.role === 'user' ? 'selected' : ''}>User</option>
            <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
            <option value="moderator" ${user.role === 'moderator' ? 'selected' : ''}>Moderator</option>
          </select>
        </td>
        <td>
          <label>
            <input type="checkbox" data-userid="${user.id}" class="perm-read" ${user.permissions.includes('read') ? 'checked' : ''}>
            Read
          </label>
          <label>
            <input type="checkbox" data-userid="${user.id}" class="perm-write" ${user.permissions.includes('write') ? 'checked' : ''}>
            Write
          </label>
        </td>
        <td>
          <button data-userid="${user.id}" class="save-btn">Save</button>
        </td>
      `;
        tbody.appendChild(tr);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderUsers();
    document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const userId = e.currentTarget.dataset.userid;
            if (!userId)
                return;
            const roleSelect = document.querySelector(`select.role-select[data-userid="${userId}"]`);
            const readCheckbox = document.querySelector(`input.perm-read[data-userid="${userId}"]`);
            const writeCheckbox = document.querySelector(`input.perm-write[data-userid="${userId}"]`);
            const user = users.find(u => u.id.toString() === userId);
            if (user) {
                user.role = roleSelect.value;
                user.permissions = [];
                if (readCheckbox.checked)
                    user.permissions.push('read');
                if (writeCheckbox.checked)
                    user.permissions.push('write');
                alert(`Updated ${user.name}:\nRole: ${user.role}\nPermissions: ${user.permissions.join(', ') || 'none'}`);
            }
        });
    });
});
