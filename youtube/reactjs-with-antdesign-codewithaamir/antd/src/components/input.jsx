import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const InputApp = () => {
  return (
    <Input.Search
      placeholder='name'
      maxLength={10}
      prefix={<UserOutlined />}
      allowClear
      disabled={false}
    ></Input.Search>
  );
};

export default InputApp;
