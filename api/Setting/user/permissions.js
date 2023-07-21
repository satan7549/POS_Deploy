class Permissions {
    static permissions = {
        createUser: 100,
        updateAdmin: 101,
        viewAdmin: 102,
        deleteUser: 103,
        viewKichen: 104,
        editKichen: 105,
        updateKichen: 106,
        deleteKichen: 107,
        

        // Add more permissions here
    };

    static getPermissionCode(permissionName) {
        return Permissions.permissions[permissionName] || null;
    }
}

module.exports = {
    Permissions
};