import { useStore } from "../store"

const MainArea = () => {

    const {
        lists, workspace, selectedList,
        selectedWorkspace, todoText, setSelectedList, setSelectedWorkspace,setTodoText, handleAddTodo
    } = useStore();

  return (
    <div className="flex-1 p-6">
        <div className="mb-4">
            <input type="text" value={todoText} 
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Add a new todo"
            className="border border-gray-300 p-2 rounded-lg w-full"
            />

            <div className=""></div>

        </div>
    </div>
  )
}

export default MainArea