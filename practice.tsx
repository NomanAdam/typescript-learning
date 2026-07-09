interface ButtonProps {
 label: string;
 onClick: () => void;
 disabled?: boolean;
}
const [count, setCount] = useState<number>(0);
export default function practice({ label, onClick, disabled }: ButtonProps) {
 return (
  <button onClick={onClick} disabled={disabled}>
   {label}
  </button>
 );
}

interface Task {
 id: number;
 title: string;
 completed: boolean;
}
interface TaskItemProps {
 task: Task;
 onToggle: (id: number) => void;
}

function TaskItem({ task, onToggle }: TaskItemProps) {
 return (
  <div>
   <input
    type="checkbox"
    checked={task.completed}
    onChange={() => onToggle(task.id)}
   />

   <span>{task.title}</span>
  </div>
 );
}
