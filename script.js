// --- PASSWORD MODAL ---
const passwordModal = document.getElementById("passwordModal");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const correctPassword = "january16";

submitPassword.onclick = () => {
    const entered = passwordInput.value.trim().toLowerCase();
    if (entered === correctPassword) {
        // Fade out modal
        passwordModal.style.transition = "opacity 0.5s ease";
        passwordModal.style.opacity = "0";
        setTimeout(() => passwordModal.style.display = "none", 500);
    } else {
        alert("Wrong code 💔 Try again!");
        passwordInput.value = "";
    }
};

// --- MAIN PAGE LOGIC ---
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

// --- GIFT POPUPS ---
function showGift(gift) {
    [letter, flower, hugs].forEach(g => {
        g.style.opacity = 0;
        g.style.display = "none";
    });

    gift.style.display = "block";
    setTimeout(() => {
        gift.style.transition = "opacity 0.5s ease";
        gift.style.opacity = 1;
    }, 50);
}

// OK BUTTON
document.querySelectorAll(".okButton").forEach(btn => {
    btn.onclick = () => {
        [letter, flower, hugs].forEach(g => {
            g.style.transition = "opacity 0.5s ease";
            g.style.opacity = 0;
            setTimeout(() => g.style.display = "none", 500);
        });
    };
});

// Gift button clicks
document.getElementById("giftLetter").onclick = () => showGift(letter);
document.getElementById("giftFlower").onclick = () => showGift(flower);
document.getElementById("giftHugs").onclick = () => showGift(hugs);

// --- FLOATING FLOWERS ---
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
    flower.style.opacity = 0;
    flower.style.transition = "transform 8s linear, opacity 8s linear";

    flowerLayer.appendChild(flower);
    activeFlowers.push(flower);

    // Animate
    requestAnimationFrame(() => {
        flower.style.transform = `translateY(-200px) translateX(${20 + Math.random() * 80}px) rotate(${Math.random()*360}deg)`;
        flower.style.opacity = 1;
    });

    setTimeout(() => {
        flower.style.opacity = 0;
        setTimeout(() => {
            flower.remove();
            const index = activeFlowers.indexOf(flower);
            if (index > -1) activeFlowers.splice(index, 1);
        }, 500);
    }, 7000);
}

// Animate continuously
function animateFlowers() {
    createFlower();
    requestAnimationFrame(animateFlowers);
}

animateFlowers();

// --- BUTTON HOVER PULSE ---
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.boxShadow = "0 0 15px #ff85b3, 0 0 30px #ff4da6";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.boxShadow = "";
    });
});
