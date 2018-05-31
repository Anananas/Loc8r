// Home page url
module.exports.homeList = function(req, res, next){
    res.render('locations-list', {title: 'Loc8r'});
};

// Location info url
module.exports.locationInfo = function(req, res, next){
    res.render('location-info', {title: 'Location info'});
};

// Adding new review url
module.exports.addReview = function(req, res, next){
    res.render('location-review-form', {title: 'New review'});
};