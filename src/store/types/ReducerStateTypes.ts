import { Post } from './Post';

export interface TableElement {
  [index: string]: Post[] | number,
  EVENT: Post[],
  FOOD: Post[],
  REALESTATE: Post[],
  OTHER: Post[],
  TOTAL: number
}

export interface FetchDataInitialStateType {
  error: boolean,
  tables: {
    [index: string]: TableElement
  }
}

export interface DetailViewInitialStateType {
  typeSelected: string | null
}