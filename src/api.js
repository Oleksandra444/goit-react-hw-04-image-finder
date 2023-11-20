import axios from "axios";

export const api = async (query, page) => {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: query,
        page,
        key: '36915264-1bc99c0f230b228afa7d4d649',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return response.data;

}