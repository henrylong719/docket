import React, { useState } from 'react';

const AddTodo = () => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder=" Add to do..."
        value={title}
        style={{ flex: 10 }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        type="submit"
        style={{ flex: 1 }}
        className="btn btn-dark "
      ></input>
    </form>
  );
};

export default AddTodo;
