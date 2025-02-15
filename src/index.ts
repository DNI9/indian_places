import stateMap from "../data/state/map.json";
import districtMap from "../data/district/map.json";
import placeMap from "../data/place/map.json";

class State {
    id = 0
    name = ""
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    get_districts = () => get_districts_by_state(this)
}

class District {
    id = 0
    name = ""
    state = ""
    constructor(id, name, state) {
        this.id = id
        this.name = name
        this.state = state
    }

    get_places = () => get_places_by_district(this)
}

/**
 * It contains severals values of place
 * @member name - Name of the place
 * @member state - State of the place
 * @member district - District of the place
 * @member pin - Pincode of the place
 */
interface Place {
    name:string,
    state:string,
    district:string,
    pin:number
}

/**
 * To get all the states of India
 * @returns {Array<State>} this will return array of State obj
 */
export const get_states = ():State[] => {
    let ret = []
    for (let key in stateMap) {
        ret.push(new State(key, stateMap[key]))
    }

    return ret
}

/**
 * To get all the districts of specified state
 * @param {State} state - State obj
 * @returns {Array<District>} this will return array of District obj
 */
export const get_districts_by_state = (state:State):District[] => {
    let ret = []
    for (let key in districtMap) {
        if (districtMap[key].s == state.id) {
            ret.push(new District(key, districtMap[key].d, stateMap[districtMap[key].s.toString()]))
        }
    }

    return ret
}

/**
 * To get all the places of specified district
 * @param {District} district - District obj
 * @returns {Array<Place>} this will return array of Place obj
 */
export const get_places_by_district = (district:District):Place[] => {
    let ret = []
    for (let pin in placeMap) {
        placeMap[pin].forEach((item) => {
            if (item.d == district.id) {
                ret.push({
                    state: district.state,
                    district: district.name,
                    name: item.p,
                    pin: parseInt(pin)
                })
            }
        })
    }
    return ret
}

/**
 * To get all the places of specified pin
 * @param {number} pincode - pincode of the place
 * @returns {Array<Place>} this will return array of Place obj
 */
export const get_places_by_pin = (pin:number):Place[] => {
    const places:[any] = placeMap.hasOwnProperty(pin.toString()) ? placeMap[pin.toString()] : [];
    let ret:any = []

    places.forEach(item => {
        ret.push({
            state: stateMap[item.s.toString()],
            district: item.d === -1 ? "Not Available" : districtMap[item.d.toString()].d,
            place: item.p
        })
    })

    return ret
}
