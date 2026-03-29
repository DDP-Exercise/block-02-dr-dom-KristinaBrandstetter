"use strict";
/*******************************************************
 *     profile.js - 10p.
 *
 *     Hi! I am Jimmy, from the marketing department.
 *
 *     From today on, you are the master of objects. Down
 *     below, I did some coding for you. It is perfect.
 *     Do not change it. Please. Ever.
 *
 *     For my code to show it's full potential, I just
 *     need one object. Can you help me out?
 *
 *     Kristina - 2026-03-29
 *******************************************************/

//TODO: Place one object here.

const SAVIOR = {
    name: "Kristina",
    age: 20,
    location: "Ried in der Riedmark",
    hobbies: ["reading", "hiking", "horsebackriding", "procrastinating",],
    type_of_companion: "Horses",
}
SAVIOR.companion = {
    name: "Rapunzel & Milano",
    age: "18 & 13 years",
    breed: "Noriker & Hungarian Warmblood",
    color: "black/brown & white (but usually dirty) ",
    favoriteFood: "literally everything eatable (and sometimes not so eatable) & sugar free treats (isn't allowed to eat sugar)",
    favoriteActivities: "eating and walking & cantering and jumping",
    biggestFears: "has no fears & ghosts",
}
/*******************************************************
 *   DO NOT CHANGE THE CODE BELOW!
 *******************************************************/
let headline = document.createElement("h2");
headline.textContent = "Savior of the day: " + SAVIOR.name;

let intro = document.createElement("p");
intro.innerHTML = "Hi, I am "+SAVIOR.name+". I am "+SAVIOR.age+
    " years old, live in "+SAVIOR.location+" and I am the savior of this Website.<br/> My Hobbies are:";

let hobbylist = document.createElement("ul");
for(const HOBBY of SAVIOR.hobbies){
    let hobbylist_entry = document.createElement("li");
    hobbylist_entry.textContent = HOBBY;
    hobbylist.append(hobbylist_entry);
}

let companion = document.createElement("p");
companion.textContent = "I also do have two "+SAVIOR.type_of_companion+ " as companions."; // Pet, Friend, Sister, Emotional Support Airplane, ... Be creative!
companion.innerHTML = companion.textContent +
    "<br/>I am not nerdy at all, however, i'd like to show you all my "+SAVIOR.type_of_companion+"s attributes as key-value pairs:";
let companion_properties = document.createElement("ul");
for(const KEY in SAVIOR.companion){
    let property = document.createElement("li");
    property.textContent = KEY+": "+SAVIOR.companion[KEY];
    companion_properties.append(property);
}

const heroes_profile = document.createElement("div");
heroes_profile.id="heroes_profile";
heroes_profile.append(headline);
heroes_profile.append(intro);
heroes_profile.append(hobbylist);
heroes_profile.append(companion);
heroes_profile.append(companion_properties);
document.body.append(heroes_profile);