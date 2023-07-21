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
            create: true,
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
            create: 425,
            view: 426,
            update: 427,
            delete: 428,
        },
        ingredientUnit: {
            create: 429,
            view: 430,
            update: 431,
            delete: 432,
        },
        KOT: {
            create: 433,
            view: 434,
            update: 435,
            delete: 436,
        },
        order: {
            create: 437,
            view: 438,
            update: 439,
            delete: 440,
        },
        outlet: {
            create: 441,
            view: 442,
            update: 443,
            delete: 444,
        },
        payment: {
            create: 445,
            view: 446,
            update: 447,
            delete: 448,
        },
        preFoodMade: {
            create: 449,
            view: 450,
            update: 451,
            delete: 452,
        },
        printer: {
            create: 453,
            view: 454,
            update: 455,
            delete: 456,
        },
        purchase: {
            create: 457,
            view: 458,
            update: 459,
            delete: 460,
        },
        role: {
            create: 461,
            view: 462,
            update: 463,
            delete: 464,
        },
        table: {
            create: 465,
            view: 466,
            update: 467,
            delete: 468,
        },
        tax: {
            create: 469,
            view: 470,
            update: 471,
            delete: 472,
        },
    };

    static getPermissionCode(permissionName) {
        return Permissions.permissions[permissionName] || null;
    }
}

module.exports = {
    Permissions
};