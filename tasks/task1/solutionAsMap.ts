interface Server {
  name: string;
}

interface Link {
  from: Server;
  to: Server;
  /** процент потерянных пакетов */
  packetLossPercentage: number;
  /** номинальная пропускная способность среды */
  nominalCapacity: number;
}

const serverA: Server = { name: 'A' };
const serverB: Server = { name: 'B' };
const serverC: Server = { name: 'C' };
const serverD: Server = { name: 'D' };
const serverE: Server = { name: 'E' };
const serverF: Server = { name: 'F' };


const linkAB: Link = { from: serverA, to: serverB, nominalCapacity: 1500, packetLossPercentage: 90 };
const linkAC: Link = { from: serverA, to: serverC, nominalCapacity: 2000, packetLossPercentage: 10 };
const linkAD: Link = { from: serverA, to: serverD, nominalCapacity: 1000, packetLossPercentage: 50 };
const linkBF: Link = { from: serverB, to: serverF, nominalCapacity: 1500, packetLossPercentage: 60 };
const linkCF: Link = { from: serverC, to: serverF, nominalCapacity: 500, packetLossPercentage: 20 };
const linkCE: Link = { from: serverC, to: serverE, nominalCapacity: 900, packetLossPercentage: 5 };
const linkDE: Link = { from: serverD, to: serverE, nominalCapacity: 2500, packetLossPercentage: 1 };
const linkEF: Link = { from: serverE, to: serverF, nominalCapacity: 300, packetLossPercentage: 85 };


export const links: Link[] = [
  linkAB,
  linkAC,
  linkAD,
  linkBF,
  linkCF,
  linkCE,
  linkDE,
  linkEF,
];

console.log('links:', links);