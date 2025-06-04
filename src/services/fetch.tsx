/**
 * 
 * @param url The URL to fetch data from
 * @returns A promise that resolves to the fetched data of type T
 * @throws An error if the fetch operation fails or the response is not ok
 */

export const get = async function <T>(url: string): Promise<T> {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Fetch failed with status: ${response.status}`);
        }

        const data = (await response.json()) as unknown;
        return data as T;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

const apiCall = {
    get,
};

export default apiCall;
//finish CRUD operations for fetching data from a REST API (create, read(done), update, delete)