function setupPackingList() {

    const saveButton =
        document.querySelector("#savePackingList");

    const message =
        document.querySelector("#packingMessage");

    const checkboxes =
        document.querySelectorAll(
            ".checklist input[type='checkbox']"
        );

    if (!saveButton) {
        return;
    }

    saveButton.addEventListener("click", () => {

        const selectedItems = [];

        checkboxes.forEach((checkbox) => {

            if (checkbox.checked) {
                selectedItems.push(checkbox.value);
            }

        });

        if (selectedItems.length === 0) {

            message.textContent =
                "Please select at least one item before saving.";

            return;
        }

        localStorage.setItem(
            "packingList",
            JSON.stringify(selectedItems)
        );

        message.textContent =
            `${selectedItems.length} packing items have been saved.`;

    });
}

function loadPackingList() {

    const savedItems =
        localStorage.getItem("packingList");

    if (!savedItems) {
        return;
    }

    const items =
        JSON.parse(savedItems);

    const checkboxes =
        document.querySelectorAll(
            ".checklist input[type='checkbox']"
        );

    checkboxes.forEach((checkbox) => {

        if (items.includes(checkbox.value)) {
            checkbox.checked = true;
        }

    });
}
function displayFavoritePark() {

    const savedPark =
        localStorage.getItem("favoritePark");

    const parkElement =
        document.querySelector("#savedPark");

    if (!parkElement) {
        return;
    }

    if (savedPark) {

        parkElement.innerHTML = `
            Your saved favorite park is
            <strong>${savedPark}</strong>.
        `;

    } else {

        parkElement.textContent =
            "You have not saved a favorite park yet.";

    }
}

function setupVisitForm() {

    const form =
        document.querySelector("#visitForm");

    const formMessage =
        document.querySelector("#formMessage");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.querySelector("#visitorName").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const park =
            document.querySelector("#favoritePark").value;

        const date =
            document.querySelector("#visitDate").value;

        const visitors =
            document.querySelector("#visitors").value;

        if (!name || !email || !park || !date || !visitors) {

            formMessage.textContent =
                "Please complete all required fields.";

            return;
        }

        const visitorInformation = {
            name: name,
            email: email,
            park: park,
            date: date,
            visitors: visitors
        };

        localStorage.setItem(
            "visitorInformation",
            JSON.stringify(visitorInformation)
        );

        formMessage.innerHTML = `
            <p>
                Thank you, <strong>${name}</strong>!
                Your trip information for
                <strong>${park}</strong>
                has been saved.
            </p>
        `;

        form.reset();

    });
}

function loadVisitorInformation() {

    const savedInformation =
        localStorage.getItem("visitorInformation");

    if (!savedInformation) {
        return;
    }

    const visitor =
        JSON.parse(savedInformation);

    const formMessage =
        document.querySelector("#formMessage");

    if (!formMessage) {
        return;
    }

    formMessage.innerHTML = `
        <p>
            Welcome back, <strong>${visitor.name}</strong>!
            Your saved park is
            <strong>${visitor.park}</strong>.
        </p>
    `;
}

setupPackingList();

loadPackingList();

displayFavoritePark();

setupVisitForm();

loadVisitorInformation();