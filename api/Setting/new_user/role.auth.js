const checkRole = async (req, res, next) => {
    try {
        const id = req.body.admin_id;
        const user = await UserModel.findOne({
            _id: id
        });

        if (
            user &&
            (user.designation === 'SuperAdmin'|| user.designation === 'Manager' || user.designation === 'Owner' || (user.designation === 'Manager' && req.body.designation !== 'Manager'))
        ) {
            next();
        } else {
            res.status(401).json({
                message: 'You are not authorized to access this resource'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while checking the user role'
        });
    }
};

module.exports = {
    checkRole
};