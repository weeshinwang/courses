import { Spin, Button } from 'antd';
import { useState } from 'react';

const SpinApp = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Spin spinning={loading}></Spin>
      <Button onClick={() => setLoading((preValue) => !preValue)}>
        Toggle Spinning
      </Button>
      <Spin spinning={loading}>
        <p>TAG1</p>
        <p>TAG2</p>
        <p>TAG3</p>
      </Spin>
    </>
  );
};

export default SpinApp;
