$( document ).ready(function() {

  var date = moment().format();
    $('#today').text(date);
});

var now = moment().get('hour');
    console.log(date.hour);