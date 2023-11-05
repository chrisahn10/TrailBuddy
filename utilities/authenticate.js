// Middleware function to check if user is logged in

const withAuth = (req, res, next) => {
    debugger;
    // If the user is not logged in, redirect the user to the login page
    console.log(req.session.loggedIn);
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;