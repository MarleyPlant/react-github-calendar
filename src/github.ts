import { Activity, ApiErrorResponse, ApiResponse, Year } from './types';

export async function fetchGitHubData(username: string, year: Year): Promise<ApiResponse> {
    const apiUrl = 'https://github-contributions-api.jogruber.de/v4/';
    const response = await fetch(`${apiUrl}${username}?y=${year}`);
    const data = (await response.json()) as ApiResponse | ApiErrorResponse;
  
    if (!response.ok) {
      throw Error(
        `Fetching GitHub contribution data for "${username}" failed: ${(data as ApiErrorResponse).error}`,
      );
    }
  
    return data as ApiResponse;
  }
  