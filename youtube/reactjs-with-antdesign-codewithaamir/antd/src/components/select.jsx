import { Select } from 'antd';

const selectApp = () => {
  const fruits = ['Banana', 'Mango', 'Orange', 'Cherry'];
  return (
    <>
      <p>What is your favorite fruit?</p>
      <Select
        allowClear
        maxTagCount={2}
        placeholder='Select Fruit'
        mode='multiple'
      >
        {fruits.map((fruit, index) => {
          return <Select.Option key={index} value={fruit} />;
        })}
      </Select>
    </>
  );
};

export default selectApp;
