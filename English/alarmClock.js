var alarmClock = {
    onHandler : function(e) {
        chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.5} );
        window.close();
    },

    offHandler : function(e) {
        chrome.alarms.clear("myAlarm");
        window.close();
    },

    setup: function() {
        var alarmOn = document.getElementById('alarmOn');
        alarmOn.addEventListener('click',  alarmClock.onHandler);

        var alarmOff = document.getElementById('alarmOff');
        alarmOff.addEventListener('click',  alarmClock.offHandler);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});