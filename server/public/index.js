$(function () {

    function freeText(results) {
        var $responses = $('#responses');
        var content = '';
        var tpl = '';
        for (var i = 0, l = results.length; i < l; i++) {
            tpl += '<tr>';
            tpl += '<td>' + results[i].uid + '</td>';
            for (var j = 0; j < 9; j++) {
                tpl += '<td>'
                    + results[i].responses[j]
                    + '</td>';
            }
            tpl += '<td><a href="' + results[i].responses[9] + '">Download XML</a></td>';
            tpl += '</tr>';
        }
        $responses.append(tpl);
    }

    // Load current results from server
    $.ajax({
        url: '/results',
        method: 'GET'
    }).done(function (data) {
        // Update charts and tables
        $('#total').html(data.results.length);
        freeText(data.results);
    }).fail(function (err) {
        console.log(err);
        alert('failed to load results data :(');
    });
});