import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b">
            <button
                className={`h-7 w-7 flex-none rounded-full ${
                    completed
                        ? "flex items-center justify-center border bg-gradient-to-br from-blue-400 to-purple-400"
                        : "inline-block border-2"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`grow ${
                    completed ? "text-gray-400 line-through" : "text-gray-600"
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
