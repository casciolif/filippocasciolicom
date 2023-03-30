let cardList = [];

// Add the card to the list
function addCard() {
	// Get the form inputs
	let name = document.getElementById("nameInput").value;
	let image = document.getElementById("imageInput").value;
	let rarity = document.getElementById("rarityInput").value;
  
	// Create a new list item
	let listItem = document.createElement("li");
  
	// Create a new image element and set its source to the input value
	let cardImage = document.createElement("img");
	cardImage.src = image;
  
	// Create a new span element and set its text content to the input value
	let cardName = document.createElement("span");
	cardName.textContent = name;
  
	// Create a new span element and set its text content to the input value
	let cardRarity = document.createElement("span");
	cardRarity.textContent = rarity;
  
	// Append the image, name, and rarity elements to the list item
	listItem.appendChild(cardImage);
	listItem.appendChild(cardName);
	listItem.appendChild(cardRarity);
  
	// Append the list item to the card list
	document.getElementById("cardList").appendChild(listItem);
  
	// Clear the form inputs
	document.getElementById("nameInput").value = "";
	document.getElementById("imageInput").value = "";
	document.getElementById("rarityInput").value = "";
  }

function updateCardList() {
    // Get the card list container element
    let cardListContainer = document.getElementById("cardList");

    // Clear the container
    cardListContainer.innerHTML = "";

    // Create a new card element for each card in the list and add it to the container
    cardList.forEach(function(card) {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");

        let cardImg = document.createElement("img");
        cardImg.src = card.imgUrl;
        cardElement.appendChild(cardImg);

        let cardName = document.createElement("h3");
        cardName.innerText = card.name;
        cardElement.appendChild(cardName);

        let cardRarity = document.createElement("p");
        cardRarity.innerText = card.rarity;
        cardElement.appendChild(cardRarity);

        cardListContainer.appendChild(cardElement);
    });
}

// Add an event listener to the "Add Card" link
document.getElementById("addCardLink").addEventListener("click", showAddCard);

// Show the "Add Card" section
function showAddCard() {
  // Hide the "My Cards" section if it's currently visible
  document.getElementById("myCardsSection").style.display = "none";

  // Show the "Add Card" section
  document.getElementById("addCardSection").style.display = "block";

  // Update the active link in the navigation
  document.getElementById("addCardLink").classList.add("active");
  document.getElementById("myCardsLink").classList.remove("active");
}

// Show the "My Cards" section
function showMyCards() {
	// Hide the "Add Card" section if it's currently visible
	document.getElementById("addCardSection").style.display = "none";
  
	// Show the "My Cards" section
	document.getElementById("myCardsSection").style.display = "block";
  
	// Update the active link in the navigation
	document.getElementById("myCardsLink").classList.add("active");
	document.getElementById("addCardLink").classList.remove("active");
  }

function login() {
    // Get the form inputs
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // TODO: Replace this with actual authentication logic
    if (username === "user" && password === "password") {
        // Clear the form inputs
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        // Hide the login modal
        document.getElementById("loginModal").style.display = "none";

        // Show the add card and my cards links
        document.getElementById("addCardLink").style.display = "block";
        document.getElementById("myCardsLink").style.display = "block";

        // Show the logout link
        document.getElementById("logoutLink").style.display = "block";

        // Show the add card section by default
        showAddCard();
    }
}

function logout() {
    // Hide the add card and my cards links
    document.getElementById("addCardLink").style.display = "none";
    document.getElementById("myCardsLink").style.display = "none";

    // Hide the logout link
    document.getElementById("logoutLink").style.display = "none";

    // Show the login modal
    document.getElementById("loginModal").style.display = "block";

    // Hide the add card and my cards sections
    document.getElementById("addCardSection").style.display = "none";
    document.getElementById("myCardsSection").style.display = "none";
}

// Hide the add card and my cards links and logout link initially
document.getElementById("addCardLink").style.display = "none";
document.getElementById("myCardsLink").style.display = "none";
document.getElementById("logoutLink").style.display = "none";