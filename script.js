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

// --- Main Gift Page JS ---
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
    messageBox.textContent = "Only yes is the correct answer 💕";
};

// Show popup
function showGift(gift) {
    letter.style.display = "none";
    flower.style.display = "none";
    hugs.style.display = "none";

    gift.querySelectorAll(".floating-flower").forEach(f => f.remove());
    gift.style.display = "block";

    startFlowers(gift);
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
function createFlower(gift, fromTop = true) {
    const flower = document.createElement("div");
    flower.className = "floating-flower";
    flower.textContent = "🌸";

    flower.style.fontSize = 15 + Math.random() * 25 + "px";
    flower.style.top = fromTop ? "10px" : "calc(100% - 30px)";
    flower.style.left = Math.random() * 90 + "%";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";
    flower.style.animationName = fromTop ? "floatTop" : "floatBottom";

    gift.appendChild(flower);

    setTimeout(() => flower.remove(), (parseFloat(flower.style.animationDuration) * 1000) + 100);
}

function startFlowers(gift) {
    setInterval(() => createFlower(gift, true), 800);   
    setInterval(() => createFlower(gift, false), 1200);
}
