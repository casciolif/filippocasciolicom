let cardList = [];

function addCard() {
    // Get the form inputs
    let name = document.getElementById("name").value;
    let rarity = document.getElementById("rarity").value;
    let imgUrl = document.getElementById("imgUrl").value;

    // Create a new card object
    let card = {
        name: name,
        rarity: rarity,
        imgUrl: imgUrl
    };

    // Add the card to the list and update the display
    cardList.push(card);
    updateCardList();
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

function showAddCard() {
    // Hide the my cards section
    document.getElementById("myCardsSection").style.display = "none";

    // Show the add card section
    document.getElementById("addCardSection").style.display = "block";
}

function showMyCards() {
    // Hide the add card section
    document.getElementById("addCardSection").style.display = "none";

    // Show the my cards section
    document.getElementById("myCardsSection").style.display = "block";

    // Update the card list display
    updateCardList();
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