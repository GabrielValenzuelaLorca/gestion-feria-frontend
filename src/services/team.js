import { authHeader, handleResponse } from "./helper";
import { API_URL } from "../config";

export const createTeam = async (team) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify(team),
  };
  const url = new URL(`${API_URL}/team/create`);
  return handleResponse(await fetch(url, requestOptions));
};

export const updateTeam = async (team) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify(team),
  };
  const url = new URL(`${API_URL}/team/update`);
  return handleResponse(await fetch(url, requestOptions));
};

export const dashboard = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  };
  const url = new URL(`${API_URL}/team/dashboard`);
  return handleResponse(await fetch(url, requestOptions));
};

export const getTeam = async (teamId) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  };
  const url = new URL(`${API_URL}/team/${teamId}`);
  return handleResponse(await fetch(url, requestOptions));
};
