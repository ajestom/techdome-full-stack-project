const Validator = (req, res, next) => {
    if (req.method === "POST") {
        if (req.url === "/signup") {
            if ((req.body.username !== "") && (req.body.email !== "") && (req.body.password !== "")){
                next();
            }else {
                res.send({ Message: "All the fields are not there!" });
            }
        }else {
            next();
        }
    }else {
        next();
    }
};

module.exports = { Validator };