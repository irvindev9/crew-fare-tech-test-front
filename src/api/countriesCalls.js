import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:9999';

export const getDefaultCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getByRegion = async (region, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/region?region=${region}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCountriesNames = async () => {
  try {
    const response = await axios.get(`${API_URL}/names`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCountryDetails = async (country) => {
  try {
    const response = await axios.get(`${API_URL}/name?name=${country}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}