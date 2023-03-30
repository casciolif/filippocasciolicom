$(document).ready(function() {
  getCards();

  $('#add-card-btn').click(function() {
      $('#add-card-modal').css('display', 'block');
  });

  $('.close').click(function() {
      $('#add-card-modal').css('display', 'none');
  });

  $('#add-card-form').submit(function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      $.ajax({
          url: 'add-card.php',
          type: 'POST',
          data: formData,
          processData: false,
          contentType: false,
          success: function() {
              $('#add-card-modal').css('display', 'none');
              getCards();
          }
      });
  });
});

function getCards() {
  $.ajax({
      url: 'get-cards.php',
      type: 'GET',
      success: function(data) {
          $('#card-list').html(data);
      }
  });
}
