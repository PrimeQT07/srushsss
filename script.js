document.addEventListener("DOMContentLoaded", () => {

  const messageEl = document.getElementById("message");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const overlay = document.getElementById("overlay");
  const letterGif = document.getElementById("letterGif");
  const letterTitle = document.getElementById("letterTitle");
  const letterText = document.getElementById("letterText");
  const closeBtn = document.getElementById("closeBtn");
  const letters = document.querySelectorAll(".letter");
  const music = document.getElementById("bgMusic");

  const firstMessage = "Hey BOBACATTTTT!!...\n\nI made something for you.\nJust wanted you to feel HAPPPYYYY here.";

  const yesMessage = "HAHA PTA HI THA YESSSSS HI BOLEGI TUUUU.\nHEHE LOVE YOU MASTIKHORR MOSQUITO MERI.\nAlways yourss 😘.";

  const noMessage = "NO)) KYU BOLA RE😌\nKOI BAAT NHI RE IDIOT.\nBut I'm still here.";

  messageEl.innerText = firstMessage;

  yesBtn.onclick = () => {
    messageEl.innerText = yesMessage;
    music.play();
  };

  noBtn.onclick = () => {
    messageEl.innerText = noMessage;
  };

  const data = {
    rose: {
      gif: "rose.gif",
      title: "🌹 Rose Day",
      text: "Every rose reminds me of you re baccha every moment we spent and the memories.\nSoft. Beautiful. Unforgettable."
    },
    propose: {
      gif: "propose.gif",
      title: "💍 Propose Day",
      text: "If I had to choose again and again till 7 janam and jb tk universe zinda h i will choose you only and if i die,\nI'd still choose you."
    },
    chocolate: {
      gif: "chocolate.gif",
      title: "🍫 Chocolate Day",
      text: "Life is sweeter and so sweetest for me\nbecause you exist."
    },
    teddy: {
      gif: "teddy.gif",
      title: "🧸 Teddy Day",
      text: "If I can't hug you rn and im very saddd but,\nlet this teddy do it."
    },
    promise: {
      gif: "promise.gif",
      title: "🤝 Promise Day",
      text: "Not just today but.\nAlways."
    },
    hug: {
      gif: "hug.gif",
      title: "🤗 Hug Day",
      text: "This hug says everything let ussss disssssolve in each other yrrrrr and \nwords sometimes can't."
    },
    kiss: {
      gif: "kiss.gif",
      title: "💋 Kiss Day",
      text: "A soft kiss but i wanna kiss you so badlyyyyyy ahhhhh.\nA forever feeling."
    },
    valentine: {
      gif: "valentine.gif",
      title: "❤️ Valentine’s Day",
      text: "You are my today chummmmissssss mfrom me and gulabi and lal dil.\nAnd all my tomorrows."
    }
  };

  letters.forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.dataset.day;
      const content = data[day];

      letterGif.src = content.gif;
      letterTitle.innerText = content.title;
      letterText.innerText = content.text;

      overlay.style.display = "flex";
    });
  });

  closeBtn.onclick = () => {
    overlay.style.display = "none";
  };

});