module.exports = ({database: DB}) => {

    const MeasurementSchema = new DB.Schema({
        lot_num: {
            type: Number,
            required: true,
        },
        spk_num: {
            type: String,
            required: true,
        },
        spk_date: {
            type: Date,
            required: true,
        },
        furnace: {
            type: String,
            required: true,
        },
        operator: {
            type: {
                start: {
                    type: String,
                    required: true,
                },
                finish: {
                    type: String,
                    required: true,
                },
            },
            required: true,
        },
        special: {
            type: Boolean,
            required: true,
        },
        temper: {
            type: String,
            required: true,
        },
        start_date: {
            type: Date,
            required: true,
        },
        temperature: {
            type: [Number],
            required: true,
        },
        duration: {
            type: [Number],
            required: true,
        },
        cooling: {
            type: Number,
            required: true,
        },
        load: {
            type: [{
                position: {
                    type: String,
                    required: true,
                },
                roll_num: {
                    type: String,
                    required: true,
                },
                alloy_type: {
                    type: String,
                    required: true,
                },
                dimension: {
                    type: {
                        width: {
                            type: Number,
                            required: true,
                        },
                        length: {
                            type: Number,
                            required: true,
                        },
                        thick: {
                            type: Number,
                            required: true,
                        },
                    },
                    required: true,
                },
                od: {
                    type: Number,
                    required: true,
                },
                core_diameter: {
                    type: Number,
                    required: true,
                },
                remark: {
                    type: String,
                },
                weight: {
                    type: Number,
                    required: true,
                }
            }],
            required: true,
        },
        mac_address: {
            type: String,
            required: true,
        },
    });
  
    return DB.model('document', MeasurementSchema);
  
}