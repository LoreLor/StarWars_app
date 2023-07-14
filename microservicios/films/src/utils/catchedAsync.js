module.exports = (fnController) => {
    return (req, res, next) => {
        fnController(req, res).catch((err) => {
            next(err)
        })
    }
}
