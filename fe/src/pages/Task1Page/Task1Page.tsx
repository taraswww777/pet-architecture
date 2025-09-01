import { NetworkGraph } from './components/NetworkGraph.tsx';

const Task1Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Task1Page
        </h1>
        <NetworkGraph />
      </main>
    </div>
  );
};

export default Task1Page;

