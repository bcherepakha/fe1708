/**
 * Create Alarm
 * @param {Date} alarmTime
 *
 * @returns Promise
 */
function Alarm(alarmTime) {
    return new Promise(function(successHandler, errorHandler) {
        if (Date.now() >= alarmTime.getTime()) {
            errorHandler({
                message: 'Wrong time'
            });
        }

        const timeDiff = alarmTime.getTime() - Date.now();

        setTimeout(successHandler, timeDiff);
    });
}

// const alarm1 = new Alarm(
//     new Date(2019, 8, 28, 11, 44, 30)
// ).then(function() {
//     console.log(new Date());
// });
