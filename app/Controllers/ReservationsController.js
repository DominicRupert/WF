import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";
import { generateId } from "../Utils/generateId.js";
import {Pop} from "../Utils/Pop.js";





export class ReservationsController {
  constructor() {
    console.log("controller up", ProxyState.reservations);
  }

  addReservation(tripId) {
    window.event.preventDefault();
    console.log("adding", tripId);
    let form = window.event.target;

    let reservationData = {
      tripId: tripId,
      type: form.type.value,
      name: form.name.value,
      date: form.date.value,
      address: form.address.value,
      conNum: form.conNum.value,
      price: form.price.value,
    };
    console.log(reservationData);
    reservationsService.addReservation(reservationData);
  }

  async deleteReservation(id) {
    if(await Pop.confirm("Are you sure you want to delete this reservation?")){
    reservationsService.deleteReservation(id);
  }
}
}
