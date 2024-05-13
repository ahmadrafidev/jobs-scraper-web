import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Sesuaikan dengan local host backend

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/jobs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
};

export const fetchJobById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/jobs/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching job with ID ${id}:`, error);
        return null;
    }
};

export const searchJobs = async (query: Record<string, string>) => {
    try {
        const response = await axios.get(`${API_URL}/jobs/search`, { params: query });
        return response.data;
    } catch (error) {
        console.error('Error searching jobs:', error);
        return [];
    }
};
