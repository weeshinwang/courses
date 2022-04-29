import { Input, Table, Button } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const SearchTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filterDropdown: ({
        selectedKeys,
        setSelectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'space-between' }}>
            <Input
              autoFocus
              placeholder='Search Here'
              value={selectedKeys}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type='primary'
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
                setSelectedKeys([]);
                confirm();
              }}
              type='danger'
            >
              Reset
            </Button>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const initialState = [
    {
      name: 'John',
      age: 32,
      address: 'Sydney',
    },
    {
      name: 'Tim',
      age: 12,
      address: 'Japan',
    },
    {
      name: 'King',
      age: 36,
      address: 'New York',
    },
    {
      name: 'Ben',
      age: 22,
      address: 'Lodon',
    },
  ];
  const [data, setData] = useState(initialState);

  return (
    <>
      <Table columns={columns} dataSource={data}></Table>
    </>
  );
};

export default SearchTable;
