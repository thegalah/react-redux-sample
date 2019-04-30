import StoreData from "./StoreData";
import { createStore } from "redux";
import { Reducer } from "redux";

enum ActionType {
    AddTodo,
    RemoveTodo,
}

class Data {
    private static readonly initialState: StoreData = {
        todos: [],
    };
    private _store = createStore(Data.reducer);
    public get Store() {
        return this._store;
    }

    public AddItem = (item: string) => {
        this._store.dispatch({
            type: ActionType.AddTodo,
            text: item,
        });
    };

    public RemoveItem = (index: number) => {
        this._store.dispatch({
            type: ActionType.RemoveTodo,
            item: index,
        });
    };

    private static reducer: Reducer<StoreData> = (state = Data.initialState, action): StoreData => {
        switch (action.type) {
            case ActionType.AddTodo: {
                const newArray: Array<string> = state.todos.slice();
                newArray.push(action.text);
                return {
                    ...state,
                    todos: newArray,
                };
            }
            case ActionType.RemoveTodo: {
                const newArray: Array<string> = state.todos.slice();
                newArray.splice(action.index, 1);
                return {
                    ...state,
                    todos: newArray,
                };
            }
            default:
                return state;
        }
    };
}

export default new Data();
