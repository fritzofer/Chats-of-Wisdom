document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatTitle = document.getElementById('chat-title');
    const profilePicture = document.getElementById('profile-picture');

    // Auto-expanding textarea event listener
    userInput.addEventListener('input', function() {
        this.style.height = 'auto'; // Reset height to auto
        this.style.height = (this.scrollHeight) + 'px'; // Set new height based on content
    });

    // "Enter" key to send message event listener
    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent default newline behavior
            sendButton.click(); // Trigger the send button click event
        }
    });

    sendButton.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message) {
            console.log('Sending message:', message); // Log message to be sent
            displayMessage(message, 'user');
            sendMessageToBot(message);
            userInput.value = ''; // Clear input
            userInput.style.height = 'auto'; // Reset height after clearing
        } else {
            console.log('Empty message, not sending.'); // Log if message is empty
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the latest message
    }

    function sendMessageToBot(message) {
        const apiUrl = chatConfig.apiUrl + 'predictions';
        const selectedCharacter = chatTitle.textContent;
        const promptTemplate = `<s>[INST] Answer as if you are ${selectedCharacter}. Answer briefly.\n\n${message}[/INST]`;

        console.log('API URL:', apiUrl); // Log API URL
        console.log('Prompt Template:', promptTemplate); // Log prompt template

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
    input: {
        top_k: 50,
        top_p: 0.95,
        prompt: message,
        max_tokens: 512,
        temperature: 0.7,
        system_prompt: promptTemplate,
        length_penalty: 1,
        max_new_tokens: 512,
        stop_sequences: "<|end_of_text|>,<|eot_id|>",  // converted to a comma-separated string
        prompt_template: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\n{system_prompt}<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
        presence_penalty: 0,
        log_performance_metrics: false
    }
}),
        })
        .then(response => {
            console.log('Response Status:', response.status); // Log response status
            return response.json();
        })
        .then(data => {
            console.log('API Response Data:', data); // Log API response data
            if (data.id) {
                // Retrieve the prediction result after a delay
                setTimeout(() => {
                    fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ predictionId: data.id }),
                    })
                    .then(response => {
                        console.log('Second Fetch Response Status:', response.status); // Log second fetch response status
                        return response.json();
                    })
                    .then(result => {
                        console.log('Prediction Result:', result); // Log prediction result
                        if (result.output) {
                            const botMessage = result.output.join('');
                            displayMessage(botMessage, 'bot');
                        } else {
                            displayMessage('Error: Output is missing', 'error');
                        }
                    })
                    .catch(error => {
                        console.error('Second Fetch Error:', error); // Log second fetch error
                        displayMessage('Error: ' + error.message, 'error');
                    });
                }, 5500); // Adjust delay as needed
            } else {
                displayMessage('Error: ' + data.message, 'error');
            }
        })
        .catch(error => {
            console.error('Initial Fetch Error:', error); // Log initial fetch error
            displayMessage('Error: ' + error.message, 'error');
        });
    }

    function loadChatConfig() {
        fetch('/wp-json/myapi/v1/chat-bot-config')
            .then(response => response.json())
            .then(data => {
                console.log('Chat Config Data:', data); // Log chat config data
                chatTitle.textContent = data.characterName;
                // profilePicture.src = data.chatBotUrl // Set the corresponding image
            })
            .catch(error => {
                console.error('Chat Config Fetch Error:', error); // Log chat config fetch error
            });
    }

    loadChatConfig();
});


document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const chatMenu = document.getElementById('chat-menu');

    menuButton.addEventListener('click', function() {
        chatMenu.style.display = chatMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Event listener to close the menu if clicked outside
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !chatMenu.contains(event.target)) {
            chatMenu.style.display = 'none';
        }
    });

    // Event listeners for menu options
    document.getElementById('save-chat').addEventListener('click', function() {
        console.log('Saving chat...');
        // Your save chat logic here
    });

    document.getElementById('clear-chat').addEventListener('click', function() {
        console.log('Clearing chat history...');
        // Clear chat logic here
    });

    document.getElementById('download-chat').addEventListener('click', function() {
        console.log('Downloading chat transcript...');
        // Download chat logic here
    });

    document.getElementById('change-character').addEventListener('click', function() {
        console.log('Changing character...');
        // Change character logic here
    });

    document.getElementById('settings').addEventListener('click', function() {
        console.log('Opening settings...');
        // Settings logic here
    });
});