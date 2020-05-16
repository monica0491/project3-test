import axios from 'axios';

export default {
    getHouseholds: function() {
        return axios.get("/api/households");
    }
}

