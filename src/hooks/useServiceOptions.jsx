import { useState, useEffect } from 'react'; 
import servicesAPI from '../serviceApi/services.api';


function useServiceOptions(init) {
    const [options, setOptions] = useState(init);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await servicesAPI.getAll();

                let services = [];

                if (Array.isArray(response)) {
                    services = response.sort((a, b) => a.service_title.localeCompare(b.service_title));
                }

                setOptions(services);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        }

        fetchData();
    }, []);

    return [options, setOptions];
}

export default useServiceOptions;
