import { useStore } from "../../store";
export const items = [
    {
        id: 1,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Farha ibrahiem",
        category: "Category 1",
        price: 100,
        count: 0,
        description: "Description 1",
    },
    {
        id: 2,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 2",
        category: "Category 2",
        notes: "This is a note",
        price: 200,
        count: 0,
        description: "Description 2",
    },
    {
        id: 3,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 3",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 4,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 4",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 5,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 5",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
    {
        id: 6,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 6",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 7,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 7",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 8,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 8",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
    {
        id: 9,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Farha ibrahiem",
        category: "Category 1",
        price: 100,
        count: 0,
        description: "Description 1",
    },
    {
        id: 10,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 10",
        category: "Category 2",
        price: 200,
        count: 0,
        description: "Description 2",
    },
    {
        id: 11,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "New Page",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 12,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 12",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 13,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 13",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
    {
        id: 14,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 14",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 15,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 15",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 16,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 16",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
    {
        id: 17,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Farha ibrahiem",
        category: "Category 1",
        price: 100,
        count: 0,
        description: "Description 1",
    },
    {
        id: 18,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 18",
        category: "Category 2",
        price: 200,
        count: 0,
        description: "Description 2",
    },
    {
        id: 19,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 19",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 20,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 20",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 21,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 21",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
    {
        id: 22,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 22",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 23,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 23",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 24,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 24",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
    {
        id: 25,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Farha ibrahiem",
        category: "Category 1",
        price: 100,
        count: 0,
        description: "Description 1",
    },
    {
        id: 26,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 26",
        category: "Category 2",
        price: 200,
        count: 0,
        description: "Description 2",
    },
    {
        id: 27,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 27",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 28,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 28",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 29,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 29",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
    {
        id: 30,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 30",
        category: "Category 3",
        price: 300,
        count: 0,
        description: "Description 3",
    },
    {
        id: 31,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 31",
        category: "Category 4",
        price: 400,
        count: 0,
        description: "Description 4",
    },
    {
        id: 32,
        url: "https://www.shutterstock.com/image-photo/variety-raw-beef-meat-prime-260nw-2496493565.jpg",
        name: "Item 32",
        category: "Category 5",
        price: 500,
        count: 0,
        description: "Description 5",
    },
];

export const fetchProducts = async (options) => {
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(SERVER_URL + "/products");
    let products = await response.json();
    const lng = options.lng;
    if (options?.search) {
        const en_callback = product => product.name.toLowerCase().includes(options.search.toLowerCase())
        const ar_callback = product => product.name_ar.includes(options.search)
        const fn = lng === "en" ? en_callback : ar_callback;
        products = products.filter(product => fn(product));
    }
    if (options?.category?.length) {
        const en_callback = product => options.category.includes(product.collection)
        const ar_callback = product => options.category.includes(product.collection_ar)
        const fn = lng === "en" ? en_callback : ar_callback;
        if(options.category.includes("All")) return products;
        if(options.category.includes("الكل")) return products;
        products = products.filter(product => fn(product));
    }

    return products
};