// Select elements from HTML
let btnToggle = document.querySelector(".btn-toggle");
let messageBox = document.querySelector(".message-box");
let input = document.querySelector(".footer input");
let btnSend = document.querySelector(".footer button");
let all_messages = document.querySelector(".messages");
let audio = document.querySelector("audio")

let myMessages = ["Bonjour", "Je vais bien merci et toi ?"];
let robotMessages = [
  "Bonjour, comment allez-vous ?",
  "Très bien. Quoi de neuf !",
];

// Show and hide chatbot

btnToggle.addEventListener("click", () => {
  messageBox.classList.toggle("d-none");
  if (!messageBox.classList.contains("d-none")) {
    btnToggle.innerHTML = "<i class='bi bi-x-lg'></i>";
    messageBox.classList.remove("animate__slideInDown");
    messageBox.classList.add("animate__animated", "animate__slideInUp");
  } else {
    btnToggle.innerHTML = "<i class='bi bi-chat-right-fill'></i>";
    messageBox.classList.remove("animate__slideInUp");
    messageBox.classList.add("animate__animated", "animate__slideInDown");
  }
});

// Send Message
btnSend.addEventListener("click", () => {
  let flexEnd = document.createElement("div");
  flexEnd.classList.add("flex-end");

  let msg = document.createElement("div");
  msg.classList.add("my-message");

  msg.innerText = input.value;

  flexEnd.append(msg);
  all_messages.append(flexEnd);

  // robot response
  let trouver = false;
  for (let j = 0; j < myMessages.length; j++) {
    if (myMessages[j] === input.value) {
      let flexStart = document.createElement("div");
      flexStart.classList.add("flex-start");

      let robot_msg = document.createElement("div");
      robot_msg.classList.add("robot-message");

      robot_msg.innerText = robotMessages[j];

      flexStart.append(robot_msg);
      setTimeout(()=>{
        audio.play()
        all_messages.append(flexStart);
      }, 1500)
      trouver = true
    } 
  }

  if(trouver == false ){
    alert("Pas trouve")
  }

  input.value = "";
});
