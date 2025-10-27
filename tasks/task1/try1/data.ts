import type { Link, Server } from './task1.types';

export const serverA: Server = { name: 'A' };
export const serverB: Server = { name: 'B' };
export const serverC: Server = { name: 'C' };
export const serverD: Server = { name: 'D' };
export const serverE: Server = { name: 'E' };
export const serverF: Server = { name: 'F' };

export const linkAB: Link = { from: serverA, to: serverB, nominalCapacity: 1500, packetLossPercentage: 90 };
export const linkAC: Link = { from: serverA, to: serverC, nominalCapacity: 2000, packetLossPercentage: 10 };
export const linkAD: Link = { from: serverA, to: serverD, nominalCapacity: 1000, packetLossPercentage: 50 };
export const linkBF: Link = { from: serverB, to: serverF, nominalCapacity: 1500, packetLossPercentage: 60 };
export const linkCF: Link = { from: serverC, to: serverF, nominalCapacity: 500, packetLossPercentage: 20 };
export const linkCE: Link = { from: serverC, to: serverE, nominalCapacity: 900, packetLossPercentage: 5 };
export const linkDE: Link = { from: serverD, to: serverE, nominalCapacity: 2500, packetLossPercentage: 1 };
export const linkEF: Link = { from: serverE, to: serverF, nominalCapacity: 300, packetLossPercentage: 85 };
