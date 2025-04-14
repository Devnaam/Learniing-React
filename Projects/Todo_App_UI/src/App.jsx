import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components/Appname";

function App() {
	const [todoText, setTodoText] = useState("");
	const [todoDate, setTodoDate] = useState("");
	const [todos, setTodos] = useState([]);

	const handleAddTodo = () => {
		if (todoText.trim() && todoDate) {
			setTodos([...todos, { text: todoText, date: todoDate }]);
			setTodoText("");
			setTodoDate("");
		}
	};

	const handleDelete = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	return (
		<div
			className="container mt-5 p-4 bg-white shadow rounded"
			style={{ maxWidth: "600px" }}
		>
			{/* <h2 className="text-center fw-bold mb-4">Todo App</h2> */}
			<Appname />

			<div className="d-flex gap-2 mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Enter Todo here"
					value={todoText}
					onChange={(e) => setTodoText(e.target.value)}
				/>
				<input
					type="date"
					className="form-control"
					value={todoDate}
					onChange={(e) => setTodoDate(e.target.value)}
				/>
				<button
					className="btn btn-success rounded fw-bold px-4"
					onClick={handleAddTodo}
				>
					Add
				</button>
			</div>

			{todos.map((todo, index) => (
				<div
					key={index}
					className="d-flex justify-content-between align-items-center border-bottom py-2"
				>
					<div>
						<strong>{todo.text}</strong>
						<br />
						<small>{new Date(todo.date).toLocaleDateString()}</small>
					</div>
					<button
						className="btn btn-danger rounded fw-bold"
						onClick={() => handleDelete(index)}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
}

export default App;
