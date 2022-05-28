import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
  constructor(tripData) {
    this.id = tripData.id || generateId();
    this.title = tripData.title;
    this.note = tripData.note;
  }
  get Reservations() {
    let reservations = ProxyState.reservations.filter(
      (r) => r.tripId == this.id
    );
    // console.log('reservations', this.Reservations)
    let template = "";
    reservations.forEach((r) => (template += r.Template));
    return template;
  }

  get Template() {
    console.log("reservation", this.Reservations);
    return /*html*/ `
    <div class="row">
    <ul class="list-group list-group-horizontal">
   
    <li class="list-group-item" onclick="" aria-current="page">${this.title} <span class="mdi mdi-delete"
        onclick="app.tripsController.deleteTrip('${this.id}')"></span></li>


    <form onsubmit="app.tripsController.addTrip()">

      <div class="modal fade" id="newtrip" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Trip entry</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Trip Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="title"
                  placeholder="What do you want your trip to be called?" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </ul>
      <table class="table text-white">
      <thead>
      <tr>
      <th scope="col">type</th>
      <th scope="col">date</th>
      <th scope="col">name</th>
      <th scope="col">address</th>
      <th scope="col">confirmation number</th>
      <th scope="col">price</th>
      </tr>
      </thead>
      <tbody>
      ${this.Reservations}

    </tbody>
  </table>
  <button class="btn btn-primary">Add Reservation</button>
  </form>
   </div>
  
      `;
  }
}
