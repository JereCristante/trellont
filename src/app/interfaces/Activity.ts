export interface Activity {
    _id: string;
    title: string;
    description: string;
    state?: string;
    end_date: Date | string;
    board_id: string;
  }
  