import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { Reservation } from "./Reservation.js";

export class Trip {
  constructor(tripData) {
    this.id = tripData.id || generateId();
    this.title = tripData.title;
    this.note = tripData.note;
  }
 
  get Template() {
    return /*html*/ `
   
    

    <h5 class="display-5 text-bg-light" onclick="" aria-current="page">${this.title} <span class="mdi mdi-delete"
        onclick="app.tripsController.deleteTrip('${this.id}')"></span></h5>


    
  


  
    
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
            <tbody class="text-bg-danger">
          
            ${this.Reservations}
            
        </tbody>
   
        </table>
      
      
          </div>
        </div>
        <button data-bs-toggle="modal" data-bs-target="#reservation"  class="btn btn-primary">Add Reservation</button>
        <div class=" modal fade" id="reservation">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
          
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  
</form>
  
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        
    <textarea placeholder="Trip notes here..." name="" id="" cols="60" rows="5"></textarea>


     
      `;
    }
    // onclick="app.reservationsController.addReservation('${this.id}')"
    get Reservations() {
      let reservations = ProxyState.reservations.filter(
        (r) => r.tripId == this.id
      );
      // console.log('reservations', this.Reservations)
      let template = "";
      reservations.forEach((r) => (template += r.Template));
      
      return template;
    }
}
