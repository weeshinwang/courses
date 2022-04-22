import { Form, Input, Button, message, Alert } from 'antd';
import { useState } from 'react';
import styled from 'styled-components/macro';

const MsgApp = () => {
  const [alert, setAlert] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
    setTimeout(() => {
      setAlert(true);
    }, 2000);
  };

  return (
    <Wrapper>
      {alert && (
        <Alert
          type='error'
          message='error'
          description='Login Failed'
          closable
        ></Alert>
      )}
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 19 }}
        labelAlign='left'
        autoComplete='off'
        onFinish={onFinish}
      >
        <Form.Item label='User Name' name='username'>
          <Input placeholder='username' required></Input>
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input.Password placeholder='password' required></Input.Password>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type='primary' htmlType=''>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
`;

export default MsgApp;
