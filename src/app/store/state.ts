export interface todoItem {
    id: string,
    title: string
}


export interface todoState {
    todo: todoItem[]
    lastUpdate: string,
    isCompleted: boolean

}

export const todoInitializeState: todoState = {
    todo: [],
    lastUpdate: "",
    isCompleted: false


}