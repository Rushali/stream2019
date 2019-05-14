var presentations, timeout;

var offset = 0;


function showCurrent() {

    var timezone_intl = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timezone_intl = timezone_intl ? timezone_intl : 'America/New_York';

     var now = moment().tz(timezone_intl);

    var now = moment().tz(timezone_intl);

     var _presentations = presentations.map(function(p) {
        return {
            date: moment(p.date).add(offset, 'minutes'),
            person: p.person,
            project: p.project
        };
    });

     var current = _presentations.filter(function(p) {
         var start = p.date;
         var end = moment(start).add(12, 'minutes');
        return now.isBetween(start, end);
    })[0];

    if (current) {

        $('#current-presenter').html(current.person);
        $('#current-project').html('"' + current.project + '"');
    } else {
        $('#current-presenter').html('no one at the moment!');
        $('#current-project').html('');
    }

     next = _presentations.filter(function(p) {
        return p.date.isAfter(now);
    })[0];

    if (next) {
        $('#next-presenter').html(next.person + ' (starting ' + next.date.fromNow() + ')');
        $('#next-project').html('"'+next.project+'"');
    } else {
        $('#next-presenter').html('No one!');
        $('#next-project').html('');
    }

    clearTimeout(timeout);
    timeout = setTimeout(showCurrent, 2000);
}

function getData() {

    $.getJSON('https://rushali.github.io/stream2019/2019presenters.json', function(data) { // 
        // $.getJSON('presenters.json', function(data) {
        data = data.map(function(d) {
            d.date = moment(d.date).tz('America/New_York');
            return d;
        });
        data = data.sort(function(a, b) {
            return a.date.isBefore(b.date) ? -1 : 1;
        });

        presentations = data;

        showCurrent()
    });
}

getData();
