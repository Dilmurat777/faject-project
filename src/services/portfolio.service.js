import httpService from "./http.service";
const portfolioEndpoint = "portfolio/";

const portfolioService = {
    getAll: async () => {
        try {
          const data = await httpService.get(portfolioEndpoint, );
          return data;
        } catch (error) {
          apiErrorHandler(error);
        }
      },
      getOneById: async (id) => {
        try {
          const data = await httpService.get(portfolioEndpoint, {
            params: {
              id: id,
            },
          });
          return data;
        } catch (error) {
          apiErrorHandler(error);
        }
      },
};
export default portfolioService;
