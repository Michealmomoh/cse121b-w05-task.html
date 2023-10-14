
let info = {
    name: "michael momoh",
    photo: "images/placeholder.png",
    favoriteFoods: ["cassava leafe", "breadcake", "Spaghetti"],
    hobbies: ["Play football", "Play maga", "dancing", "Singing"],
    placesLived: [{
            place: "BO-CITY",
            timeLived: 4
        },
        {
            place: "KENEMA",
            timeLived: 7
        },
        {
            place: "FREETOWN",
            timeLived: 5
        },
        {
            place: "MOYAMBA",
            timeLived: 1
        },
    ]
}

/* OUTPUT */

name_out = document.getElementById("name");
name_out.innerHTML = info.name;

photo_out = document.getElementById("photo");
photo_out.setAttribute("src", info.photo);
photo_out.width = 240;
photo_out.height = 300;

foodList = info.favoriteFoods;

for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}


hobbiesList = info.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}

let placesOut = "";
place = info.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.timeLived + " years" + "</dt>";
}

