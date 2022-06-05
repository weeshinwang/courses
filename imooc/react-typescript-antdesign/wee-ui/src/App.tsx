import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='menu'>
          <Menu defaultIndex='0' onSelect={(i) => alert(i)}>
            <MenuItem index='1'>COOL LINK1</MenuItem>
            <MenuItem index='2' disabled>
              COOL LINK2
            </MenuItem>
            <MenuItem index='3'>COOL LINK3</MenuItem>
          </Menu>
        </div>
        <div className='button'>
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
        </div>
      </header>
    </div>
  );
}

export default App;
