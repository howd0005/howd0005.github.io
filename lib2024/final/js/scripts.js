window.onload = init;

function init() {
	$('#form').submit(function (e) {
		e.preventDefault();
		$("#results").removeClass('reveal');
   		 var form = this;
   		 $(".edit-profile").fadeIn(1000, function(){
   		 		showformValues(form);
   		 		$('.edit-profile').delay(500).fadeOut(500);
   		 		$("#results").addClass('reveal');
   		 })
	});

}

function showformValues(form){
	var formValues = $(form).serializeArray(); 
	$.each(formValues, function(index, field){
		$("#results").find("#"+field.name+"_result").text(field.value);
		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	})				
}

function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}