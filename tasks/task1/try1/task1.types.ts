export interface Server {
  name: string;
}

export interface Link {
  from: Server;
  to: Server;
  /** процент потерянных пакетов */
  packetLossPercentage: number;
  /** номинальная пропускная способность среды */
  nominalCapacity: number;
}