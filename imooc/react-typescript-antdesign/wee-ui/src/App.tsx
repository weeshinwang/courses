import Button, { ButtonType, ButtonSize } from './components/button/button';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button>DEFAULT</Button>
        <Button disabled>DISABLED</Button>
        <Button btnType='primary' size='lg'>
          PRIMARY
        </Button>
        <Button btnType='danger' size='sm'>
          PRIMARY
        </Button>
        <Button btnType='link' target='_blank' href='https://www.baidu.com'>
          LINK
        </Button>
      </header>
    </div>
  );
}

export default App;
