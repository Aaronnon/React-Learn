export const getInputChangeAction = (value) => ({
    type: "change_input_value",
    value
})

export const getAddItemAction = () => ({
    type: "add_todo_item",
})

export const getDeleteChangeAction = (index) => ({
    type: "delete_todo_item",
    index,
})