  
  var now = moment().format('DD MMM YYYY');
  $('#currentDay').text(now);

  var hourEl = moment().get('hour');

  $(".hour").each(function() {
      var timeIndex = parseInt($(this).attr('value'));
      if (timeIndex < hourEl){
          $(this).addClass( "past" );
      }
      if (timeIndex === hourEl) {
          $(this).addClass( "present" );
      }
      if (timeIndex > hourEl) {
          $(this).addClass( "future" );
      }
  });

  $(".saveBtn").on("click" , function(event) {
    var num = event.currentTarget.id;
    localStorage.setItem("schedInput" + num , $("#block-" + num).text());
  });



  init();

  function init() {
    for (var i = 9; i < 18; i++) {
       $("#block-" + i).text(localStorage.getItem("schedInput" + i));
      }
    };
