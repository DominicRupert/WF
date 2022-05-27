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
         <div class="col border py-4 border-1">${this.type}</div>
         <div class="col border py-4 border-1">${this.name}</div>
         <div class="col border py-4 border-1">${this.conNum}</div>
         <div class="col border py-4 border-1">${this.date}</div>
         <div class="col border py-4 border-1">${this.price}</div>
         `;
  }
}