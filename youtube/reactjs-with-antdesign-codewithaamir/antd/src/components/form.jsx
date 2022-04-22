import { Form, Input, Button } from 'antd';
import styled from 'styled-components/macro';

const FormApp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Wrapper>
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

export default FormApp;
