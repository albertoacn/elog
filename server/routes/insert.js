var Submission = require('../submission');

module.exports = function(request, response) {
    var uid = request.body.uid;
    var responses = request.body.responses;
    var xml= request.body.xml;
    Submission.saveSubmission(uid, responses, xml);
};
