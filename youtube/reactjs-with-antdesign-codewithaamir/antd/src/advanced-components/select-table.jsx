import { Table, Tag } from 'antd';
import React, { useState } from 'react';
// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/lib/locale/zh_CN';

const SelectTable = () => {
  const [selectedRow, setSelectedRow] = useState(['1', '4']);
  const columns = [
    { title: 'Student ID', dataIndex: 'id' },
    { title: 'Student Name', dataIndex: 'name' },
    {
      title: 'Student Grade',
      dataIndex: 'grade',
      render: (tag) => {
        const color = tag.includes('A')
          ? 'lime'
          : tag.includes('B')
          ? 'cyan'
          : 'volcano';
        return (
          <Tag color={color} key={tag} style={{ color: 'black' }}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const dataSouce = [
    {
      key: '1',
      id: 1,
      name: 'Student A',
      grade: 'A+',
    },
    {
      key: '2',
      id: 2,
      name: 'Student B',
      grade: 'B+',
    },
    {
      key: '3',
      id: 3,
      name: 'Student C',
      grade: 'C+',
    },
    {
      key: '4',
      id: 4,
      name: 'Student D',
      grade: 'A',
    },
    {
      key: '5',
      id: 5,
      name: 'Student F',
      grade: 'B',
    },
  ];

  const locales = {
    selectionAll: '全选所有',
    selectInvert: '反选当页',
    selectNone: '反选当页',
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSouce}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: selectedRow,
          onChange: (key) => setSelectedRow(key),
          onSelect: (record) => console.log({ record }),
          getCheckboxProps: (record) => {
            return {
              // disabled: (record.grade === 'C') | (record.grade === 'C+'),
            };
          },
          hideSelectAll: false,
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              key: 'even',
              text: '选择偶数项',
              onSelect: (keys) => {
                const selectedKey = keys.filter((key) => key % 2 === 0);
                setSelectedRow(selectedKey);
              },
            },
            {
              key: 'excellent',
              text: '选择 A 或 A+ 的学生',
              onSelect: (keys) => {
                const selectedKey = keys.filter((key) => {
                  return dataSouce.find((student) => {
                    return (
                      student.key == key && student.grade.includes('A', 'A+')
                    );
                  });
                });
                setSelectedRow(selectedKey);
              },
            },
          ],
        }}
        locale={locales}
      ></Table>
    </>
  );
};

export default SelectTable;
