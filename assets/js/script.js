$( document ).ready(function() {

  var date = moment().format();
    $('#today').text(date);
});

var now = moment().get('hour');
    console.log(date.hour);

    var content = $('.content')
    console.log(content);

    content.text("testing");


    $(document).on('click', '.content', function(event)
{
	event.preventDefault();

	if($(this).attr('edit_type') == 'button')
	{
		return false;
	}

	//make div editable
	$(this).closest('div').attr('contenteditable', 'true');
	//add bg css
	$(this).addClass('bg-warning');

	$(this).focus();
});

$(document).on('blur', '.content', function(event) {
    $(this).closest('div').attr('contenteditable', 'false');
    $(this).removeClass('bg-warning');
    // $(this).unfocus();

});