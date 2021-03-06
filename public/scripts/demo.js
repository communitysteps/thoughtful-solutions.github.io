$(document).ready(function () {
	// Wrap content
	WrapContent();

    // Cloud animation
    animateCloud();
});

function animateCloud(){
    $("#cloud").animate({ 'left': '900px' }, 180000, 'linear', function() {
        $(this).css('left', '-66px');
        animateCloud();
    });
}

function WrapContent(){
	// Capture the current content
	var content = $("body").html();
	
	// Create the outer most wrapper
	var wrap =  $("<div id='wrapper'></div>");
	
	
		
	// Create the content wrap, add the content, and then add the whole thing to the outer wrapper
	var contentWrap = $("<div id='content-wrap'></div>");
	contentWrap.append(content);
	wrap.append(contentWrap);
	
	// Replace the current content with the wrapped content
	$("body").html(wrap);
}

/*
Inserts GA using DOM insertion of <script> tag and "script onload" method to
initialize the pageTracker object. Prevents GA insertion from blocking I/O!

As suggested in Steve Souder's talk. See:

http://google-code-updates.blogspot.com/2009/03/steve-souders-lifes-too-short-write.html

*/

/* acct is GA account number, i.e. "UA-5555555-1" */
function gaSSDSLoad (acct) {
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."),
      pageTracker,
      s;
  s = document.createElement('script');
  s.src = gaJsHost + 'google-analytics.com/ga.js';
  s.type = 'text/javascript';
  s.onloadDone = false;
  function init () {
    pageTracker = _gat._getTracker(acct);
    pageTracker._trackPageview();
  }
  s.onload = function () {
    s.onloadDone = true;
    init();
  };
  s.onreadystatechange = function() {
    if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
      s.onloadDone = true;
      init();
    }
  };
  document.getElementsByTagName('head')[0].appendChild(s);
}

/* and run it */
gaSSDSLoad("UA-9606082-1");