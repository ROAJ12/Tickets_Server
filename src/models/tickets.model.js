import { Schema, model } from 'mongoose';

const ticketSchema = new Schema({
    title: { 
        type: String, 
        required: true,
        maxlength: [30, 'Title cannot be more than 30 characters']
    },
    description: { 
        type: String, 
        required: true,
        maxlength: [150, 'Description cannot be more than 30 characters'] 
    },
    status: { 
        type: String, 
        enum: ['open', 'in progress', 'closed'], 
        default: 'open' 
    },
    creator: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: { 
        type: Date, 
        default: Date.now 
    },
    messages: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Message' 
    }],
    image: { 
        type: String,
        required: true
    },
}, { timestamps: true });

const Ticket = model('Ticket', ticketSchema);

export default Ticket;