// About us page url
module.exports.about = function(req, res, next) {
    res.render('generic-text', {title: 'About Loc8r'});
};