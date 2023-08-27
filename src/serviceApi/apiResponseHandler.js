export function apiResponseHandler(response) {
    const { data, status, statusText } = response;

    if (status >= 200 && status < 300) {
        return data;
    } else {
        let errorMessage = 'An error occurred while processing the request.';

        if (statusText) {
            errorMessage += ` Status: ${statusText}.`;
        }

        if (data && data.error) {
            errorMessage += ` Error: ${data.error}.`;
        }

        if (status >= 400 && status < 500) {
            errorMessage += ' This is a client error.';
        } else if (status >= 500 && status < 600) {
            errorMessage += ' This is a server error.';
        }

        throw new Error(errorMessage);
    }
}