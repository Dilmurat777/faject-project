import { apiResponseHandler } from "./apiResponseHandler";
import httpService from "./httpApi";
import { apiErrorHandler } from './apiErrorHandler';

const portfolioEndpoint = "portfolio/";

const portfolioAPI = {
  getAll: async () => {
    try {
      const response = await httpService.get(portfolioEndpoint);
      return apiResponseHandler(response);
    } catch (error) {
      apiErrorHandler(error);
    }
  },
  getOneById: async (slug) => {
    try {
      const response = await httpService.get(portfolioEndpoint, {
        params: {
          slug: slug,
        },
      });
      return apiResponseHandler(response);
    } catch (error) {
      apiErrorHandler(error);
    }
  },
};
export default portfolioAPI;

