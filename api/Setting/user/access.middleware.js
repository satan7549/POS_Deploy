// RBAM permissions
const RBAM = {
    "101": "read",
    "102": "write",
    "103": "update",
    "104": "delete",
};

// Middleware function
const accessControlMiddleware = (req, res, next) => {
    // Assuming the employee's role is available in the request object
    const employeeRole = req.employeeRole;

    // Check if the role has permission for the requested action
    if (employeeRole && RBAM[employeeRole]) {
        // Access granted, proceed to the next middleware or route handler
        next();
    } else {
        // Access denied, send an error response
        res.status(403).json({
            error: "Access denied"
        });
    }
};

module.exports = {
    accessControlMiddleware
}