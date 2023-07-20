const {
    userModel
} = require("./index");

const authorization = (code) => {
    return async (req, res, next) => {
        try {
            // const code = 101; // for testing purposes
            const id = req.body.id;
            // console.log(req.body);
            const user = await userModel.findById({
                _id: id
            });
            console.log(user);
            if (user && (user.permissions.includes(code))) {
                // console.log()
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

module.exports = {
    // checkRole,
    authorization
};