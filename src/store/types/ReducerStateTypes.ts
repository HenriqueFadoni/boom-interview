import { Post } from './Post';

export interface TableElement {
  EVENT: Post[],
  FOOD: Post[],
  REALESTATE: Post[],
  OTHER: Post[],
  TOTAL: number
}

export interface FetchDataInitialStateType {
  error: boolean,
  tables: {
    MONDAY: TableElement,
    TUESDAY: TableElement,
    WEDNESDAY: TableElement,
    THURSDAY: TableElement,
    FRIDAY: TableElement,
    SATURDAY: TableElement,
    SUNDAY: TableElement,
  }
}

export interface DetailViewInitialStateType {
  typeSelected: string | null
}