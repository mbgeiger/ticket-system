import axios from "axios";

export default {
    getTickets: function() {
        return axios.get("/api/tickets");
    },

    getLogin: function()
    {
        console.log("In Axios")
        return axios.post("/api/login");
    }
};