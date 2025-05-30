import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://tu-backend.com'; // Cambia por la URL real de tu backend

// Definimos tipos para las respuestas y datos
interface LoginResponse {
  access_token: string;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface UserProfile {
  _id: string;
  email: string;
  name: string;
  // otros campos que tenga tu usuario
}

// Crear instancia axios
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir token a cada petición
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (data: RegisterData): Promise<UserProfile> => {
  const response = await api.post<UserProfile>('/auth/register', data);
  return response.data;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', data);
  if (response.data.access_token) {
    await AsyncStorage.setItem('token', response.data.access_token);
  }
  return response.data;
};

export const getProfile = async (): Promise<UserProfile> => {
  const response = await api.get<UserProfile>('/users/profile');
  return response.data;
};

export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem('token');
};
