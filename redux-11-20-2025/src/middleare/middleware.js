const AdminAuthMiddleware = (req, res, next) => {
    const token = "abc";
    const isAuthorized = token == "abc";
    if(!isAuthorized){
        return res.status(401).send("Unuthorized access")
    }else{
        next()
    }
}

const UserAuthMiddleware = (req, res, next) => {
    const token = "usertoken";
    const isAuthorized = token == "usertokennn";
    if(!isAuthorized){
        return res.status(401).send("Unuthorized access")
    }else{
        next()
    }
}

module.exports = {
    AdminAuthMiddleware,
    UserAuthMiddleware
}