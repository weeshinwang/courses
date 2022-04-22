import { Button } from 'antd';
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';

const ButtonApp = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Button
      type='primary'
      block
      onClick={handleClick}
      loading={loading}
      icon={<PoweroffOutlined />}
      className='my-btn'
      style={{ backgroundColor: 'tomato', border: 'none' }}
    >
      {`${loading}`}
    </Button>
  );
};

export default ButtonApp;
