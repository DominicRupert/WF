import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";

export class ReservationsController {
  constructor() {
    console.log("controller up", ProxyState.reservations);
  }

  addReservation(tripId) {
    window.event.preventDefault();
    console.log("adding res", tripId);
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

  deleteReservation(id) {
    reservationsService.deleteReservation(id);
  }
}
