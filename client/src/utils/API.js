import axios from "axios";

export default {
    getTickets: function() {
        console.log("axios called");
        return axios.get("/api/tickets");
    }
};