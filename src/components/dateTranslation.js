/* translation from date format */

const days = ['Вс,', 'Пн,', 'Вт,', 'Ср,', 'Чт,', 'Пт,', 'Сб,']
const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

export let getDate = (dt) => {
    let day = dt.getDay(); //days[day]
    let numberDay = dt.getDate();
    let month = dt.getMonth(); //months[month]
    return days[day] + ' ' + numberDay + ' ' + months[month]
}

export let getHours = (hour) => {
    let hours = hour.getHours();
    return hours + ':00'
}