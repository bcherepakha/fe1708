const alarmForm = document.querySelector('#alarm-container'),
    alarmHoursEl = alarmForm.querySelector('.alarm-hrs'),
    alarmMinsEl = alarmForm.querySelector('.alarm-mins');

// const addHoursOptions = document.createDocumentFragment();

// for (let i=0; i < 24; i++) {
//     const optionEl = document.createElement('option');

//     optionEl.value = i;
//     optionEl.innerText = i.toString().padStart(2, '0');

//     addHoursOptions.append(optionEl);
// }

// alarmHoursEl.append(addHoursOptions);

function creteOptions(start = 0, end = 0) {
    const options = [];

    for (let i=start; i < end; i++) {
        const optionEl = document.createElement('option');

        optionEl.value = i;
        optionEl.innerText = i.toString().padStart(2, '0');

        options.push(optionEl);
    }

    return options;
}

alarmHoursEl.append.apply(alarmHoursEl, creteOptions(0, 24));
alarmMinsEl.append(...creteOptions(0, 60));

alarmForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const hh = alarmHoursEl.value,
        mm = alarmMinsEl.value,
        alarmDate = new Date();

    alarmDate.setHours(hh);
    alarmDate.setMinutes(mm);
    alarmDate.setSeconds(0);
    alarmDate.setMilliseconds(0);

    alarmForm.reset();

    const alarm = new Alarm(alarmDate);

    alarm
        .then(function() {
            alert('Alarm Called');
        })
        .catch(function() {
            alert('Alarm Error');
        });
});
