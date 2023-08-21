import axios from "axios";
const bookEndpoint = "book/";

const authService = {
    book: async () => {
        const { data } = await axios.post(bookEndpoint,{});

        return data;
    },
};

export default authService;
