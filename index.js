const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

function createCalendar(elem, year) {
    elem = document.querySelector(elem);
    elem.classList.add("elem");
    let d = new Date(year,0);
    elem.innerHTML = ` <div>${year}</div>`
    let table = `
    <table>
    <tr>
        <th>mon</th>
        <th>tue</th>
        <th>wed</th>
        <th>thu</th>
        <th>fri</th>
        <th>sat</th>
        <th>sun</th>
    </tr>
    <tr>    
    `;
    for (let i = 0; i < 12; i++) {
        let tmp = `<div>${months[i]}</div>` + table;
        for (let i = 0; i < getDay(d); i++) {
			tmp += '<td></td>';
        }
        while (d.getMonth() == i) {
            tmp += '<td>' + d.getDate() + '</td>';
            if(getDay(d) % 7 == 6) {
                tmp += '<tr></tr>'
            }
            d.setDate(d.getDate() + 1);
        }
        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                tmp += '<td></td>';
            }
        }
        tmp += '</tr><table>';
        elem.innerHTML += '<br>' + tmp;
    }
    
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day - 1;
}

createCalendar('body', +prompt('enter year'))