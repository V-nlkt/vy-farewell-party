function showInvitation() {

    const name =
        document
        .getElementById("guestName")
        .value
        .trim();

    if(name === "") {
        alert("Please enter your name.");
        return;
    }

    document
        .getElementById("nameDisplay")
        .innerText = name;

    document
        .getElementById("form-card")
        .classList.add("hidden");

    document
        .getElementById("invite-card")
        .classList.remove("hidden");
}

/* Bubble Effect */

const bubbleContainer =
document.getElementById("bubble-container");

for(let i = 0; i < 50; i++){

    const bubble =
    document.createElement("div");

    bubble.classList.add("bubble");

    const size =
    Math.random() * 60 + 20;

    bubble.style.width =
    size + "px";

    bubble.style.height =
    size + "px";

    bubble.style.left =
    Math.random() * 100 + "vw";

    bubble.style.opacity =
    Math.random() * 0.5 + 0.2;

    bubble.style.animationDuration =
    Math.random() * 8 + 5 + "s";

    bubbleContainer.appendChild(bubble);
}