module.exports = ({
    measurementORM,
    sensorORM,
}) => {

    return () => {
        return _createMethod();
    }
  
    function _createMethod(q = measurementORM.find({})){
        return Object.freeze({
            findAll,
            findByMac,
            create,
            dateFrom,
            dateTo,
            sort,
            limit,
            submit,
            getAllMac,
            editSensor,
            getSensor,
            deleteAllMac,
            deleteObj,
            baseQuery: q,
        })
    }
  
    function findAll() {
        return _createMethod(this.baseQuery);
    }
  
    function findByMac(mac_address) {
        const q = this.baseQuery.find({mac_address});
        return _createMethod(q);
    }
  
    function dateFrom(date) {
        const q = this.baseQuery.find({
            timestamp: {$gte: date}
        });
        return _createMethod(q);
    }
  
    function dateTo(date) {
        const q = this.baseQuery.find({
            timestamp: {$lte: date}
        });
        return _createMethod(q);
    }
  
    function sort(order) {
        const q = this.baseQuery.sort({timestamp: order});
        return _createMethod(q);
    }
  
    function limit(value) {
        const q = this.baseQuery.limit(value);
        return _createMethod(q);
    }
  
    async function create(obj) {
        const res = await measurementORM.create(obj);
        const sensor_res = await sensorORM.find({mac_address: res.mac_address});
        if(sensor_res.length == 0){
            return createSensor(res.mac_address);
        } else {
            return sensor_res[0];
        }
    }

    function createSensor(mac_address){
        return sensorORM.create({
            mac_address: mac_address,
            scaler: {
                gain: 1,
                shift: 0,
            },
            refresh_time: 60,
        }) 
    }

    function editSensor(mac_list, data) {
        return sensorORM.updateMany(
            {mac_address: mac_list},
            data
        )
    }

    async function getSensor(mac) {
        let res = await sensorORM.find({
            mac_address: mac
        });
        if(res.length) return res[0];
        else {
            for(idx=0; idx<mac.length; idx++){
                res = await createSensor(mac[idx]);
            }
            return res
        }
    }
  
    function submit() {
        return this.baseQuery.exec();
    }
  
    function deleteAllMac(mac_address) {
        return measurementORM.deleteMany({mac_address});
    }
  
    function deleteObj(obj) {
        return measurementORM.deleteMany(obj);
    }

    function getAllMac() {
        return measurementORM.aggregate([
            {$group: {_id: '$mac_address'}}
        ]);
    }
  
  }