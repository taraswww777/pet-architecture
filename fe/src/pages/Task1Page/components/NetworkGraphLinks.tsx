import React, { useEffect, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { calculateLayout, GraphData } from '../utils/graphLayout';
import { NetworkGraphNode } from './NetworkGraphNode';
import { Badge, BadgeVariant } from '../../../uiKit/Badge';
import { Button } from '../../../uiKit/Button';
import { NetworkGraphLink } from './NetworkGraphLink.tsx';
import type { Link } from 'tasks/task1/try1/task1.types.ts';

interface NetworkGraphProps {
  links: Link[];
}

export const NetworkGraphLinks: React.FC<NetworkGraphProps> = ({links}) => {
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const calculatedData = calculateLayout(links);
    setGraphData(calculatedData);

    // Адаптивный размер контейнера
    const updateSize = () => {
      const container = document.getElementById('graph-container');
      if (container) {
        setContainerSize({
          width: container.offsetWidth,
          height: Math.max(400, window.innerHeight - 200),
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (!graphData) {
    return (
      <div
        className="flex items-center justify-center h-96 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Загружаем граф...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="graph-container" className="w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Сетевая топология</h2>
        <div className="flex space-x-2">
          <Button
            onClick={() => {
              const calculatedData = calculateLayout(links);
              setGraphData(calculatedData);
            }}
          >
            Обновить layout
          </Button>
          <Badge variant={BadgeVariant.INFO}>
            Узлов: {graphData.nodes.length}
          </Badge>
          <Badge variant={BadgeVariant.SUCCESS}>
            Связей: {graphData.links.length}
          </Badge>
        </div>
      </div>

      <div className="relative bg-gray-50 rounded-lg overflow-hidden border border-gray-300">
        <Stage width={containerSize.width} height={containerSize.height}>
          <Layer>
            {/* Рендерим связи */}
            {graphData.links.map((graphLink, index) => (
              <NetworkGraphLink graphLink={graphLink} key={index} /> // Используем новый компонент
            ))}

            {/* Рендерим узлы */}
            {graphData.nodes.map(node => (
              <NetworkGraphNode key={node.id} node={node} /> // Используем новый компонент
            ))}
          </Layer>
        </Stage>
      </div>

      {/* Статистика */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 text-sm">Высокие потери</h4>
          <p className="text-2xl font-bold text-blue-600">
            {graphData.links.filter(l => l.packetLossPercentage > 50).length}
          </p>
        </div>
        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
          <h4 className="font-medium text-amber-800 text-sm">Средние потери</h4>
          <p className="text-2xl font-bold text-amber-600">
            {graphData.links.filter(l => l.packetLossPercentage > 20 && l.packetLossPercentage <= 50).length}
          </p>
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
          <h4 className="font-medium text-emerald-800 text-sm">Низкие потери</h4>
          <p className="text-2xl font-bold text-emerald-600">
            {graphData.links.filter(l => l.packetLossPercentage <= 20).length}
          </p>
        </div>
      </div>
    </div>
  );
};
