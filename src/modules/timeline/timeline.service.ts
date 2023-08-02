const API_URI='https://648fff8a1e6aa71680ca579b.mockapi.io/trips';
const COUNT_OF_PAGES=5;
export const getUserTrips=async (numberPage: number, countOfPages?: number,) => {
    let response = await fetch(`${API_URI}?p=${numberPage}&l=${countOfPages || COUNT_OF_PAGES}`);
    return response.json();
}