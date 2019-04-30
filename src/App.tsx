import React, { Component } from "react";
import TodosView from "./Views/TodosView";

export default class App extends Component {
    public render = () => {
        return (
            <div className="App">
                <TodosView />
            </div>
        );
    };
}
