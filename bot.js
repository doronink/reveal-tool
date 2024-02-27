const API_KEY = "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";


const sendChatBtn1 = document.getElementById("sendBtn1");
const sendChatBtn2 = document.getElementById("sendBtn2");
const sendChatBtn3 = document.getElementById("sendBtn3");

let userMessage1 = "Tell a story about bitcoin";
let userMessage2 = "4+4";
let userMessage3 = "8+8";



const generateResponse1 = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage1}]
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        document.getElementById("answer").innerHTML = data.choices[0].message.content;
    }).catch((error) => {
        document.getElementById("answer").innerHTML = "Oops! Something went wrong. Please try again.";
    })
}

const generateResponse2 = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage2}]
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        document.getElementById("answer").innerHTML = data.choices[0].message.content;
    }).catch((error) => {
        document.getElementById("answer").innerHTML = "Oops! Something went wrong. Please try again.";
    })
}

const generateResponse3 = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage3}]
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        document.getElementById("answer").innerHTML = data.choices[0].message.content;
    }).catch((error) => {
        document.getElementById("answer").innerHTML = "Oops! Something went wrong. Please try again or refresh the page.";
    })
}



const handleChat1 = () => {
    console.log(userMessage1);
    setTimeout(() => {
        document.getElementById("answer").innerHTML = "Thinking...";
        generateResponse1();
    }, 700);
}

const handleChat2 = () => {
    console.log(userMessage2);
    setTimeout(() => {
        document.getElementById("answer").innerHTML = "Thinking...";
        generateResponse2();
    }, 700);
}

const handleChat3 = () => {
    console.log(userMessage3);
    setTimeout(() => {
        document.getElementById("answer").innerHTML = "Thinking...";
        generateResponse3();
    }, 700);
}




sendChatBtn1.addEventListener("click", handleChat1);
sendChatBtn2.addEventListener("click", handleChat2);
sendChatBtn3.addEventListener("click", handleChat3);
