let fanCount = 0;

let guestList = document.getElementById("guestDiv");
document.getElementById("addGuest").addEventListener("click", addGuest);

function addGuest(event) {
    if(fanCount === 0) {
        guestList.innerHTML = "";
    }

    fanCount += 1;
    console.log("addGuest() called");
    let guestName = document.getElementById("guestName").value;
    let className = "verified-fan";
    if(fanCount % 2 !== 0) {
        className = "verified-fan gray-bg";
    }
    guestList.innerHTML += "<div class='" + className + "'><span class='fan-name'>" + guestName + "</span> is a verified fan!</div>";
    document.getElementById("guestName").value = "";
}