import React from 'react';
import { Circle, Text } from 'react-konva';
import { GraphNode } from '../utils/graphLayout.ts';

interface NetworkGraphNodeProps {
  node: GraphNode;
}

export const NetworkGraphNode: React.FC<NetworkGraphNodeProps> = ({ node }) => {
  return (
    <React.Fragment key={node.id}>
      {/* Внешний круг */}
      <Circle
        x={node.x}
        y={node.y}
        radius={24}
        fill="white"
        stroke="#3b82f6"
        strokeWidth={3}
        shadowBlur={8}
        shadowColor="#3b82f6"
        shadowOpacity={0.3}
      />
      {/* Внутренний круг */}
      <Circle
        x={node.x}
        y={node.y}
        radius={20}
        fill="#3b82f6"
      />
      {/* Текст названия узла - идеально по центру */}
      <Text
        x={node.x}
        y={node.y}
        text={node.name}
        fontSize={16}
        fontFamily="system-ui"
        fontWeight="bold"
        fill="white"
        align="center"
        verticalAlign="middle"
        offsetX={node.name.length * 5} // Оптимальное смещение для центрирования
        offsetY={6} // Оптимальное смещение для центрирования
      />
    </React.Fragment>
  );
};
