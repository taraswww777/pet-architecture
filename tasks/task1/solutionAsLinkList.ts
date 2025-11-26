/***
 Можно написать в лоб
 ```js
 [[null, new NetworkNode(10,100)],[new NetworkNode(12,123), null]]
 ```
 Но, мне такая запись не нравится по этому связи опишем более структурно
 */

interface BaseConnectionItem {
  target: BaseNode,
}

interface BaseNode {
  connections: BaseConnectionItem[]
}


/** В java пришлось бы писать класс, но в TS мы можем сократить просто написав interface */
interface ConnectionItem extends BaseConnectionItem {
  bandWith: number,
  lostPerson: number,
}

class AbstractBaseNode implements BaseNode {
  connections = [];
}


class NetworkNode extends AbstractBaseNode implements BaseNode {
  private __name: string;

  constructor(name: string) {
    super();
    this.__name = name;
  }

  addConnection(
    target: ConnectionItem['target'],
    bandWith: ConnectionItem['bandWith'],
    lostPerson: ConnectionItem['lostPerson']
  ) {
    this.connections.push({ target, bandWith, lostPerson })
  }
}


// Введём в эксплуатацию наши узлы
const A = new NetworkNode('A');
const B = new NetworkNode('B');
const C = new NetworkNode('C');
const D = new NetworkNode('D');
const E = new NetworkNode('E');
const F = new NetworkNode('F');

// Установим связи между нашими узлами

A.addConnection(B, 1500, 90);
A.addConnection(C, 2000, 10);
A.addConnection(D, 1000, 50);

B.addConnection(A, 1500, 90);
B.addConnection(F, 1500, 60);

C.addConnection(A, 2000, 10);
C.addConnection(F, 500, 20);
C.addConnection(E, 900, 5);

D.addConnection(A, 1500, 90);
D.addConnection(E, 2500, 1);

E.addConnection(D, 2500, 1);
E.addConnection(C, 900, 5);
E.addConnection(F, 300, 85);

F.addConnection(B, 1500, 60);
F.addConnection(C, 500, 20);
F.addConnection(E, 300, 85);


// сложим всё в массив
/** 1. Представление узлами */
const allNodes: BaseNode[] = [A, B, C, D, E, F];

// Теперь у нас есть связанный список

// Посмотрим на связи узла B через узел A
// console.log('Links B:', allNodes?.[0]?.connections?.[0]?.target?.connections);

// Теперь нужно преобразовать наши данные в матричный вид

type Matrix = Array<Array<Omit<BaseNode,'connections'> | null>>;

const nodesToMatrix = (nodes: BaseNode[]): Matrix => {
  const indexMap = new Map();
  nodes.forEach((node, index) => {
    indexMap.set(node, index)
  });

  // Создадим массив в котором заранее определены все элементы
  // и по умолчанию значение Array<Array<null>>
  const matrix: Array<Array<BaseNode | null>> = Array(nodes.length)
    .fill(null)
    .map(() => Array(nodes.length).fill(null));

  // Теперь нам нужно заполнить matrix
  nodes.forEach((node) => {
    const fromIndex = indexMap.get(node);

    node.connections.forEach(({ target, ...props }) => {
      const toIndex = indexMap.get(target);
      // Тут можно сделать и точнее явно указав bandWith и lostPerson,
      // но язык позволяет в этом месте срезать
      matrix[fromIndex][toIndex] = props;
    })
  });

  return matrix;
}

/** 2. Представление массивом (матрица смежности) */
const matrix: Matrix = nodesToMatrix(allNodes);


console.log('allNodes:', allNodes)
console.log('matrix:', matrix)

