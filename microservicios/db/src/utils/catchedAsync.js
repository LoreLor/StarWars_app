module.exports = (fnController) => {
    return function(req, res, next) {
        fnController(req, res).catch((err) => {
            next(err);
        })
    }
}