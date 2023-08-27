import { apiErrorHandler } from "./apiErrorHandler";
import { apiResponseHandler } from "./apiResponseHandler";
import httpService from "./httpApi";

const servicesEndpoint = "pages/services/";

const servicesAPI = {
  getAll: async () => {
    try {
      const response = await httpService.get(servicesEndpoint);
      return apiResponseHandler(response);
    } catch (error) {
      apiErrorHandler(error);
    }
  },
  getOneById: async (id) => {
    try {
      const response = await httpService.get(servicesEndpoint, {
        params: {
          id: id,
        },
      });
      return apiResponseHandler(response);
    } catch (error) {
      apiErrorHandler(error);
    }
  },
};
export default servicesAPI;
