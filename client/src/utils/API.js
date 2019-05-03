import axios from "axios";

export default {
    getTickets: function() {
        console.log("axios called");
        return axios.get("/api/tickets");
    },
    createTicket: function(ticketData) {
        return axios.post("/api/tickets", ticketData);
    },
    findOneTicket: function(id) {
        console.log("find one ticket called");
        return axios.get("/api/tickets/" + id);
    },
    updateOne: function(id, ticketDetails) {
        return axios.put("/api/tickets/" + id, ticketDetails);
    }
};