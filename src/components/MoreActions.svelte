<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { TodoType } from "../types/todo.type";
    const dispatch = createEventDispatcher();

    export let todos: TodoType[];

    let completed = true;

    const checkAll = () => {
        dispatch("checkAll", completed);
        completed = !completed;
    };

    const removeCompleted = () => dispatch("removeCompleted");

    let completedTodos: number;
    $: completedTodos = todos.filter((t: TodoType) => t.completed).length;
</script>

<div class="btn-group">
    <button
        type="button"
        class="btn btn__primary"
        disabled={todos.length === 0}
        on:click={checkAll}>{completed ? "Check" : "Uncheck"} all</button
    >
    <button
        type="button"
        class="btn btn__primary"
        disabled={completedTodos === 0}
        on:click={removeCompleted}>Remove completed</button
    >
</div>
