import { Table } from 'antd';
import { useEffect, useState } from 'react';

const PaginatedTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'User ID',
      dataIndex: 'userId',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      key: '3',
      title: 'Title',
      dataIndex: 'title',
    },
    {
      key: '4',
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return (
          <p style={{ color: completed ? 'green' : 'red' }}>
            {completed ? 'Completed' : 'In Progress'}
          </p>
        );
      },
      filters: [
        { text: 'Completed', value: true },
        { text: 'In Progress', value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          page,
          pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
    </>
  );
};

export default PaginatedTable;
