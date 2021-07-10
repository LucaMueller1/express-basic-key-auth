const authService = require("../services/AuthenticationService")

async function intercept(req, res, next) {
    if(!req.header("Authorization")) {
        res.status(401).send("Authorization header required");
    } else {
        if(authService.introspect(req.header("Authorization"))) {   //token still valid/active
            next();
        } else {
            res.status(401).send("Authorization failed");
        }
    }
};

module.exports.intercept = intercept;