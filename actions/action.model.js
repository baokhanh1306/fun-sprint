import mongoose from 'mongoose';

export const actionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

export default new mongoose.model('Action', actionSchema);