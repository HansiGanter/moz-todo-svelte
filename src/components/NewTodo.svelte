<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { onMount } from "svelte";
    import { selectOnFocus } from "../actions";

    const dispatch = createEventDispatcher();

    export let autofocus: boolean = false;

    let name = "";
    let nameEl: HTMLElement; // reference to the name input DOM node

    onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()

    const addTodo = () => {
        dispatch("addTodo", name);
        name = "";
        nameEl.focus(); // give focus to the name input
    };

    const onCancel = () => {
        name = "";
        nameEl.focus(); // give focus to the name input
    };
</script>

<form
    on:submit|preventDefault={addTodo}
    on:keydown={(e) => e.key === "Escape" && onCancel()}
>
    <h2 class="label-wrapper">
        <label for="todo-0" class="label__lg">What needs to be done?</label>
    </h2>
    <input
        bind:value={name}
        bind:this={nameEl}
        use:selectOnFocus
        type="text"
        id="todo-0"
        autoComplete="off"
        class="input input__lg"
    />
    <button type="submit" disabled={!name} class="btn btn__primary btn__lg"
        >Add</button
    >
</form>
