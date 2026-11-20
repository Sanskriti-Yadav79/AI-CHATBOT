
const messages = document.getElementById("messages");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");

const history = [];


// FUNCTION TO DISPLAY MESSAGE

function addMsg(text, who) {

    const div = document.createElement("div");

    div.classList.add("msg", who);

    div.textContent = text;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;

    return div;
}


// FUNCTION TO GENERATE BOT REPLY

function getBotReply(query) {

    const msg = query.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
        return "Hello! How can I help you today?";
    }

    else if (msg.includes("how are you")) {
        return "I am fine! Thanks for asking. How are you?";
    }

    else if (msg.includes("your name")) {
        return "I am your AI Chatbot.";
    }

    else if (msg.includes("who are you")) {
        return "I am a simple chatbot created using HTML, CSS and JavaScript.";
    }

    else if (msg.includes("javascript")) {
        return "JavaScript is a programming language used to make websites interactive.";
    }

    else if (msg.includes("html")) {
        return "HTML is used to create the structure of web pages.";
    }

    else if (msg.includes("css")) {
        return "CSS is used to style and design web pages.";
    }

    else if (msg.includes("thank")) {
        return "You're welcome! Happy to help.";
    }

    else if (msg.includes("bye")) {
        return "Goodbye! Have a nice day.";
    }

    else {
        return "Sorry, I don't know the answer yet. Try asking something else!";
    }

}


// MAIN SEND MESSAGE FUNCTION

function sendMsg() {

    const query = input.value.trim();

    if (query === "") {
        return;
    }

    addMsg(query, "user");

    history.push({
        role: "user",
        text: query
    });

    input.value = "";

    const reply = getBotReply(query);

    const botMsg = addMsg("Thinking...", "bot");

    setTimeout(function() {

        botMsg.textContent = reply;

        history.push({
            role: "bot",
            text: reply
        });

        messages.scrollTop = messages.scrollHeight;

    }, 500);

}


// SEND BUTTON

sendBtn.addEventListener("click", sendMsg);


// ENTER KEY

input.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {
        sendMsg();
    }

});


// WELCOME MESSAGE

addMsg("Hi! I can help you with basic questions. Ask me anything!", "bot");
