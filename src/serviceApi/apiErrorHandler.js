export const apiErrorHandler = (error) => {
    const errorMessage = error.response?.data?.message || 'An error occurred/Произошла ошибка';
    console.error('API Error:', errorMessage);
    throw new Error(errorMessage);
  };
  