const parks = [
    {
        name: "Kruger National Park",
        location: "Limpopo and Mpumalanga",
        category: "Big Five",
        description: "One of Africa's largest game reserves, famous for its diverse wildlife and safari experiences.",
        image: "images/kruger.webp"
    },
    {
        name: "Addo Elephant National Park",
        location: "Eastern Cape",
        category: "Wildlife",
        description: "A beautiful park famous for its large elephant population and diverse wildlife.",
        image: "images/addo.webp"
    },
    {
        name: "Table Mountain National Park",
        location: "Western Cape",
        category: "Mountain",
        description: "A spectacular park surrounding Cape Town with mountains, hiking trails and ocean views.",
        image: "images/tablemountain.webp"
    }
];


const travelTips = [
    "Carry enough drinking water when exploring the parks.",
    "Keep a safe distance from wild animals and never feed them.",
    "Wear comfortable shoes and sun protection when hiking.",
    "Bring binoculars if you enjoy bird watching.",
    "Check park rules and weather conditions before travelling."
];

function displayFeaturedParks() {

    const parkContainer = document.querySelector("#featuredParks");

    if (!parkContainer) {
        return;
    }

    parkContainer.innerHTML = parks.map((park) => `
        <article class="card">
            <img
                src="${park.image}"
                alt="${park.name}"
                loading="lazy">

            <div class="card-content">
                <h3>${park.name}</h3>

                <p>
                    <strong>Location:</strong>
                    ${park.location}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${park.category}
                </p>

                <p>${park.description}</p>

                <button
                    class="favorite-button"
                    data-park="${park.name}">
                    Save Favorite
                </button>
            </div>
        </article>
    `).join("");

    addFavoriteListeners();
}

function addFavoriteListeners() {

    const favoriteButtons =
        document.querySelectorAll(".favorite-button");

    favoriteButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const parkName = button.dataset.park;

            saveFavoritePark(parkName);

            button.textContent = "Saved ✓";

        });

    });
}


function saveFavoritePark(parkName) {

    localStorage.setItem("favoritePark", parkName);

    alert(`${parkName} has been saved as your favorite park.`);
}

function displayTravelTip() {

    const tipElement =
        document.querySelector("#travelTip");

    if (!tipElement) {
        return;
    }

    const randomNumber =
        Math.floor(Math.random() * travelTips.length);

    tipElement.textContent =
        travelTips[randomNumber];
}

function setupNavigation() {

    const menuButton =
        document.querySelector("#menuButton");

    const navigation =
        document.querySelector("#navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen =
            navigation.classList.contains("open");

        if (isOpen) {
            menuButton.innerHTML = "&times;";
            menuButton.setAttribute("aria-label", "Close navigation");
        } else {
            menuButton.innerHTML = "&#9776;";
            menuButton.setAttribute("aria-label", "Open navigation");
        }

    });
}

function displayFooterInformation() {

    const yearElement =
        document.querySelector("#year");

    const modifiedElement =
        document.querySelector("#lastModified");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

    if (modifiedElement) {
        modifiedElement.textContent =
            `Last Modified: ${document.lastModified}`;
    }
}

displayFeaturedParks();
displayTravelTip();
setupNavigation();
displayFooterInformation();