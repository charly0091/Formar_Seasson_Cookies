module.exports = (req, res, next) => {
    if (req.cookies.cookieColor && !req.session.userData) {
        res.session.userData = req.cookies.cookieColor;
        res.locals.user = req.session.userData;
    }
    next();
}
