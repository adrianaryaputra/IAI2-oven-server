- [Document Data Recording](#document-data-recording)
      - [🔗 URL :  `/APIv[version?]/document`](#-url---apivversiondocument)
  - [Retrieve Measurement Data](#retrieve-measurement-data)
    - [🔎 Parameter](#-parameter)
    - [📥 Response](#-response)
  - [Add a New Document](#add-a-new-document)
    - [📚 Data Structure](#-data-structure)
    - [📥 Response](#-response-1)
  - [Edit existing Document](#edit-existing-document)
    - [🔎 Parameter](#-parameter-1)
    - [📚 Data Structure](#-data-structure-1)
    - [📥 Response](#-response-2)
  - [⚠ Error Handling](#-error-handling)

# Document Data Recording 

this is an interface to record document from user input to the database.
#### 🔗 URL :  `/APIv[version?]/document`


## Retrieve Measurement Data
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `GET`       | `/APIv[version?]/document` |

retrieve available document from database with matching queries criteria.

### 🔎 Parameter
-`id` - specify by document ID. Optional.
- `lot_num` - specify by lot number. Optional.
- `date_from` - return all document since this date. Must be a valid javascript date.
- `date_to` - return all document up to this date. Must be a valid javascript date.

### 📥 Response
A JSON list containing all document matching queries criteria.
```json
[
  {
    "lot_num": 2012398,
    "spk_num": "001/XIV/20",
    "spk_date": <DateObj>,
    "furnace": "OV10XX",
    "operator": {
      "start": "nama",
      "finish": "nama",
    },
    "special": false,
    "temper": "H0",
    "start_date": <DateObj>,
    "temperature": [
      200, //°C
      200, //°C
    ],
    "duration": [
      13000000, //ms
      13000000, //ms
    ],
    "cooling": 130000000, //ms
    "load": [
      {
        "position": "FLT??",
        "roll_num": "A123",
        "alloy_type": "A8011",
        "dimension": {
          "width": 423.5, //mm
          "length": 41350, //m
          "thick": 31.5, //μm
        },
        "od": 712.5,
        "remark": "the quick brown fox jumps over the lazy dogs",
      }, {
        "position": "FLT??",
        "roll_num": "A123",
        "alloy_type": "A8011",
        "dimension": {
          "width": 423.5, //mm
          "length": 41350, //m
          "thick": 31.5, //μm
        },
        "od": 712.5,
        "remark": "the quick brown fox jumps over the lazy dogs",
      },
    ],
  },
  { <documentObj> },
  { <documentObj> },
]
```


## Add a New Document
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `POST`      | `/APIv[version?]/document` |

this interface use **application/json** body to add new measurement data to server.

### 📚 Data Structure

```json
{
  "lot_num": 2012398,
  "spk_num": "001/XIV/20",
  "spk_date": <DateObj>,
  "furnace": "OV10XX",
  "operator": {
    "start": "nama",
    "finish": "nama",
  },
  "special": false,
  "temper": "H0",
  "start_date": <DateObj>,
  "temperature": [
    200, //°C
    200, //°C
  ],
  "duration": [
    13000000, //ms
    13000000, //ms
  ],
  "cooling": 130000000, //ms
  "load": [
    {
      "position": "FLT??",
      "roll_num": "A123",
      "alloy_type": "A8011",
      "dimension": {
        "width": 423.5, //mm
        "length": 41350, //m
        "thick": 31.5, //μm
      },
      "od": 712.5,
      "remark": "the quick brown fox jumps over the lazy dogs",
    }, {
      "position": "FLT??",
      "roll_num": "A123",
      "alloy_type": "A8011",
      "dimension": {
        "width": 423.5, //mm
        "length": 41350, //m
        "thick": 31.5, //μm
      },
      "od": 712.5,
      "remark": "the quick brown fox jumps over the lazy dogs",
    },
  ],
}
```

### 📥 Response
```json

```

## Edit existing Document
| HTTP method | link                          |
| :---------- | :---------------------------- |
| `PUT`      | `/APIv[version?]/document` |

this interface use **application/json** body to add new measurement data to server.

### 🔎 Parameter
- `lot_num` - specify lot number. Required.

### 📚 Data Structure

```json
{
  "lot_num": 2012398,
  "spk_num": "001/XIV/20",
  "spk_date": <DateObj>,
  "furnace": "OV10XX",
  "operator": {
    "start": "nama",
    "finish": "nama",
  },
  "special": false,
  "temper": "H0",
  "start_date": <DateObj>,
  "temperature": [
    200, //°C
    200, //°C
  ],
  "duration": [
    13000000, //ms
    13000000, //ms
  ],
  "cooling": 130000000, //ms
  "load": [
    {
      "position": "FLT??",
      "roll_num": "A123",
      "alloy_type": "A8011",
      "dimension": {
        "width": 423.5, //mm
        "length": 41350, //m
        "thick": 31.5, //μm
      },
      "od": 712.5,
      "remark": "the quick brown fox jumps over the lazy dogs",
    }, {
      "position": "FLT??",
      "roll_num": "A123",
      "alloy_type": "A8011",
      "dimension": {
        "width": 423.5, //mm
        "length": 41350, //m
        "thick": 31.5, //μm
      },
      "od": 712.5,
      "remark": "the quick brown fox jumps over the lazy dogs",
    },
  ],
}
```

### 📥 Response
```json

```

## ⚠ Error Handling
Response will return with **response.success** value of false when error occur. Detail explanation of the error will be written in **response.error**
```json
{
  "success": false,
  "error": "\"lot_num\" is required"
}
```