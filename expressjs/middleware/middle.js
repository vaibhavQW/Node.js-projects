const sup = (req, res, next) => {
    console.log(res.method)
    console.log("sup");
    next();
};

const how = (req, res, next) => {
    console.log("how you doing")
    next();
}


module.exports = {sup, how}