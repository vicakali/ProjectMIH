// Mock-Daten - später kannst du weitere Profile hinzufügen
const profiles = [
    {
        id: 1,
        name: "Sarah",
        age: 24,
        bio: "Adventure seeker, coffee lover ☕",
        image: "https://via.placeholder.com/400x300?text=Sarah",
        tags: ["Travel", "Photography", "Hiking"],
        info: [
            { label: "Wohnort", value: "Berlin" },
            { label: "Größe", value: "170 cm" },
            { label: "Beruf", value: "Grafikdesignerin" },
            { label: "Sternzeichen", value: "Löwe" },
            { label: "Musik", value: "Indie, Alternative" }
        ]
    }
];

let currentProfileIndex = 0;

// DOM Elemente
const profileCard = document.getElementById("profileCard");
const infoSection = document.getElementById("infoSection");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentProfileSpan = document.getElementById("currentProfile");
const totalProfilesSpan = document.getElementById("totalProfiles");

// Profile rendern
function renderProfile() {
    const profile = profiles[currentProfileIndex];
    
    // Profile Card (Bilder + Basis-Info)
    profileCard.innerHTML = `
        <div class="profile-image">
            <img src="${profile.image}" alt="${profile.name}" onerror="this.src='https://via.placeholder.com/400x300?text=${profile.name}'">
        </div>
        <div class="profile-name">${profile.name}, ${profile.age}</div>
        <div class="profile-bio">${profile.bio}</div>
        <div class="profile-tags">
            ${profile.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
    `;

    // Info Section (scrollbarer Teil)
    infoSection.innerHTML = profile.info
        .map(info => `
            <div class="info-item">
                <div class="info-label">${info.label}</div>
                <div class="info-value">${info.value}</div>
            </div>
        `)
        .join("");

    // Counter aktualisieren
    currentProfileSpan.textContent = currentProfileIndex + 1;
    totalProfilesSpan.textContent = profiles.length;

    // Buttons aktivieren/deaktivieren
    prevBtn.disabled = currentProfileIndex === 0;
    nextBtn.disabled = currentProfileIndex === profiles.length - 1;

    // Scrollposition zurücksetzen
    infoSection.scrollTop = 0;
}

// Navigation
prevBtn.addEventListener("click", () => {
    if (currentProfileIndex > 0) {
        currentProfileIndex--;
        renderProfile();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentProfileIndex < profiles.length - 1) {
        currentProfileIndex++;
        renderProfile();
    }
});

// Initial rendern
renderProfile();
