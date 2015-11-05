$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
	('#cssmenu li').on('click', function(e){
		var $target = $(e.target),
        $currentElement = $(this);
        
		if (!$target.hasClass('sub-link') && !$currentElement.hasClass('active')){
			var $activeElement = $('#cssmenu li.active');
			$activeElement.find('ul').slideUp('normal');
			$activeElement.removeClass('active');
			
			$currentElement.addClass('active');
			$currentElement.find('ul').slideDown('normal');
		}
	}
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});