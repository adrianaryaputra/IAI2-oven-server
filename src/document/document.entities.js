module.exports = ({ORM}) => {

    return () => {
        return _createMethod();
    }
  
    function _createMethod(q = ORM.find({})){
        return Object.freeze({
            findAll,
            findByLotNum,
            findByName,
            findById,
            findUnfinishedState,
            create,
            limit,
            submit,
            sort,
            updateById,
            deleteObj,
            baseQuery: q,
        })
    }
  
    function findAll() {
        return _createMethod(this.baseQuery);
    }

    function findByLotNum(lot) {
        const q = this.baseQuery.find({lot_num: lot});
        return _createMethod(q);
    }
  
    function findByName(name) {
        const q = this.baseQuery.find({name});
        return _createMethod(q);
    }

    function findById(id) {
        const q = this.baseQuery.find({_id: id});
        return _createMethod(q);
    }

    function findUnfinishedState() {
        const q = this.baseQuery.find({isFinish: false});
        return _createMethod(q);
    }

    function updateById(obj) {
        let objm = Object.assign({}, obj);
        let id = objm.id
        delete objm.id
        return ORM.findByIdAndUpdate(id, objm);
    }
  
    function limit(value) {
        const q = this.baseQuery.limit(value);
        return _createMethod(q);
    }
  
    function create(obj) {
        return ORM.create(obj);
    }

    function sort(order) {
        const q = this.baseQuery.sort({name: order});
        return _createMethod(q);
    }
  
    function submit() {
        return this.baseQuery.exec();
    }
  
    function deleteObj(obj) {
        return ORM.deleteMany(obj);
    }
  
  }