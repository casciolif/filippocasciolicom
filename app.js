$(document).ready(function() {
	// Load all cards from the database
	$.ajax({
		url: 'get-cards.php',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			// Loop through the cards and add them to the cards-container
			$.each(data, function(index, card) {
				var cardHtml = '<div class="card">' +
							   '<h2>' + card.name + '</h2>' +
							   '</div>';

				$('.cards-container').append(cardHtml);
			});
		},
		error: function() {
			alert('Unable to load cards.');
		}
	});

	// Show the add-card-form when the Add a New Card button is clicked
	$('#add-card-btn').click(function() {
		$('#add-card-form').show();
	});

	// Hide the add-card-form when the Add Card button is clicked
	$('#submit-card-btn').click(function() {
		$('#add-card-form').hide();

		// Get the card name from the input field
		var cardName = $('#card-name').val();

		// Add the new card to the database
		$.ajax({
			url: 'add-card.php',
			type: 'POST',
			data: { name: cardName },
			success: function(data) {
				// Reload the page to show the new card in the list
				location.reload();
			},
			error: function() {
				alert('Unable to add card.');
			}
		});
	});
});
