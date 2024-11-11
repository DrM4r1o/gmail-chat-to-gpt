
# Gmail Chat to ChatGPT Script 💬

This README explains a script that listens to incoming messages in a Gmail chat, captures them, and sends each new message to ChatGPT as a query using a Chrome extension. With minimal setup, this script helps automate sending your Gmail chat messages to ChatGPT to generate responses or analyses.

## How It Works

The script:
1. **Monitors Gmail Chat** for new messages.
2. **Captures each new message** and sends it as a query to ChatGPT by opening a new tab.
3. Uses the [Prompt ChatGPT via URL Parameters](https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb) Chrome extension, which allows ChatGPT to receive queries through URL parameters.

## Setup Instructions

1. **Install the Chrome Extension**: First, install the [Prompt ChatGPT via URL Parameters](https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb) Chrome extension. This extension allows you to send a message to ChatGPT by opening a URL with the message as a query parameter.

2. **Update Script for Your Chat Interface**:
   - **Find and replace the chat message container**: Gmail chat messages are housed within specific `<div>` elements. The classes for these elements can vary by chat interface.
   - **Locate the parent div containing all chat messages**:
     ```javascript
     const targetNode = document.getElementsByClassName("YOUR_CHAT_CONTAINER_CLASS")[0];
     ```
   - **Identify individual message divs** (all chat messages should share the same class):
     ```javascript
     const listMessages = document.getElementsByClassName("YOUR_MESSAGE_CLASS");
     ```

3. **Paste the Script into Your Console**:

4. **Replace Placeholders**: Replace `YOUR_CHAT_CONTAINER_CLASS` with the class name of the `<div>` that contains all chat messages, and `YOUR_MESSAGE_CLASS` with the class name shared by each individual message.

## Usage

Once the script is set up and running:
- Each new message you receive in Gmail chat will automatically open ChatGPT in a new tab with the message text as the query.
  
## Notes

- This script assumes each message has a unique ID. If a message does not have an ID, modify the script to detect new messages by a different method.
- Be cautious with continuous use, as repeated automatic openings of new tabs can quickly clutter your browser.

> [!WARNING]
> To use this script properly, **you must allow pop-ups** in your browser.  
> The script opens a new tab with each new message to send it to ChatGPT, so make sure that your browser is set to **allow pop-ups** for the site you're using.


  

