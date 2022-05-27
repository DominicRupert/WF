import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
  constructor(tripData) {
    this.id = tripData.id || generateId();
    this.title = tripData.title;
    this.note = tripData.note
  }

  get Template() {
    return /*html*/ `
       
          <button class="nav-link active" onclick="" aria-current="page">${this.title} <span class="mdi mdi-delete" onclick="app.tripsController.deleteTrip('${this.id}')"> </button>
       
        `;
  }


  get Reservations(){
      let reservations = ProxyState.reservations.filter(r => r.tripId == this.id);
      let template = ''
      reservations.forEach(r => template += r.Template)
      return template
  }
}
