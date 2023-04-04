import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex items-center gap-4 overflow-hidden 
                rounded-md bg-white py-4 px-4 dark:bg-gray-800 transition-all duration-1000"
        >
            <span className="inline-block h-7 w-7 flex-none rounded-full border-2 dark:border-gray-700 transition-all duration-1000"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
