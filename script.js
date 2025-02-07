document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const aiSearchBox = document.querySelector(".ai-search-box");
    const nextSection = document.querySelector(".section-3");

    // Create details box
    let detailsBox = document.createElement("div");
    detailsBox.id = "details-box";
    detailsBox.style.display = "none"; // Hide initially
    aiSearchBox.appendChild(detailsBox); // Insert under search box

    // Add clear button inside the search box
    const clearButton = document.createElement("span");
    clearButton.innerHTML = "❌";
    clearButton.id = "clear-button";
    clearButton.style.display = "none"; // Hide by default
    searchInput.parentNode.appendChild(clearButton); // Add next to search input

    // Sample suggestions
    const sampleSuggestions = [
        "Fever", "Headache", "Cold & Flu", "Skin Rash", "Stomach Pain",
        "Cough", "Allergies", "Migraine", "Back Pain", "High Blood Pressure"
    ];

    // Additional details for search terms
    const searchDetails = {
        "Fever": "A fever is a temporary increase in body temperature, often due to an illness. Normal body temperature is about 98.6°F (37°C).",
        "Headache": "Headaches can be caused by stress, dehydration, or underlying medical conditions. If headaches persist, consult a doctor.",
        "Cold & Flu": "Colds and flu are caused by viral infections. Symptoms include cough, sore throat, and body aches. Rest and hydration help recovery.",
        "Skin Rash": "Skin rashes can result from allergies, infections, or conditions like eczema. Seek medical advice if it worsens.",
        "Stomach Pain": "Stomach pain can be caused by indigestion, gas, or infections. Persistent pain requires medical attention.",
        "Cough": "A cough is often a response to irritants in the throat or lungs. It can be caused by colds, flu, or allergies.",
        "Allergies": "Allergies occur when the immune system reacts to substances like pollen, dust, or food. Symptoms include sneezing and itching.",
        "Migraine": "Migraines are severe headaches that may include nausea and sensitivity to light and sound. Triggers vary from stress to food.",
        "Back Pain": "Back pain can result from poor posture, muscle strain, or injury. Stretching and exercise can help.",
        "High Blood Pressure": "Hypertension can lead to heart disease if untreated. It is often managed with lifestyle changes and medication."
    };

    // Show suggestions while typing
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results

        // Show or hide the clear (❌) button
        clearButton.style.display = query ? "inline-block" : "none";

        if (query === "") {
            resetAll();
            return;
        }

        const filteredSuggestions = sampleSuggestions.filter(item => item.toLowerCase().includes(query));

        if (filteredSuggestions.length > 0) {
            searchResults.style.display = "block";
            filteredSuggestions.forEach(suggestion => {
                const p = document.createElement("p");
                p.textContent = suggestion;
                p.addEventListener("click", function () {
                    searchInput.value = suggestion;
                    searchResults.style.display = "none";
                    displayDetails(suggestion);
                });
                searchResults.appendChild(p);
            });
        } else {
            searchResults.style.display = "none";
        }
    });

    // Show final results when Enter is pressed
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            const query = searchInput.value.trim();

            if (query !== "") {
                displayDetails(query);
            }
        }
    });

    // Clear search box and reset everything when clicking ❌ button
    clearButton.addEventListener("click", function () {
        searchInput.value = "";
        resetAll();
    });

    // Display search details & adjust section spacing
    function displayDetails(query) {
        if (searchDetails[query]) {
            detailsBox.innerHTML = `<h2>${query}</h2><p>${searchDetails[query]}</p>`;
            detailsBox.style.display = "block";

            // Adjust padding of the next section
            if (nextSection) {
                nextSection.style.marginTop = `${detailsBox.offsetHeight + 40}px`;
            }
        } else {
            detailsBox.innerHTML = `<h2>${query}</h2><p>No additional information available.</p>`;
            detailsBox.style.display = "block";
        }
    }

    // Reset all elements (suggestions, results, spacing)
    function resetAll() {
        searchResults.style.display = "none";
        detailsBox.style.display = "none";
        clearButton.style.display = "none";
        if (nextSection) {
            nextSection.style.marginTop = "50px"; // Reset spacing
        }
    }
});

window.addEventListener('load', function() {
    // Optional: delay the hiding of the loader to ensure it's visible for a moment
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 1000); // 1000ms = 1 second, adjust as needed
});

function navigateToHospitals() {
    alert("Redirecting to the nearest hospitals...");
}

function callAmbulance() {
    alert("Ambulance service will be contacted.");
}

function showMedications() {
    alert("Displaying the list of medications...");
}

function downloadReport() {
    alert("Downloading medical report...");
}

function shareLocation() {
    alert("Sharing your real-time location...");
}

function getEmergencyGuidance() {
    alert("Providing emergency guidance...");
}

function getFirstAid() {
    alert("Displaying first aid instructions...");
}

function startOperation() {
    alert("Starting virtual temporary operation...");
}

// Placeholder for any future JavaScript functionalities

document.getElementById("sign-in-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simple form validation
    const name = document.getElementById("name").value;
    const bloodGroup = document.getElementById("blood-group").value;
    const mobileNo = document.getElementById("mobile-no").value;
    const email = document.getElementById("email-id").value;

    if (name && bloodGroup && mobileNo && email) {
        alert("Sign In successful!");
    } else {
        alert("Please fill out all fields.");
    }
});