const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    title: { type: String, required: true },
    status: { type: String, required: true },
    assigned_to: String,
    description: { type: String, required: true },
    notes: String,
    created_by: String
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;