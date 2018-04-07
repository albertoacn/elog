var Submission = require('../submission');

module.exports = function(request, response) {
    Submission.find().limit(100).exec(function(err, docs) {
        if (err) {
            response.status(500).send(err);
        } else {
            response.send({
                results: docs
            });
        }
    });
};