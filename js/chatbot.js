document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const appendMessage = (sender, message) => {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');
        
        const messageBubble = document.createElement('p');
        messageBubble.textContent = message;
        messageWrapper.appendChild(messageBubble);

        chatContainer.appendChild(messageWrapper);

        // Animate message appearance
        gsap.from(messageWrapper, { duration: 0.5, opacity: 0, y: 20, ease: 'power3.out' });

        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    const getBotResponse = (userMessage) => {
        // This is where you would integrate the Gemini API call.
        // For now, we'll use a placeholder response.
        console.log(`User asked: ${userMessage}`);
        return "Thank you for your question! While I'm not yet connected to the live Gemini API, I'm designed to help you with complex topics. Soon, you'll be able to ask me anything from calculus to chemistry!";
    };

    const handleUserMessage = () => {
        const message = userInput.value.trim();
        if (message) {
            appendMessage('user', message);
            userInput.value = '';
            userInput.disabled = true;
            sendButton.disabled = true;

            // Simulate bot thinking
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                appendMessage('bot', botResponse);
                userInput.disabled = false;
                sendButton.disabled = false;
                userInput.focus();
            }, 1200);
        }
    };

    sendButton.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleUserMessage();
        }
    });

    // Initial bot message on load
    setTimeout(() => {
        appendMessage('bot', 'Hello! I am the BPSM Study Bot. How can I help you learn today?');
    }, 1000);
});