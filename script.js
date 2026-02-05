// 🌸 PASSWORD PROTECTION
const password = "JANUARY16"; // Your monthiversary
const entered = prompt("Enter the secret code for our Valentine 💖:");

if (!entered || entered.toUpperCase() !== password.toUpperCase()) {
    // Wrong or empty password → block access
    alert("Access denied 💔");
    document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Access Denied 💔</h2>";
} else {
    // ✅ Correct password → enable Valentine interactions

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const overlay = document.getElementById("overlay");
    const closeLetter = document.getElementById("closeLetter");
    const messageBox = document.getElementById("messageBox");

    const messages = [
        "Please say yes 🥺",
        "Only yes is the correct answer 😎",
        "I hate rejection 😭",
        "You have no choice 😏",
        "Yes looks better on you 💕"
    ];

    // YES → show love letter overlay
    yesButton.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

    // Close letter + reset No button & message
    closeLetter.addEventListener("click", () => {
        overlay.style.display = "none";

        // Reset No button position
        noButton.style.position = "relative";
        noButton.style.left = "0px";
        noButton.style.top = "0px";

        // Clear the message below buttons
        messageBox.textContent = "";
    });

    // NO → dodge + message below buttons
    noButton.addEventListener("mouseenter", () => {
        const box = document.querySelector(".question-box");
        const boxRect = box.getBoundingClientRect();

        const maxX = boxRect.width - noButton.offsetWidth;
        const maxY = boxRect.height - noButton.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Show a random playful message below buttons
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        messageBox.textContent = randomMsg;
    });
}
