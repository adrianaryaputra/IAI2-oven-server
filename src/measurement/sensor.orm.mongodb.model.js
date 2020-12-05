module.exports = ({database: DB}) => {

    const MeasurementSchema = new DB.Schema({
        mac_address: { 
            type: Number,
            required: true,
        },
        scaler: {
            type: {
                gain: [Number],
                shift: [Number],
            },
            required: true,
        },
        refresh_time: {
            type: Number,
            required: true,
        },
    });
  
    return DB.model('sensor', MeasurementSchema);
  
}