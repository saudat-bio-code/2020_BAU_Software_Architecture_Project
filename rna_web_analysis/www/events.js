$(function() {
	$(document).on({
		'shiny:disconnected': function(event) {
			alert('Connection with the internter is lost, sorry!!!\n\n' +
				  'Click OK to come back to GitHub page\n\n' +
				  'If you see this message again, please try relaunching the app after checking your connection, or try to use another PC.\n' +
				  'Contact: sauda98@mail.ru'
			);
			window.location = 'https://github.com/saudat-bio-code/BAU_Software_Architecture_Project'';
		}
	});
});


