const adminMiddleware = (req, res, next) => {
    // Vérifiez si l'utilisateur est authentifié et est un administrateur
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: "Access forbidden. User is not an administrator." });
    }
};

module.exports = adminMiddleware;
