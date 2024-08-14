import { Board } from "./Board";

export interface Activity {
    _id: string;
    title: string;
    description: string;
    state?: string;
    list_id: Board;
    createdAt?: Date;
  }
  