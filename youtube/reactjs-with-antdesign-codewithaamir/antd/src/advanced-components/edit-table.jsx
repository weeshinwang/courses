import { Table, Button, Modal, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';

const EditTable = () => {
  const [editing, setEditing] = useState(false);
  const [editStudent, setEditingStudent] = useState({});
  const [data, setData] = useState([
    {
      id: '1',
      name: 'John',
      email: 'john@mail.com',
      address: 'John Address',
    },
    {
      id: '2',
      name: 'Mike',
      email: 'mike@mail.com',
      address: 'Mike Address',
    },
    {
      id: '3',
      name: 'Wayne',
      email: 'wayne@mail.com',
      address: 'Wayne Address',
    },
    {
      id: '4',
      name: 'Lucy',
      email: 'lucy@mail.com',
      address: 'Lucy Address',
    },
  ]);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: '4',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: '5',
      title: 'Delete',
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => onEdit(record)} />
            <DeleteOutlined
              onClick={() => onDelete(record)}
              style={{ color: 'red', marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: 'Name' + randomNumber,
      email: randomNumber + '@mail.com',
      address: 'Address' + randomNumber,
    };
    setData((pre) => [...pre, newStudent]);
  };

  const onEdit = (record) => {
    setEditing(true);
    setEditingStudent({ ...record });
  };

  const onDelete = (record) => {
    Modal.confirm({
      title: `Are you sure to delete ${record.name}`,
      okText: 'Yes',
      okType: 'danger',
      onOk: () =>
        setData((pre) => pre.filter((student) => student.id !== record.id)),
    });
  };

  const resetEditing = () => {
    setEditing(false);
    setEditingStudent(null);
  };

  console.log(editStudent);

  return (
    <>
      <Button onClick={onAddStudent} style={{ marginBottom: 24 }}>
        Add new student
      </Button>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
      ></Table>
      <Modal
        title='Edit Student'
        visible={editing}
        onCancel={() => resetEditing()}
        onOk={() => {
          setData((prev) => {
            return prev.map((student) => {
              if (student.id === editStudent.id) {
                return editStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
        okText='Save'
      >
        <Input
          value={editStudent?.name}
          style={{ marginBottom: 12 }}
          onChange={(event) => {
            event.persist();
            setEditingStudent((prev) => {
              return { ...prev, name: event.target.value };
            });
          }}
        ></Input>
        <Input
          value={editStudent?.email}
          style={{ marginBottom: 12 }}
          onChange={(event) => {
            event.persist();
            setEditingStudent((prev) => {
              return { ...prev, email: event.target.value };
            });
          }}
        ></Input>
        <Input
          value={editStudent?.address}
          style={{ marginBottom: 12 }}
          onChange={(event) => {
            event.persist();
            setEditingStudent((prev) => {
              return { ...prev, address: event.target.value };
            });
          }}
        ></Input>
      </Modal>
    </>
  );
};

export default EditTable;
