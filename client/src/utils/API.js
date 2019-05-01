import axios from "axios";

export default {
    getTickets: function() {
        return axios.get("/api/tickets");
    },

    getLogin: function()
    {
        return axios.post("/api/login");
    }
};