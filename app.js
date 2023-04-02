// Get the cards from the server
function getCards() {
    fetch('get-cards.php')
      .then(response => response.json())
      .then(cards => {
        // Remove existing cards from the list
        const cardList = document.getElementById('card-list');
        cardList.innerHTML = '';
  
        // Add each card to the list
        cards.forEach(card => {
          const cardItem = document.createElement('div');
          cardItem.classList.add('card-item');
  
          const cardImage = document.createElement('img');
          cardImage.classList.add('card-image');
          cardImage.src = card.image_url;
  
          const cardName = document.createElement('p');
          cardName.classList.add('card-name');
          cardName.textContent = card.name;
  
          cardItem.appendChild(cardImage);
          cardItem.appendChild(cardName);
          cardList.appendChild(cardItem);
        });
      })
      .catch(error => console.error(error));
  }
  
  // Handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
  
    // Create a new card object
    const card = {
      name: formData.get('name'),
      image_file: formData.get('image_file')
    };
  
    // Submit the card data to the server
    fetch('add-card.php', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Clear the form and update the card list
        event.target.reset();
        getCards();
      })
      .catch(error => console.error(error));
  }
  
  // Add event listeners
  document.addEventListener('DOMContentLoaded', getCards);
  const form = document.getElementById('add-card-form');
  form.addEventListener('submit', handleFormSubmit);
  