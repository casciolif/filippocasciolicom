$(document).ready(function() {

    // Load the cards from the database
    $.get("get-cards.php", function(data) {
      // Loop through the cards and add them to the page
      for (var i = 0; i < data.length; i++) {
        addCard(data[i]);
      }
    });
  
    // Handle the add card form submission
    $("#add-card-form").submit(function(event) {
      event.preventDefault();
      var formData = new FormData(this);
      $.ajax({
        url: "add-card.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
          addCard(data);
          $("#add-card-form")[0].reset();
          $("#add-card-modal").modal("hide");
        }
      });
    });
  
    // Function to add a card to the page
    function addCard(card) {
      var html = `
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="${card.image_url}" alt="${card.name}">
            <div class="card-body">
              <h5 class="card-title">${card.name}</h5>
              <button class="btn btn-primary" data-toggle="modal" data-target="#view-card-modal" data-name="${card.name}" data-image="${card.image_url}">View</button>
            </div>
          </div>
        </div>
      `;
      $("#cards-container").append(html);
    }
  
    // Handle the view card modal show event
    $("#view-card-modal").on("show.bs.modal", function(event) {
      var button = $(event.relatedTarget);
      var name = button.data("name");
      var image = button.data("image");
      var modal = $(this);
      modal.find(".modal-title").text(name);
      modal.find(".modal-body img").attr("src", image);
    });
  
  });
  