// const {
//     Permissions
// } = require("./permissions");
const authorization = (code) => {
    // return async (req, res, next) => {
    //     const role = req.body.role;
    //     if (roleArray.includes(role)) {
    //         next();
    //     } else {
    //         res.send({
    //             "msg": "not authorized"
    //         });
    //     }
    // }
    return async (req,res,next) => {
        try {
            // const code = 101; // for testing purposes
            const id = req.body.admin_id;
            const user = await UserModel.findOne({
                _id: id
            });

            if (user && (user.permissions.includes(code))) {
                next();
            } else {
                res.status(401).json({
                    message: 'You are not authorized to access this resource'
                });
            }

        } catch (error) {
            res.status(500).json({
                message: 'An error occurred while checking the user role',
                error: error.message
            });
        }
    }
}

// const checkRole = async (res, next) => {
//     try {
//         // const code = 101; // for testing purposes
//         const id = req.body.admin_id;
//         const user = await UserModel.findOne({
//             _id: id
//         });

//         if (user && (user.permissions.includes(code))) {
//             next();
//         } else {
//             res.status(401).json({
//                 message: 'You are not authorized to access this resource'
//             });
//         }

//         // // Array of permission codes
//         // const permissionCodes = user.permissions;

//         // // Verifying each code
//         // for (const code of permissionCodes) {
//         //     let permissionFound = false;

//         //     // Checking if the code exists in the permissions object
//         //     for (const permission in Permissions.permissions) {
//         //         if (Permissions.permissions.hasOwnProperty(permission)) {
//         //             if (Permissions.permissions[permission] === code) {
//         //                 console.log(`Code ${code} is valid for permission ${permission}`);
//         //                 permissionFound = true;
//         //                 break;
//         //             }
//         //         }
//         //     }

//         //     // Code not found in permissions object
//         //     if (!permissionFound) {
//         //         res.status(401).json({
//         //             message: 'You are not authorized to access this resource'
//         //         });
//         //     }
//         //     next();
//         // }


//     } catch (error) {
//         res.status(500).json({
//             message: 'An error occurred while checking the user role',
//             error: error.message
//         });
//     }
// };

module.exports = {
    // checkRole,
    authorization
};