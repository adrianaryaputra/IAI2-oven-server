module.exports = ({ORM}) => {

    return () => {
        return _createMethod();
    }
  
    function _createMethod(q = ORM.find({})){
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
  
    function create(obj) {
        return ORM.create(obj);
    }
  
    function submit() {
        return this.baseQuery.exec();
    }
  
    function deleteAllMac(mac_address) {
        return ORM.deleteMany({mac_address});
    }
  
    function deleteObj(obj) {
        return ORM.deleteMany(obj);
    }

    function getAllMac() {
        return ORM.aggregate([
            {$group: {_id: '$mac_address'}}
        ]);
    }
  
  }