// PASSWORD MODAL
const passwordModal = document.getElementById("passwordModal");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const correctPassword = "january16";

submitPassword.onclick = () => {
    const entered = passwordInput.value.trim().toLowerCase();
    if (entered === correctPassword) {
        passwordModal.style.display = "none";
    } else {
        alert("Wrong code 💔 Try again!");
        passwordInput.value = "";
    }
};

// --- Main Gift Page ---
const title = document.getElementById("mainTitle");
const yesBtn = document.getElementById("yesButton");
const noBtn = document.getElementById("noButton");
const choiceButtons = document.getElementById("choiceButtons");
const messageBox = document.getElementById("messageBox");

const giftButtons = document.getElementById("giftButtons");
const letter = document.getElementById("letterContainer");
const flower = document.getElementById("flowerContainer");
const hugs = document.getElementById("hugsContainer");

// Background music
const bgMusic = new Audio("music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;

// YES CLICK
yesBtn.onclick = () => {
    title.textContent = "My pretty wifey’s gifts & letter 💝";
    choiceButtons.style.display = "none";
    messageBox.textContent = "";
    giftButtons.style.display = "flex";
    bgMusic.play();
};

// NO CLICK
noBtn.onclick = () => {
    messageBox.textContent = "Only yes is accepted 💕";
};

// Show popup
function showGift(gift) {
    letter.style.display = "none";
    flower.style.display = "none";
    hugs.style.display = "none";

    gift.style.display = "block";
}

// OK BUTTON
document.querySelectorAll(".okButton").forEach(btn => {
    btn.onclick = () => {
        letter.style.display = "none";
        flower.style.display = "none";
        hugs.style.display = "none";
    };
});

// Gift button clicks
document.getElementById("giftLetter").onclick = () => showGift(letter);
document.getElementById("giftFlower").onclick = () => showGift(flower);
document.getElementById("giftHugs").onclick = () => showGift(hugs);

// --- Floating flowers ---
const flowerLayer = document.getElementById("flowerLayer");
const maxFlowers = 30;
const activeFlowers = [];

function createFlower() {
    if (activeFlowers.length >= maxFlowers) return;

    const flower = document.createElement("div");
    flower.className = "floating-flower";
    flower.textContent = "🌸";

    flower.style.fontSize = 15 + Math.random() * 25 + "px";
    flower.style.top = Math.random() * 80 + "%";
    flower.style.left = Math.random() * 90 + "%";
    flower.style.transition = "transform 6s linear, opacity 6s linear";

    flowerLayer.appendChild(flower);
    activeFlowers.push(flower);

    requestAnimationFrame(() => {
        flower.style.transform = "translateY(-150px) translateX(100px) rotate(360deg)";
        flower.style.opacity = 0;
    });

    setTimeout(() => {
        flower.remove();
        const index = activeFlowers.indexOf(flower);
        if (index > -1) activeFlowers.splice(index, 1);
    }, 6000);
}

function animateFlowers() {
    createFlower();
    requestAnimationFrame(animateFlowers);
}

// Start flowers once
animateFlowers();
