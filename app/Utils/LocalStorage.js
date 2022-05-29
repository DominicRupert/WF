import {ProxyState  } from "../AppState.js";
import { Trip } from "../Models/Trip.js";
import { Reservation } from "../Models/Reservation.js";



export function saveState(){
    console.log('save');
    let data = {
        trips: ProxyState.trips,
        reservations: ProxyState.reservations

    }
    window.localStorage.setItem('wayfinder', JSON.stringify(data));
}



export function loadState(){
    console.log('load');
let data = window.localStorage.getItem('wayfinder');
if (data){
    let parsedData = JSON.parse(data);
    ProxyState.trips = parsedData.trips.map(td => new Trip(td));
    ProxyState.reservations = parsedData.reservations.map(rd => new Reservation(rd));
}
}