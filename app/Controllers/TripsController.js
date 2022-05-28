import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";

function _drawTrips() {
  let trips = ProxyState.trips;
  let template = "";
  trips.forEach((t) => (template += t.Template));
  document.getElementById("trips").innerHTML = template;
}

export class TripsController {
  constructor() {
    console.log("controller up", ProxyState.trips);
    ProxyState.on("trips", _drawTrips);
    ProxyState.on('reservations', _drawTrips)
    _drawTrips();
  }

  addTrip() {
    window.event.preventDefault();
    console.log("add trip");
    const form = window.event.target;
    const tripData = {
      title: form.title.value,
    
      // type: form.type.value,
      // name: form.name.value,
      // date: form.date.value,
      // address: form.address.value,
      // conNum: form.conNum.value,
      // price: form.price.value,
    };
    console.log('trip data',tripData);
    tripsService.addTrip(tripData);
  }

  updateTripNote(id){
    let textarea = window.event.target
    tripsService.updateTripNote(textarea.value, id)
  }


  deleteTrip(id) {
      tripsService.deleteTrip(id)
  }
}
