class Permissions {
    static permissions = {
        editAdmin: 100,
        deleteAdmin: 101,
        createUser: 102,
        deleteUser: 103
        // Add more permissions here
    };

    static getPermissionCode(permissionName) {
        return Permissions.permissions[permissionName] || null;
    }
}

module.exports = {
    Permissions
};