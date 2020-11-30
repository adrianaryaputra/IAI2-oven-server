- [Measurement Data Recording](#measurement-data-recording)
      - [🔗 URL :  `/APIv[version?]/measurement`](#-url---apivversionmeasurement)
  - [Retrieve Measurement Data](#retrieve-measurement-data)
    - [🔎 Parameter](#-parameter)
    - [📥 Response](#-response)
  - [Add a New Measurement Data](#add-a-new-measurement-data)
    - [📚 Data Structure](#-data-structure)
    - [📥 Response](#-response-1)
  - [⚠ Error Handling](#-error-handling)

# Measurement Data Recording 

this is an interface to record measurement data from each temperature sensor to the database. you can query and push data to this interface.
#### 🔗 URL :  `/APIv[version?]/measurement`


## Retrieve Measurement Data
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `GET`       | `/APIv[version?]/measurement` |

retrieve available record data from database with matching queries criteria.

### 🔎 Parameter
- `mac_address` - specify devices by MAC addres to return record from. Optional.
- `date_from` - return all record since this date. Must be a valid javascript date.
- `date_to` - return all record up to this date. Must be a valid javascript date.
- `get_all_mac` - return all mac address if set to true

### 📥 Response
A JSON list containing all measurement record matching queries criteria.
```json
[
  {
    "_id":"5f2d21f60792f188e80fdaa3",
    "mac_address":32341238471, <-- mac address in decimal
    "timestamp":"2020-08-07T09:42:14.271Z",
    "measurement": {
      "temperature": [
        32.43,
        31.25,
        32.03
      ],
      "digital": [ 1, 0, 1, 0 ]
    },
  },
  { <measurementObj> },
  { <measurementObj> }
]
```


## Add a New Measurement Data
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `POST`      | `/APIv[version?]/measurement` |

this interface use **application/json** body to add new measurement data to server.

### 📚 Data Structure

```json
{
  "mac_address": "0A-1B-2C-3D-4E-5F",
  "measurement": {
    "temperature":[
      23.7,
      25.6,
      28.1
    ],
  "digital": [1, 1, 1, 1]
  }
}
```

### 📥 Response
```json
{
  "success": true,
  "payload": {
    "_id": "5fbb347c8daefc144a59f128",
    "mac_address": 11111822610015,
    "measurement": {
      "temperature": [
        23.7,
        25.6,
        28.1
      ],
      "digital": [
        1,
        1,
        1,
        1
      ]
    },
    "timestamp": "2020-11-23T04:03:08.950Z",
    "__v": 0
  }
}
```

## ⚠ Error Handling
Response will return with **response.success** value of false when error occur. Detail explanation of the error will be written in **response.error**
```json
{
  "success": false,
  "error": "\"measurement\" is required"
}
```