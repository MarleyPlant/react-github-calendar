export interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export type Year = number | 'last';

export interface ApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number; // 'lastYear;
  };
  contributions: Array<Activity>;
}

export interface ApiErrorResponse {
  error: string;
}

export interface GitlabResponseEventPushData {
  commit_count: number;
}
export interface GitLabResponseEvent {
  id: number;
  project_id: number;
  action_name: string;
  target_id: number;
  target_iid: number;
  target_type: string;
  target_title: string;
  author_id: number;

  created_at: string;
  imported: boolean;
  author_username: string;
  push_data?: GitlabResponseEventPushData;
}
