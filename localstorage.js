if (typeof (Storage) !== "undefined") {
    if (localStorage.totalVisits) {
        localStorage.totalVisits = Number(localStorage.totalVisits) + 1;
    } else {
        localStorage.totalVisits = 1;
    }
    document.getElementById("totalVisits").innerHTML = localStorage.totalVisits;

    if (sessionStorage.sessionVisits) {
        sessionStorage.sessionVisits = Number(sessionStorage.sessionVisits) + 1;
    } else {
        sessionStorage.sessionVisits = 1;
    }
    document.getElementById("sessionVisits").innerHTML = sessionStorage.sessionVisits;

} else {
    document.getElementById("totalVisits").innerHTML = "Sorry, your browser does not support web storage...";
    document.getElementById("sessionVisits").innerHTML = "Sorry, your browser does not support web storage...";
}