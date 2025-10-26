import React from 'react';
import { Line, Rect, Text } from 'react-konva';
import { toNumber } from 'lodash';
import { GraphLink } from '../utils/graphLayout.ts';

interface NetworkGraphLinkProps {
  graphLink: GraphLink;
}

export const NetworkGraphLink: React.FC<NetworkGraphLinkProps> = ({ graphLink }) => {
  const midX = (toNumber(graphLink?.source?.x) + toNumber(graphLink?.target?.x)) / 2;
  const midY = (toNumber(graphLink?.source?.y) + toNumber(graphLink?.target?.y)) / 2;

  // Динамические стили based на packetLoss
  const strokeColor = graphLink.packetLossPercentage > 50
    ? '#ef4444' // red-500 для высоких потерь
    : graphLink.packetLossPercentage > 20
      ? '#f59e0b' // amber-500 для средних потерь
      : '#10b981'; // emerald-500 для низких потерь

  const strokeWidth = Math.log2(graphLink.nominalCapacity / 100 + 1) + 1;

  const source = graphLink.source as any;
  const target = graphLink.target as any;

  const fontSize = 14;
  const offsetY = 10 + fontSize * 0.5;
  const offsetX = 25 + fontSize * 0.5;
  // Размеры прямоугольника
  const rectWidth = 60 + offsetX / 2 + fontSize * 0.5;
  const rectHeight = 30 + offsetY / 2 + fontSize * 0.5;

  return (
    <React.Fragment>
      {/* Линия связи */}
      <Line
        points={[source.x, source.y, target.x, target.y]}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        lineCap="round"
        shadowBlur={4}
        shadowOpacity={0.2}
      />
      {/* Фон для текста */}
      <Rect
        x={midX - rectWidth / 2}
        y={midY - rectHeight / 2}
        width={rectWidth}
        height={rectHeight}
        fill="white"
        opacity={0.9}
        stroke={'gray'}
        strokeWidth={2}
      />
      {/* Текст с параметрами связи */}
      <Text
        x={midX}
        y={midY}
        text={`${graphLink.packetLossPercentage}% loss\n${graphLink.nominalCapacity} Mbps`}
        fontSize={fontSize}
        fill="#374151"
        fontFamily="monospace"
        align="center"
        verticalAlign="middle"
        offsetX={offsetX}
        offsetY={offsetY}
        padding={2}
      />
    </React.Fragment>
  );
};
