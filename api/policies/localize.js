module.exports = function(req, res, next) {

    req.locale=req.param('ln');
    next();

};