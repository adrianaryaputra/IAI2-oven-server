module.exports = ({database: DB}) => {

    const MeasurementSchema = new DB.Schema({
        mac_address: { 
            type: Number,
            required: true,
        },
        timestamp: { 
            type: Date,
            required: true,
        },
        measurement: {
            type: {
                temperature: [Number],
                digital: [Boolean],
            },
            required: true,
        }
    });
  
    return DB.model('latest', MeasurementSchema);
  
}