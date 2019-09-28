const DAYS = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

const MONTHES = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

const clockEl = document.querySelector('#clock');

clockEl.innerText = timeAsText();

function timeAsText() {
    const d = new Date(),
        day = DAYS[d.getDay()],
        date = d.getDate(),
        month = MONTHES[d.getMonth()],
        hh = d.getHours().toString().padStart(2, '0'),
        mm = d.getMinutes().toString().padStart(2, '0'),
        ss = d.getSeconds().toString().padStart(2, '0');

    return `${day}, ${month} ${date}, ${hh}:${mm}:${ss}`;
}

setInterval(() => {
    clockEl.innerText = timeAsText();
}, 1000);
