const targetNode = document.getElementsByClassName("auHzcc cFc9ae")[0]

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

let lastValue

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type !== "childList") continue

    const listMessages = document.getElementsByClassName("Zc1Emd QIJiHb")
    const lastMessage = listMessages[listMessages.length - 1]

    if(!lastMessage.textContent || lastValue === lastMessage.id) continue

    lastValue = lastMessage.id
    window.open(`https://chatgpt.com/?q=${lastMessage.textContent}`, '_blank');
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);