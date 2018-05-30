// About us page url
module.exports.about = function(req, res, next) {
    res.render('index', {title: 'About Loc8r'});
};