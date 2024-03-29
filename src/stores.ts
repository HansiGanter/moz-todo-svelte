// stores.ts
import { writable } from "svelte/store";
import type { TodoType } from "./types/todo.type";
import { localStore } from "./localStore";


export const alert = writable("Welcome to the To-Do list app!");

const initialTodos: TodoType[] = [
    { id: 1, name: "Visit MDN web docs", completed: true },
    { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore("mdn-svelte-todo", initialTodos);
