import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService {
    addTrip(tripData) {
       console.log('trip service up', tripData);
       ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
    }
    deleteTrip(id) {
        console.log('deleting', id);
        ProxyState.trips = ProxyState.trips.filter(t => t.id !== id);
    }

}


export const tripsService = new TripsService()