$(document).ready(function() {
    // Load cards from database on page load
    loadCards();
  
    // Handle "Add New Card" button click event
    $('#add-card-btn').click(function() {
      // Prompt user for card details
      var name = prompt('Enter the name of the card:');
      var imageUrl = prompt('Enter the image URL of the card:');
  
      // Add card to database and display on page
      addNewCard(name, imageUrl);
    });
  });
  
  function loadCards() {
    // Send AJAX request to server to get cards from database
    $.ajax({
      url: 'get-cards.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        // Loop through returned cards and display them on the page
        for (var i = 0; i < data.length; i++) {
          var card = data[i];
          $('.cards').append('<div class="card"><h2>' + card.name + '</h2><img src="' + card.image_url + '"></div>');
        }
      }
    });
  }
  
  function addNewCard(name, imageUrl) {
    // Send AJAX request to server to add card to database
    $.ajax({
      url: 'add-card.php',
      type: 'POST',
      data: { name: name, image_url: imageUrl },
      dataType: 'json',
      success: function(data) {
        // Add new card to page
        $('.cards').append('<div class="card"><h2>' + name + '</h2><img src="' + imageUrl + '"></div>');
      }
    });
  }
  