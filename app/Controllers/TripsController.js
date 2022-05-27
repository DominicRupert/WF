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
    let form = window.event.target;
    let tripData = {
      title: form.title.value,
    };
    console.log('trip data',tripData);
    tripsService.addTrip(tripData);
  }


  deleteTrip(id) {
      tripsService.deleteTrip(id)
  }
}
