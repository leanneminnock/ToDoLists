import { Todo } from "./todo";

export interface ToDoList {
    id: number,
    name: string,
    items: Todo[]
}