import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import{ generateId } from "../Utils/generateId.js";
import {saveState, loadState } from "../Utils/LocalStorage.js";
import { Pop} from "../Utils/Pop.js";


function _drawTrips() {
  let trips = ProxyState.trips.sort((a,z)=> a.date - z.date);
  
  
  let template = "";
  trips.forEach((t) => (template += t.Template));
  document.getElementById("trips").innerHTML = template;
}


export class TripsController {
  constructor() {
    console.log("controller up", ProxyState.trips);
  
    ProxyState.on("trips", _drawTrips);
    ProxyState.on('reservations', _drawTrips)
    
    ProxyState.on("trips", saveState);
    ProxyState.on('reservations', saveState)
    
    loadState()
    _drawTrips();
   
    
  }

  async addTrip() {
    window.event.preventDefault();
    console.log("add trip");
    let form = window.event.target;
    let tripData = {
      id: form.id.value || generateId(),
      title: form.title.value,
      date: form.date.value,
      notes: form.notes.value
    
    };
    // type: form.type.value,
    // name: form.name.value,
    // address: form.address.value,
    // conNum: form.conNum.value,
    // price: form.price.value,
    console.log('trip data',tripData);
    tripsService.addTrip(tripData);
  }

  updateTripNote(id){
    let textarea = window.event.target
    tripsService.updateTripNote(textarea.value, id)
  }


  async deleteTrip(id) {
    if(await Pop.confirm("Are you sure you want to delete this trip?")){
    tripsService.deleteTrip(id);
  }
     
  }
}
