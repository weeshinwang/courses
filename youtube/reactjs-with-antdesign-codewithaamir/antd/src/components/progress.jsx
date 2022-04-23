import { Progress } from 'antd';

const ProgressApp = () => {
  return (
    <>
      <Progress percent={33} />
      <Progress percent={33} steps={3} />
      <Progress percent={33} type='circle' status='success' />
      <Progress percent={33} />
      <Progress percent={33} type='circle' />
      <Progress percent={33} type='line' strokeColor='tomato' />
    </>
  );
};

export default ProgressApp;
