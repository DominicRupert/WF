import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService {
   async addTrip(tripData) {
       console.log('trip service up', tripData);
       ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
    }
    updateTripNote(tripNote, id) {
        let trip = ProxyState.trips.find(t => t.id === id);
        console.log('updateTrip',tripNote, trip);
        trip.notes = tripNote;
        ProxyState.trips = ProxyState.trips

    }
    deleteTrip(id) {
        console.log('deleting', id);
        ProxyState.trips = ProxyState.trips.filter(t => t.id !== id);
    }

}


export const tripsService = new TripsService()