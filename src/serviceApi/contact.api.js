import { apiErrorHandler } from "./apiErrorHandler";
import { apiResponseHandler } from "./apiResponseHandler";
import httpService from "./httpApi";

const contactEndpoint = "contact/";

const contactAPI = {
    book: async (payload) => {
        try {
            const response = await httpService.post(contactEndpoint, payload);
            return apiResponseHandler(response);
        } catch (error) {
            apiErrorHandler(error);            
        }
       
    },
};

export default contactAPI;
