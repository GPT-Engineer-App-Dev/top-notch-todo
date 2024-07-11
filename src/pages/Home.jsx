import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Todo App</h1>
      <p className="text-lg mb-8">Manage your tasks efficiently and stay organized.</p>
      <Button onClick={() => navigate("/todo-list")} className="mx-auto">
        Go to Todo List
      </Button>
    </div>
  );
};

export default Home;