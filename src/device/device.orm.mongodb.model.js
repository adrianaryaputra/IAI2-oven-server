module.exports = ({database: DB}) => {

    const MeasurementSchema = new DB.Schema({
        mac_address: { 
            type: [Number],
            required: true,
        },
        name: {
            type: String
        }
    });
  
    return DB.model('device', MeasurementSchema);
  
}