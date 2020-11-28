module.exports = ({ORM}) => {

    return () => {
        return _createMethod();
    }
  
    function _createMethod(q = ORM.find({})){
        return Object.freeze({
            findAll,
            findByName,
            findById,
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
  
    function findByName(name) {
        const q = this.baseQuery.find({name});
        return _createMethod(q);
    }

    function findById(id) {
        const q = this.baseQuery.findById(id);
        return _createMethod(q);
    }

    function updateById(id, obj) {
        return ORM.findByIdAndUpdate(id, obj);
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