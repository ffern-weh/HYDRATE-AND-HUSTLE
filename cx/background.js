chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "Amour Alert",
            {
                type: "basic",
                iconUrl: "alarm.jpg",
                title: "STAY HYDRATED",
                message: "Keep working hard",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "Drink Water",
        {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}