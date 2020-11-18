import mongoose from 'mongoose';
import { actionSchema } from '../actions/action.model';


const boardSchema = new mongoose.Schema({
    user: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    wentWell: [actionSchema],
    toImprove: [actionSchema],
    actions: [actionSchema],
}, { timestamps: true });

export default new mongoose.model('Board', boardSchema);
