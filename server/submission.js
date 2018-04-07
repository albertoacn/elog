var mongoose = require('mongoose');
var Dropbox = require('dropbox');
var url = '';
// Define response model schema
var SubmissionSchema = new mongoose.Schema({
    timestamp: Number,
    uid: Number,
    responses: [mongoose.Schema.Types.Mixed]
}, { usePushEach: true });

SubmissionSchema.statics.saveSubmission = function (uid, inputData, xmlContent) {
    const submission = new Submission();
    submission.uid = uid;
    // inputData.forEach(function (element) {
    //     submission.responses.push(element);
    // });
    //TO REMOVE
    submission.responses.push(inputData.lfa);
    submission.responses.push(inputData.numDaysSoaked);
    submission.responses.push(inputData.numLobsters);
    submission.responses.push(inputData.numCrabs);
    submission.responses.push(inputData.numSculpins);
    submission.responses.push(inputData.numCunners);
    submission.responses.push(inputData.coordinates);
    //END TO REMOVE

    var timestamp = Date.now();
    submission.timestamp = timestamp;

    var today = new Date();
    var datestr = 1 + today.getUTCMonth() + "/" + today.getUTCDate() + "/" + today.getUTCFullYear();
    submission.responses.push(datestr);

    var mins = today.getUTCMinutes();
    mins = mins < 10 ? "0" + mins : mins;
    var secs = today.getUTCSeconds();
    secs = secs < 10 ? "0" + secs : secs;
    var timestr = today.getUTCHours() + ":" + mins + ":" + secs;
    submission.responses.push(timestr);

    // Upload to dropbox
    uploadToDropbox(timestamp, xmlContent);

    // Save response
    submission.save(function (err) {
        if (err) {
            //TODO
        }
    });

    function uploadToDropbox(timestamp, contents) {
        var dbx = new Dropbox({ accessToken: process.env.DB_TOKEN });
        dbx.filesUpload({ path: '/storage/' + timestamp + '.xml', contents: contents })
            .then(function (response) {
                console.log(response);
                shareDropboxLink(dbx, timestamp);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function shareDropboxLink(dbx, timestamp) {
        dbx.sharingCreateSharedLinkWithSettings({ path: '/storage/' + timestamp + '.xml', settings: {} })
            .then(function (response) {
                var url = response.url.substring(0, response.url.length - 1) + "1";
                submission.responses.push(url);
                submission.save(function (err) {
                    if (err) {
                        // TO DO
                    }
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}


// Export model
delete mongoose.models.Submission
delete mongoose.modelSchemas.Submission
var Submission = mongoose.model('Submission', SubmissionSchema);
module.exports = Submission;
