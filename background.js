function getshitdone() {
    if (localStorage.getItem("getshitdone") == "yes") {
        localStorage.setItem("getshitdone", "no");
    } else {
        localStorage.setItem("getshitdone", "yes");
    }
    location.reload() // auto reload, time-saving
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getshitdone
    });
});
