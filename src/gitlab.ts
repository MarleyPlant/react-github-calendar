import { ApiResponse, GitLabResponseEvent, Year } from "./types";

export async function fetchGitlabData(username: string, year: Year): Promise<ApiResponse> {
    const apiUrl = 'https://gitlab.com/api/v4/users/';
    const response = await fetch(`${apiUrl}${username}/events?per_page=1000`);
    const data:GitLabResponseEvent[] = await response.json() as GitLabResponseEvent[];

    if (!response.ok) {
        throw Error(
            `Fetching GitHub contribution data for "${username}" failed:`,
        );
    }

    const events: { date: string; count: number; level: number; }[] = [];
    let total = 0;

    data.forEach((event: GitLabResponseEvent) => {
        const date: Date = new Date(event.created_at);
        const newdate: string = date.toISOString();
        if (event.push_data) {
            total += event.push_data.commit_count;
            events.push({
                date: newdate,
                count: event.push_data.commit_count,
                level: 1
            });
        }
    });

    const newdata = { total: {}, contributions: events };
    newdata.total = { year: total };

    return newdata as ApiResponse;
}