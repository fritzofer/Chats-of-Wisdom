<?php
/* Template Name: Chat Page */
get_header(); // Include the theme header
?>

<div id="chat-page">
    <div id="chat-container">
        <div id="chat-header" class="chat-header">
            <img id="chat-profile-picture" class="chat-profile-picture" src="https://via.placeholder.com/52" alt="Character">
            <div id="chat-title" class="chat-title">Character Name</div>
			<div id="menu-button" class="menu-button">⋮</div>
			<div id="chat-menu" class="chat-menu">
				<ul>
					<li id="save-chat">Save Chat</li>
					<li id="clear-chat">Clear Chat History</li>
					<li id="download-chat">Download Chat Transcript</li>
					<li id="change-character">Change Character</li>
					<li id="settings">Settings</li>
				</ul>
			</div>
		</div>
        <div id="chat-window" class="chat-window">
            <!-- Chat messages will be appended here -->
        </div>
        <div id="chat-input-container" class="chat-input-container">
            <textarea id="user-input" class="chat-input" placeholder="Type your message here..."></textarea>
            <button id="send-button" class="chat-send-button">Send</button>
        </div>
    </div>
</div>

<?php

