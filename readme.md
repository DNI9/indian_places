# Indian Places

List of india places including pincode. [Demo](https://epicx67.github.io/indian_places_demo/)

### Installation

    npm i indian_places

## Example

```javascript
const ip = require("indian_places");

// To get the states
const states = ip.get_states();

// To get the district of a state
const west_bengal = states.find((item) => item.name === "West Bengal");
const districts_of_wb = west_bengal.get_districts();

// To get places of a specific district
const north_24_pgs = districts_of_wb.find(
  (item) => item.name === "North 24 parganas"
);
const places = north_24_pgs.get_places();

// To get places by pincode
// This function will return empty array if that pincode doesn't exists
const places = ip.get_places_by_pin(743271);
```

## Functions

To get place data, package contains essential functions which will help you to retrive exact place from mapped data. I described littlebit about object types below.

| func()                   | parameter            | returns                   |
| ------------------------ | -------------------- | ------------------------- |
| get_states()             | None                 | Array of **State** Obj    |
| get_districts_by_state() | **State** - obj      | Array of **District** Obj |
| get_places_by_district() | **District** - obj   | Array of **Place** Obj    |
| get_places_by_pin()      | **pincode** - number | Array of State Obj        |

## Objects

#### State Object

| member          | description                           |
| --------------- | ------------------------------------- |
| name            | State name                            |
| get_districts() | Method to get districts of that state |

#### District Object

| member       | description                           |
| ------------ | ------------------------------------- |
| name         | District name                         |
| state        | State name of that district           |
| get_places() | Method to get places of that district |

#### Place Object

| member   | description                 |
| -------- | --------------------------- |
| name     | Place name                  |
| district | District name of that place |
| state    | State name of that place    |
| pin      | Pincode of that place       |

### At last

> If you like this wrapper package please give this repo a star :)

Credits,
[India gov data portal](https://data.gov.in/)
