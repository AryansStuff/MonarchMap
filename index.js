"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
exports.__esModule = true;
// Initialize and add the map

function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru
    });



    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
window.initMap = initMap;

async function fetchText(zipcode) {
    let response = await fetch("https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=" + zipcode + "&key=17o8dysaCDrgv1c", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://www.freemaptools.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});
    let data = await response.text();
    console.log(data);
    return data
}

value = fetchText(78733);