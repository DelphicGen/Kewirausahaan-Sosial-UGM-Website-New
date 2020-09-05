export const dateTimeFormat = (date) => {
    
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours() !== 0 && d.getHours().toString(),
        minute = d.getMinutes().toString(),
        second = d.getSeconds().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (d.getHours() !== 0 && hour.length < 2) hour = '0' + hour;
    if (minute.length < 2) minute = '0' + minute;
    if (second.length < 2) second = '0' + second;

    if(hour !== false) return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
    else return [year, month, day].join('-');
}