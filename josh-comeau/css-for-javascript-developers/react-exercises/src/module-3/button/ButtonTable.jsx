import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const ButtonTable = () => {
  return (
    <Table cellSpacing={0} cellPadding={0}>
      <tr>
        <th></th>
        <th>Fill</th>
        <th>Outline</th>
        <th>Ghost</th>
      </tr>
      <tr>
        <td>Small</td>
        <td>
          <Button size='small' variant='fill'>
            Button
          </Button>
        </td>
        <td>
          <Button size='small' variant='outline'>
            Button
          </Button>
        </td>
        <td>
          <Button size='small' variant='ghost'>
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Medium</td>
        <td>
          <Button size='medium' variant='fill'>
            Button
          </Button>
        </td>
        <td>
          <Button size='medium' variant='outline'>
            Button
          </Button>
        </td>
        <td>
          <Button size='medium' variant='ghost'>
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Large</td>
        <td>
          <Button size='large' variant='fill'>
            Button
          </Button>
        </td>
        <td>
          <Button size='large' variant='outline'>
            Button
          </Button>
        </td>
        <td>
          <Button size='large' variant='ghost'>
            Button
          </Button>
        </td>
      </tr>
    </Table>
  );
};

/**
 * NOTE: This `Table` component uses nesting, which
 * is something we've frowned on in this course!
 *
 * Before you label me a hypocrite, please note that
 * this component is used exclusively for demonstration
 * purposes; it exists to showcase the `Button` component,
 * and isn't something we'll use in our app. So we can
 * be a bit more lenient.
 *
 * Furthermore, we aren't "reaching across" any component
 * boundaries; no `children` prop is accepted. This is a
 * slippery slope, but it can be fine to do things this way
 * if you're disciplined!
 */
const Table = styled.table`
  font-family: sans-serif;

  th,
  td {
    text-align: center;
    padding: 16px;
  }
  th {
    border-bottom: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type,
  th:first-of-type {
    border-right: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type {
    text-align: right;
  }
`;

export default ButtonTable;
