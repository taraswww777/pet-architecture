import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  SimulationLinkDatum,
  SimulationNodeDatum,
} from 'd3-force';
import { Link, Server } from 'tasks/task1/task1.types.ts';

export interface GraphNode extends Server, SimulationNodeDatum {
  id: string;
}

export interface GraphLink extends Link {
  source: GraphNode;
  target: GraphNode;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export function calculateLayout(links: Link[]): GraphData {
  // Извлекаем уникальные узлы из связей
  const nodeMap = new Map<string, GraphNode>();
  links.forEach(link => {
    if (!nodeMap.has(link.from.name)) {
      nodeMap.set(link.from.name, { ...link.from, id: link.from.name });
    }
    if (!nodeMap.has(link.to.name)) {
      nodeMap.set(link.to.name, { ...link.to, id: link.to.name });
    }
  });

  const nodes = Array.from(nodeMap.values()).map(node => ({
    ...node,
    x: Math.random() * 800,
    y: Math.random() * 600,
  }));

  const nodeById = new Map(nodes.map(node => [node.id, node]));

  // Преобразуем links в формат для d3-force
  const forceLinks: SimulationLinkDatum<GraphNode>[] = links.map(link => ({
    source: link.from.name,
    target: link.to.name,
  }));

  // Создаем расширенную force simulation с дополнительными силами
  const simulation = forceSimulation(nodes)
    .force('charge', forceManyBody()
      .strength(-1000) // Увеличиваем отталкивание
      .distanceMax(8000)) // Ограничиваем максимальное расстояние
    .force('link', forceLink(forceLinks)
      .id((d: any) => d.id)
      .distance(250) // Оптимальное расстояние для читаемости
      .strength(0.7)) // Сила притяжения связей
    .force('collision', forceCollide() // Сила столкновения для узлов
      .radius(40) // Радиус столкновения
      .strength(0.8))
    .force('center', forceCenter(400, 300))
    .alphaMin(0.001) // Минимальное значение alpha для точной сходимости
    .alphaDecay(0.02); // Медленное затухание для лучшего результата

  // Запускаем расчет на большее количество итераций
  for (let i = 0; i < 500; i++) {
    simulation.tick();
  }
  simulation.stop();

  // Восстанавливаем оригинальные связи
  const graphLinks: GraphLink[] = links.map(link => ({
    ...link,
    source: nodeById.get(link.from.name)!,
    target: nodeById.get(link.to.name)!,
  }));

  return {
    nodes,
    links: graphLinks,
  };
}