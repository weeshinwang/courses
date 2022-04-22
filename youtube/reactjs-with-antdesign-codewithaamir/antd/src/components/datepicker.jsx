import { DatePicker, TimePicker } from 'antd';

const PickerApp = () => {
  return (
    <>
      <DatePicker picker='quarter'></DatePicker>
      <DatePicker.RangePicker picker='month' />
      <TimePicker />
    </>
  );
};

export default PickerApp;
