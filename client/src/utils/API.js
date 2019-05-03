import axios from "axios";

export default {
    getTickets: function() {
        return axios.get("/api/tickets");
    },
 davidS-thrusday
    createTicket: function(ticketData) {
        return axios.post("/api/tickets", ticketData);
    },
    findOneTicket: function(id) {
        console.log("find one ticket called");
        return axios.get("/api/tickets/" + id);
    },
    updateOne: function(id, ticketDetails) {
        return axios.put("/api/tickets/" + id, ticketDetails);


    getLogin: function()
    {
        return axios.post("/api/login");

    }
};