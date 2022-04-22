import { Table } from 'antd';

const TableApp = () => {
  const data = [
    {
      name: 'PERSON 1',
      age: 10,
      address: 'STREET 1',
      key: 1,
    },
    {
      name: 'PERSON 2',
      age: 61,
      address: 'STREET 2',
      key: 2,
    },
    {
      name: 'PERSON 3',
      age: 48,
      address: 'STREET 3',
      key: 3,
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (name) => {
        return <a onClick={{}}>{name}</a>;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'key',
      sorter: (a, b) => a.age - b.age,
    },
    { title: 'Address', dataIndex: 'address', key: 'key' },
    {
      title: 'Graduated',
      key: 'key',
      render: (payload) => {
        return <p>{payload.age > 30 ? 'Yes' : 'No'}</p>;
      },
    },
  ];

  return (
    <>
      <Table dataSource={data} columns={columns}></Table>
    </>
  );
};

export default TableApp;
