export interface todoItem {
    id: string,
    title: string,
    isCompleted: boolean
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