class Permissions {
    static permissions = {
        admin: {
            create: 100,
            view: 101,
            update: 102,
            delete: 103,
        },
        user: {
            create: 200,
            view: 201,
            update: 202,
            delete: 203,
        },
        kitchen: {
            create: 300,
            view: 301,
            update: 302,
            delete: 303,
        },
        area: {
            create: 400,
            view: 401,
            update: 402,
            delete: 403,
        },
        billing: {
            create: 500,
            view: 501,
            update: 502,
            delete: 503,
        },
        company: {
            create: 600,
            view: 601,
            update: 602,
            delete: 603,
        },
        deliveryPartner: {
            create: 700,
            view: 701,
            update: 702,
            delete: 703,
        },
        foodCategory: {
            create: 800,
            view: 801,
            update: 802,
            delete: 803,
        },
        foodCombos: {
            create: 900,
            view: 901,
            update: 902,
            delete: 903,
        },
        foodMenu: {
            create: 1000,
            view: 10001,
            update: 1002,
            delete: 424,
        },
        ingredientCategory: {
            create: 1100,
            view: 1101,
            update: 1102,
            delete: 1103,
        },
        ingredientUnit: {
            create: 1200,
            view: 1201,
            update: 1202,
            delete: 1203,
        },
        KOT: {
            create: 1300,
            view: 1301,
            update: 1302,
            delete: 1303,
        },
        order: {
            create: 1400,
            view: 1401,
            update: 1402,
            delete: 1403,
        },
        outlet: {
            create: 1500,
            view: 1501,
            update: 1502,
            delete: 1503,
        },
        payment: {
            create: 1600,
            view: 1601,
            update: 1602,
            delete: 1603,
        },
        preFoodMade: {
            create: 1700,
            view: 1701,
            update: 1702,
            delete: 1703,
        },
        printer: {
            create: 1800,
            view: 1801,
            update: 1802,
            delete: 1803,
        },
        purchase: {
            create: 1900,
            view: 1901,
            update: 1902,
            delete: 1903,
        },
        role: {
            create: 2000,
            view: 2001,
            update: 2002,
            delete: 2003,
        },
        table: {
            create: 2100,
            view: 2101,
            update: 2102,
            delete: 2103,
        },
        tax: {
            create: 2200,
            view: 2201,
            update: 2202,
            delete: 2203,
        },
        ingredients: {
            create: 2300,
            view: 2301,
            update: 2302,
            delete: 2303,
        },
        modifier: {
            create: 2400,
            view: 2401,
            update: 2402,
            delete: 2403,
        }
    };

    static getPermissionCode(permissionName) {
        return Permissions.permissions[permissionName] || null;
    }
}

module.exports = {
    Permissions
};