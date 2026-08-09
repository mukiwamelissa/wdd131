const parkData = [
    {
        name: "Kruger National Park",
        location: "Limpopo and Mpumalanga",
        category: "Big Five",
        wildlife: "Lions, elephants, rhinos, leopards and buffaloes",
        activity: "Game drives, hiking and bird watching",
        description: "Kruger National Park is one of South Africa's most famous wildlife destinations. It offers visitors opportunities to see a wide variety of animals in their natural environment.",
        image: "images/kruger.webp"
    },

    {
        name: "Addo Elephant National Park",
        location: "Eastern Cape",
        category: "Wildlife",
        wildlife: "Elephants, lions, rhinos, buffaloes and zebras",
        activity: "Game drives, hiking and wildlife photography",
        description: "Addo Elephant National Park is well known for its large elephant population. The park also protects a variety of other animals and plants.",
        image: "images/addo.webp"
    },

    {
        name: "Table Mountain National Park",
        location: "Western Cape",
        category: "Mountain",
        wildlife: "Baboons, dassies, birds and other wildlife",
        activity: "Hiking, sightseeing and photography",
        description: "Table Mountain National Park surrounds the beautiful Table Mountain area and provides spectacular views of Cape Town and the Atlantic Ocean.",
        image: "images/tablemountain.webp"
    },

    {
        name: "Hluhluwe-iMfolozi Park",
        location: "KwaZulu-Natal",
        category: "Wildlife",
        wildlife: "Rhinos, elephants, lions, leopards and buffaloes",
        activity: "Game drives, bird watching and nature walks",
        description: "Hluhluwe-iMfolozi Park is one of South Africa's oldest protected wildlife areas and is especially important for rhinoceros conservation.",
        image: "images/hluhluwe.webp"
    },

    {
        name: "Garden Route National Park",
        location: "Western and Eastern Cape",
        category: "Coastal",
        wildlife: "Birds, monkeys, antelope and marine life",
        activity: "Hiking, kayaking and sightseeing",
        description: "Garden Route National Park combines forests, rivers, mountains and coastline, making it an excellent destination for outdoor adventures.",
        image: "images/gardenroute.webp"
    },

    {
        name: "Mapungubwe National Park",
        location: "Limpopo",
        category: "Wildlife",
        wildlife: "Elephants, giraffes, zebras and many bird species",
        activity: "Game drives, hiking and cultural sightseeing",
        description: "Mapungubwe National Park combines wildlife conservation with an important archaeological and cultural heritage landscape.",
        image: "images/mapungubwe.webp"
    }
];

function displayParks(parksToDisplay) {

    const parkContainer = document.querySelector("#allParks");
    const noResults = document.querySelector("#noResults");

    if (!parkContainer) {
        return;
    }

    if (parksToDisplay.length === 0) {

        parkContainer.innerHTML = "";

        if (noResults) {
            noResults.style.display = "block";
        }

        return;
    }

    if (noResults) {
        noResults.style.display = "none";
    }

    parkContainer.innerHTML = parksToDisplay.map((park) => `
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

                <p>
                    <strong>Wildlife:</strong>
                    ${park.wildlife}
                </p>

                <p>
                    <strong>Activities:</strong>
                    ${park.activity}
                </p>

                <p>
                    ${park.description}
                </p>

            </div>

        </article>
    `).join("");
}

function filterParks(category) {

    const searchInput = document.querySelector("#searchPark");

    const searchTerm = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filteredParks = parkData.filter((park) => {

        const matchesCategory =
            category === "All" ||
            park.category === category;

        const matchesSearch =
            park.name.toLowerCase().includes(searchTerm) ||
            park.location.toLowerCase().includes(searchTerm) ||
            park.wildlife.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    displayParks(filteredParks);
}

function setupFilterButtons() {

    const buttons =
        document.querySelectorAll(".filter-buttons button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            buttons.forEach((item) => {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            const category =
                button.dataset.category;

            filterParks(category);
        });
    });
}

function setupSearch() {

    const searchInput =
        document.querySelector("#searchPark");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", () => {

        const selectedButton =
            document.querySelector(
                ".filter-buttons .selected"
            );

        const category =
            selectedButton
                ? selectedButton.dataset.category
                : "All";

        filterParks(category);
    });
}

displayParks(parkData);

setupFilterButtons();

setupSearch();