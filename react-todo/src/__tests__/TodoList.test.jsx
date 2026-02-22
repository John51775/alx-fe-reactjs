import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom/extend-expect';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    
    // Check if demo todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('can toggle a todo', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    expect(todo).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});