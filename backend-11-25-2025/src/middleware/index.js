const UserMiddleware = (req, res, next)=>{
        // console.log("Middleware 1");
        const token = 123;
        const isAuthenticated = token === 123;
        if(!isAuthenticated){
            return res.send("Unauthorized");
        }else{
            next();
        }
    }


const AdminMiddleware = (req, res, next)=>{
        // console.log("Middleware 1");
        const token = 123;
        const isAuthenticated = token === 123;
        if(!isAuthenticated){
            return res.send("Unauthorized");
        }else{
            next();
        }
    }

module.exports = {
    UserMiddleware,
    AdminMiddleware
}
