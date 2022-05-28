import { generateId } from "../Utils/generateId.js";

export class Reservation {
  constructor(data) {
    this.id = data.id || generateId();
    this.tripId = data.tripId;
    this.type = data.type;
    this.name = data.name;
    this.date = data.date;
    this.address = data.address;
    this.conNum = data.conNum;
    this.price = data.price;
  }

  get Template() {
    return /*html*/ `
    <div>
    <tr>
     <th scope="row">${this.type}</th>
     <td>${this.date}</td>
     <td>${this.name}</td>
     <td>${this.address}</td>
            </tr>
            </div>
  
    
         `;
  }
}
