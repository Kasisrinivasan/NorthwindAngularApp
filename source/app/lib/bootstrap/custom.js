/* Sharepanel */

$(document).ready(function(){
	$(".open").click(function(){
		$(".sharepanel").slideToggle('1000',"swing");	
	});	
  
  /* Sidebar */
  
  $(".matopen").click(function(){
    $(this).next('.matter').slideToggle('1000',"swing");
  });

});

/* Navigation (Select box) */

// Create the dropdown base
$("<select />").appendTo(".navis");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Menu"
}).appendTo(".navis select");

// Populate dropdown with menu items
$(".navi a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo(".navis select");
});

$(".navis select").change(function() {
  window.location = $(this).find("option:selected").val();
});

/* Drop down navigation */

ddlevelsmenu.setup("ddtopmenubar", "topbar");

/* Moving sidebar below in small screens. */

$('.sidey').clone().appendTo('.mobily');


/* Flex Slider */

    $(window).load(function(){
      $('.flexslider').flexslider({
        easing: "easeInQuart",
        controlNav: false,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
    
/* Isotype */

// cache container
var $container = $('#portfolio');
// initialize isotope
$container.isotope({
  // options...
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

var $containerbig = $('#portfolio-big');
// initialize isotope
$containerbig.isotope({
  // options...
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $containerbig.isotope({ filter: selector });
  return false;
});

/* Pretty Photo */

jQuery(".prettyphoto").prettyPhoto({
overlay_gallery: false, 
social_tools: false
});
