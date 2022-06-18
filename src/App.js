import './App.css';
import TodoList from './components/TodoList';
import bgVideo from './assets/fundoanimado.mp4'

function App() {
  return (
    <div className="todo-app">
      <video autoPlay loop muted>
        <source src={bgVideo} type='video/mp4' />
      </video>
      <TodoList />
    </div>
  );
}

export default App;
