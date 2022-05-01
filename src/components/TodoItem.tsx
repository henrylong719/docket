import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Todo } from '../Model/tmp';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const getStyle = () => {
    return {
      width: '20rem',
      textDecoration: todo.completed ? 'line-through' : 'none',
    };
  };

  const handleRemove = () => {
    console.log('remove!');
  };

  const handleComplete = () => {
    console.log('complete!');
  };

  return (
    <Card className="my-3 mx-2 rounded  " style={getStyle()}>
      <Card.Header> time</Card.Header>

      <Card.Body>
        <Card.Text>
          <strong>{todo.title}</strong>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Button variant="light" className="btn-sm" onClick={handleComplete}>
          <i className="fas fa-check"></i>
        </Button>

        <Button
          variant="light"
          className="btn-sm float-right"
          onClick={handleRemove}
        >
          <i className="fas fa-trash-alt"></i>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TodoItem;
