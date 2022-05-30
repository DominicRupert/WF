import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { Reservation } from "./Reservation.js";

export class Trip {
  constructor(tripData) {
    this.id = tripData.id || generateId();
    (this.name = tripData.name),
      (this.date = new Date(tripData.date)),
      (this.title = tripData.title);
    this.notes = tripData.notes;
  }

  get Template() {
    return /*html*/ `
    <h2 class=" text-center text-light p-2 " onclick="" >${
      this.title
    }</h2>  <h2 class=" p-2 text-center text-light">Trip date: ${this.date.toDateString()} <span class="mdi mdi-delete"
        onclick="app.tripsController.deleteTrip('${this.id}')"></span></h2>

        <table class="table text-white p-2 " id="collapse${this.id}">
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


            <button active  data-bs-toggle="modal"  data-bs-target="#reservation${
              this.id
            }" id="" class="btn btn-primary p-3 ">Add Reservation</button>
          
            <form class="row"  id="form" onsubmit="app.reservationsController.addReservation('${
              this.id
            }')">
            <div class="modal fade" id="reservation${this.id}">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
           
            <h5 class="modal-title" id="exampleModalLabel">Reservation Form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
            <div class="modal-body">
            <div class="col-md-12">
                        <label for="reservationType" required class="form-label">Type</label>
                        <input type="text" class="form-control" required id="type">
                      </div>
                      <div class="col-md-12">
                        <label for="name" class="form-label">Name of reservation</label>
                        <input type="text" class="form-control" required id="name">
                      </div>
                      <div class="col-md-12">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" required id="address" placeholder="1234 Main St">
                      </div>
                      <div class="col-md-12">
                        <label for="date" class="form-label">date</label>
                        <input type="date" class="form-control" required id="date">
                      </div>
                      <div class="col-md-6">
                        <label for="conNumber" class="form-label">Confirmation Number</label>
                        <input type="text" class="form-control" id="conNum" required placeholder="12345678">
                      </div>
        
                      <div class="col-md-6">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" class="form-control" required id="price">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" >Save changes</button>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </form>
                  
            
            
              
           
        <h3 class="text-center  p-2 text-white">Total: $${this.Total}</h3>

    <div class="form-floating px-0">
    <textarea class="form-control"onblur="app.tripsController.updateTripNote('${
      this.id
    }')" placeholder="Trip Notes Here" id="floatingTextarea" >${
      this.notes
    }</textarea>
    <label for="floatingTextarea">Trip Notes Here</label>
  </div>
      `;
  }
  // onclick="app.reservationsController.addReservation('${this.id}')"
  get Reservations() {
    let reservations =
   
      ProxyState.reservations.filter((r) => r.tripId == this.id).sort((a,z)=> a.date - z.date);

    // console.log('reservations', this.Reservations)
    let template = "";
    reservations.forEach((r) => (template += r.Template));

    return template;
  }

  get Total() {
    let reservations = ProxyState.reservations.filter(
      (r) => r.tripId == this.id
    );
    let subTotal = 0;

    reservations.forEach((r) => (subTotal += parseInt(r.price)));
    return subTotal;
  }
}
