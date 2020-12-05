# Device Data 

this is an interface to add a device that correlate with one or more temperature sensor.
#### 🔗 URL :  `/APIv[version?]/device`


## Retrieve Exisiting Device
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `GET`       | `/APIv[version?]/device` |

retrieve existing device in database.

### 🔎 Parameter
- `id` - specify device's id to query

### 📥 Response
A JSON list containing all devices.
```json
[
  {
    "_id":"5f2d21f60792f188e80fdaa3",
    "mac_address":[
      128374691234,
      218394621323,
    ],
    "name": "OV1001",
    "last_measurement": {
      "timestamp":"2020-08-07T09:42:14.271Z",
      "measurement": {
        "temperature": [
          32.43,
          31.25,
          32.03
        ],
        "digital": [ 1, 0, 1, 0 ]
      },
    }
  },
  { <DeviceObj> },
  { <DeviceObj> }
]
```


## Add a New Devices
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `POST`      | `/APIv[version?]/device` |

this interface use **application/json** body to add new device to server.

### 📚 Data Structure

```json
{
  "name": "OV1001",
  "mac_address": [
    213412341543
  ]
}
```

### 📥 Response
```json
{
  "success": true,
  "payload": {
    "_id": "5fbb347c8daefc144a59f128",
    "name": "OV1001",
    "mac_address": [
      213412341543
    ]
  }
}
```


## Edit a Devices
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `PUT`      | `/APIv[version?]/device` |

this interface use **application/json** body to add new device to server.

### 📚 Data Structure

```json
{
  "id": "5fbb347c8daefc144a59f128",
  "name": "OV1001",
  "mac_address": [
    213412341543
  ]
}
```

### 📥 Response
```json
{
  "success": true,
  "payload": {
    "_id": "5fbb347c8daefc144a59f128",
    "name": "OV1001",
    "mac_address": [
      213412341543
    ]
  }
}
```


## ⚠ Error Handling
Response will return with **response.success** value of false when error occur. Detail explanation of the error will be written in **response.error**
```json
{
  "success": false,
  "error": "\"name\" is required"
}
```