const TodoComputed = ({ computedItemsLeft, clearCompleted, shownTodos }) => {
    return (
        <section className={`flex justify-between bg-white py-4 px-4 ${shownTodos.length === 0 ? "rounded-md" : "rounded-b-md"}`}>
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
