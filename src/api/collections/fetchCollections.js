export const fetchCollections = async () => {
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(SERVER_URL + "/collections");
    const collections = await response.json();
    return collections;
}

