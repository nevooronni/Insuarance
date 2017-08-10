//custom js file

$(document).ready(function() {
	$("button.btn").click(function(event) {
		var age = parseInt($("input#age").val());
		var gender = $("select#gender").val();

	
		if(age) {
			var quote = (100 - age) * 3;
				if(gender === "male" && age < 26) {
				quote += 50;
				} }else {
						alert("Please Enter Your Age!");
			}

	$("#rate").text(quote);
	$("#quote").show();
	$("#rate").show();

		event.preventDefault();
	});
});