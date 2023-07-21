class Permissions {
    static permissions = {
        admin: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        user: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        kitchen: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        area: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        billing: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        company: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        deliveryPartner: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        foodCategory: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        foodCombos: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        foodMenu: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        ingredientCategory: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        ingredientUnit: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        KOT: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        order: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        outlet: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        payment: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        preFoodMade: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        printer: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        purchase: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        role: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        table: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
        tax: {
            create: true,
            view: true,
            update: true,
            delete: true,
        },
    };

    static getPermissionCode(permissionName) {
        return Permissions.permissions[permissionName] || null;
    }
}

module.exports = {
    Permissions
};