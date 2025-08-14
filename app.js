setInterval(() => {
    let time = document.getElementById("time");
    let month = document.getElementById("month");
    let week = document.getElementById("week");
    let day = document.getElementById("day");
    let hours = document.getElementById("hours");
    let mint = document.getElementById("mint");
    let sec = document.getElementById("sec");
    let date = new Date();
    let birth = new Date("1947-08-14T23:30:00")
    let defrance = date - birth;
    let totalyear = Math.floor(defrance / (1000 * 60 * 60 * 24 * 365.25));
    let totalmonth = Math.floor(defrance / (1000 * 60 * 60 * 24 * 30.4375));
    let totalweeks = Math.floor(defrance / (1000 * 60 * 60 * 24 * 7));
    let totaldays = Math.floor(defrance / (1000 * 60 * 60 * 24));
    let totalhours = Math.floor(defrance / (1000 * 60 * 60));
    let totalmint = Math.floor(defrance / (1000 * 60));
    let totalsec = Math.floor(defrance / (1000));
    console.log(totalyear)
    time.innerHTML = totalyear;
    month.innerHTML = totalmonth;
    week.innerHTML = totalweeks;
    day.innerHTML = totaldays;
    hours.innerHTML = totalhours;
    mint.innerHTML = totalmint;
    sec.innerHTML = totalsec;
    if (totalmint == 41024651) {
        alert(`yes!`)
    }
}, 1000);
