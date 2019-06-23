export interface todoItem {
    id: number,
    title: string,
    isCompleted: boolean
}


export interface todoState {
    todo: todoItem[]
    lastUpdate: string


}

export const todoInitializeState: todoState = {
    todo: [],
    lastUpdate: ""



}