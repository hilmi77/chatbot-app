const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "";

const createChatLi = (message, className) => {
  //create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : ` <span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  //Append the user's message to the chatbox
  chatBox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    //Display "Thinking..." message while  waiting for the response
    chatBox.appendChild(createChatLi("Thinking...", "incoming"));
  }, 600);
  generateResponse();
};

sendChatBtn.addEventListener("click", handleChat);
