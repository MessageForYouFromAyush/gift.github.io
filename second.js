// IMAGE ANIMATION PART
const images = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif"];
let imageIndex = 0;
const circleBox = document.getElementById("circle");

function changeImage() {
    circleBox.style.opacity = 0;

    setTimeout(() => {
        circleBox.style.backgroundImage = `url('${images[imageIndex]}')`;
        circleBox.style.opacity = 1;
        imageIndex = (imageIndex + 1) % images.length;
    }, 500);
}

changeImage();
setInterval(changeImage, 3000);

// TYPING TEXT PART
const messages = [
  "Aaj tumhara birthday hai 💖Aur mujhe tumसे कुछ कहना है... थोड़ा emotional, थोड़ा funny 😉",
  "10 July 2006 को एक cute और thodi सी bewakoof सी लड़की का जन्म हुआ था 😅 और आज वो लड़की पूरे 19 साल की हो गई 💖",
  "लेकिन हमारी मुलाकात तो 2023 में हुई 😅💖(थोड़ी देर हो गई... पर timing perfect thi 😄)",
  "अगर तुम Maths में weak ना होती,तो शायद हम कभी मिले ही नहीं 🤣👋",
  "और पता ही नहीं चला...कब हमारी वो छोटी-सी बातों से शुरू हुई दोस्ती 👭इतनी खास बन गई 💖😉",
  "Govt. Arya Degree College की सबसे प्यारी दोस्त – तुम हो Dimple! 💖💖",
  "So... Happy Birthday, my sweet junior! 💙❤️💖Tum hamesha aise hi muskurati raho!",
  "और Thank You 😊मुझे मेरी college life के सबसे अच्छे पलों में से एक देने के लिए 💖💖",
"Bas ek chhoti si baat yaad rakhna 💭 — main hamesha tumhare saath hoon 💪💙Kabhi bhi khud ko akela mat samajhna... – Ayush 😊"
];

const messageBox = document.getElementById("message");
let messageIndex = 0;

function typeMessage(message, callback) {
  messageBox.innerHTML = '';
  let i = 0;

  const typer = setInterval(() => {
    let char = message.charAt(i);
    messageBox.innerHTML += char === ' ' ? '&nbsp;' : char;
    i++;

    if (i >= message.length) {
      clearInterval(typer);
      if (callback) callback();
    }
  }, 80);
}

function playMessages() {
  if (messageIndex < messages.length) {
    typeMessage(messages[messageIndex], () => {
      setTimeout(() => {
        messageIndex++;
        playMessages();
      }, 2000);
    });
  }
}

playMessages();

