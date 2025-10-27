import { NetworkGraphLinks } from './components/NetworkGraphLinks.tsx';
import { links } from 'tasks/task1/try1/solutionAsMap.ts';
import { nodes, TreeNode } from 'tasks/task1/try1/solutionAsTreeNode.ts';
import { Link } from 'tasks/task1/try1/task1.types.ts';

// Функция для конвертации TreeNode[] в Link[]
function convertTreeNodesToLinks(nodes: TreeNode[]): Link[] {
  const links: Link[] = [];

  nodes.forEach(node => {
    node.neighbors.forEach(neighbor => {
      // Предполагается, что сервер имеет свойство id, которое соответствует типу from/to в Link
      const link: Link = {
        from: node.server,
        to: neighbor.node.server,
        packetLossPercentage: neighbor.link.packetLossPercentage,
        nominalCapacity: neighbor.link.nominalCapacity,
      };
      links.push(link);
    });
  });

  return links;
}


const Task1Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Task1Page
        </h1>
        <NetworkGraphLinks links={links} />
        <NetworkGraphLinks links={convertTreeNodesToLinks(nodes)} />
      </main>
    </div>
  );
};

export default Task1Page;

