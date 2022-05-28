import { Trip } from "./Models/Trip.js";
import { Reservation } from "./Models/Reservation.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = []
  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      title: "Trip to Hawaii",
      
    }),
  ];
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      type: "Hotel",
      name: "marriott",
      date: "12/12/12",
      address: "123 fake st",
      conNum: "123-456-7890",
      price: "$100",
    }),
  ];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
