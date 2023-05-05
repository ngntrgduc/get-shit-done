function getshitdone() {
    if (localStorage.getItem("getshitdone") == "yes") {
        localStorage.setItem("getshitdone", "no");
    } else {
        localStorage.setItem("getshitdone", "yes");
    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getshitdone
    });
});