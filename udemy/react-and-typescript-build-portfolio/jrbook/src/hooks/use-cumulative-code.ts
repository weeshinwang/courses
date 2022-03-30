import { useTypedSelector } from './use-typed-selector';

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cell;
    const orderedCells = order.map((id) => data[id]);
    const printFunction = `
        import _React from 'react';
        import _ReactDOM from 'react-dom';
        let print = value => {
          const root = document.querySelector('#root');
          if(typeof value === 'object') {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, root);
            } else {
              root.innerHTML = JSON.stringify(value);
            }
          } else
          root.innerHTML = value;
        }
      `;
    const printFunctionNothing = 'print = () => {}';
    const cumulativeCodeArr = [];
    for (let c of orderedCells) {
      if (c.type === 'code') {
        if (c.id === cellId) {
          cumulativeCodeArr.push(printFunction);
        } else {
          cumulativeCodeArr.push(printFunctionNothing);
        }
        cumulativeCodeArr.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }

    return cumulativeCodeArr;
  }).join('\n');
};
