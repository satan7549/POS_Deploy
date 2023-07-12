const checkRole = async ({
    body: {
        admin_id
    }
}, res, next) => {
    try {
        const id = req.body.admin_id;
        const user = await UserModel.findOne({
            _id: id
        });
        const allowedDesignations = ['SuperAdmin', 'Manager', 'Owner'];

        if (user && (allowedDesignations.includes(user.designation)) || (user.designation === 'Manager' && !allowedDesignations.includes(req.body.designation))) {
            next();
        } else {
            res.status(401).json({
                message: 'You are not authorized to access this resource'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while checking the user role',
            error: error.message // Add the actual error message
        });
    }
};

module.exports = {
    checkRole
};