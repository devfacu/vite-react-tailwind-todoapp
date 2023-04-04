import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b transition-all duration-1000 dark:border-b-gray-700">
            <button
                className={`h-7 w-7 flex-none rounded-full transition-all duration-1000 dark:border-gray-700 ${
                    completed
                        ? "flex items-center justify-center border bg-gradient-to-br from-blue-400 to-purple-400"
                        : "inline-block border-2"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`grow transition-all duration-1000 ${
                    completed
                        ? "text-gray-400 line-through dark:text-gray-600"
                        : "text-gray-600 dark:text-gray-300"
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
