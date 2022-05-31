import { generateId } from "../Utils/generateId.js";

export class Reservation {
  constructor(data) {
    this.id = data.id || generateId();
    this.tripId = data.tripId 
    this.type = data.type;
    this.name = data.name;
    (this.date = new Date( data.date));
    this.address = data.address;
    this.conNum = data.conNum;
    this.price = data.price;
  }

  get Template() {
    return /*html*/ `
    
    <tr class = "text-bg-danger p-0">
     <td scope="row">${this.type}</th>
     <td class="">${this.date.toDateString()}</td>
     <td class="">${this.name}</td>
     <td>${this.address}</td>
     <td>${this.conNum}</td>
     <td>$${this.price}</td>
     <td><span class="mdi mdi-delete"
     onclick="app.reservationsController.deleteReservation('${this.id}')"></span></td>
    </tr>
   
           
  
    
         `;
  }
}
