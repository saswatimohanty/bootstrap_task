$(document).ready(function(){
	$('form').submit(function(e) {
		firstName = $('#firstName').val();
		lastName = $('#lastName').val();
		nameBoundary = /^[a-zA-Z]+$/;
		isValid = true;
		$('#firstNameError').html('');
		
		if (!firstName.match(nameBoundary) || $.trim(firstName).length <= 5) {
			$('#firstNameError').html("*First Name should be more than 5 characters and Alphabets only");
			$('#firstName').focus();
			isValid = false;
			console.log("error ")
		}
			
		if (!lastName.match(nameBoundary) || $.trim(lastName).length == 0) {
			$('#lastNameError').html("*Last Name should not be empty and Alphabets only");
			$('#lastName').focus();
			isValid = false;
		}
		if(!isValid){
			alert('*Form not Submitted');
			$('#error').html("*Form not Submitted. Enter fields again");
			e.preventDefault();
		}
	});
});
