import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Todo } from '../Model/tmp';
import TodoItem from './TodoItem';

const todos: Todo[] = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false,
  },

  {
    id: '4',
    title: 'Todo 4',
    completed: false,
  },
];

const Todos = () => {
  return (
    <>
      <Container fluid>
        <Row className="no-gutters">
          {todos &&
            todos.map((todo: Todo) => (
              <Col key={todo.id} sm={12} md={6} lg={4} xl={3}>
                <TodoItem todo={todo} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Todos;
