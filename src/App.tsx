import './App.css';
import SortableList from './SortableList';

function App() {
  return (
    <>
      <main className="max-w-lg mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">ドラッグで並び替え</h2>
        <SortableList />
      </main>
    </>
  );
}

export default App;
