import Data from "../Data/Data";
import React, { Component } from "react";
import StoreData from "../Data/StoreData";
import { Button, Col, Input, InputGroup, InputGroupAddon, ListGroup, ListGroupItem, Row } from "reactstrap";
import { connect } from "react-redux";

interface TodosViewProps {
    todos: Array<string>;
}

class TodosView extends Component<TodosViewProps> {
    public render = () => {
        const todos = this.props.todos.map((item, index) => {
            return (
                <ListGroupItem key={index}>
                    <Row>
                        <Col>{item}</Col>
                        <Col>
                            <Button
                                onClick={() => {
                                    this.deletePressed(index);
                                }}
                                color="danger"
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            );
        });
        return (
            <div>
                <h1>This is a list of todos</h1>
                <ListGroup>{todos}</ListGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">#</InputGroupAddon>
                    <Input placeholder="todo" onKeyPress={this.keyPressed} />
                </InputGroup>
            </div>
        );
    };

    private keyPressed = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        const code = ev.keyCode || ev.which;
        if (code === 13) {
            const val = ev.currentTarget.value;
            Data.AddItem(val);
            ev.currentTarget.value = "";
        }
    };

    private deletePressed = (index: number) => {
        Data.RemoveItem(index);
    };
}

export default connect(
    (state: StoreData, _ownProps): TodosViewProps => {
        return {
            todos: state.todos,
        };
    }
)(TodosView);
