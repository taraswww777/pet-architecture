import type { Link, Server } from './task1.types';
import {
  serverA,
  serverB,
  serverC,
  serverD,
  serverE,
  serverF,
  linkAB,
  linkAC,
  linkAD,
  linkBF,
  linkCF,
  linkCE,
  linkDE,
  linkEF,
} from './data';

export interface TreeNode {
  server: Server;
  neighbors: { node: TreeNode; link: Link }[];
}


const nodeA: TreeNode = { server: serverA, neighbors: [] };
const nodeB: TreeNode = { server: serverB, neighbors: [] };
const nodeC: TreeNode = { server: serverC, neighbors: [] };
const nodeD: TreeNode = { server: serverD, neighbors: [] };
const nodeE: TreeNode = { server: serverE, neighbors: [] };
const nodeF: TreeNode = { server: serverF, neighbors: [] };

nodeA.neighbors.push({ node: nodeB, link: linkAB });
nodeA.neighbors.push({ node: nodeC, link: linkAC });
nodeA.neighbors.push({ node: nodeD, link: linkAD });

nodeB.neighbors.push({ node: nodeA, link: linkAB });
nodeB.neighbors.push({ node: nodeF, link: linkBF });

nodeC.neighbors.push({ node: nodeA, link: linkAC });
nodeC.neighbors.push({ node: nodeF, link: linkCF });
nodeC.neighbors.push({ node: nodeE, link: linkCE });

nodeD.neighbors.push({ node: nodeA, link: linkAD });
nodeD.neighbors.push({ node: nodeE, link: linkDE });

nodeE.neighbors.push({ node: nodeC, link: linkCE });
nodeE.neighbors.push({ node: nodeD, link: linkDE });
nodeE.neighbors.push({ node: nodeF, link: linkEF });

nodeF.neighbors.push({ node: nodeB, link: linkBF });
nodeF.neighbors.push({ node: nodeC, link: linkCF });
nodeF.neighbors.push({ node: nodeE, link: linkEF });

export const nodes: TreeNode[] = [nodeA, nodeB, nodeC, nodeD, nodeE, nodeF];

console.log('nodes:', nodes);
