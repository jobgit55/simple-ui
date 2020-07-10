import React, {useState} from 'react';
import Button from './components/Button/Button';
import MenuItem from './components/Menu/MenuItem';
import Menu from './components/Menu/Menu';
import SubMenu from './components/Menu/SubMenu';
import Icon from './components/Icon/Icon';
import Transition from './components/Transition/Transition';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const App: React.FC = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" size="10x" theme="primary" />
        <Menu defaultIndex='0' onSelect={(index) => {alert(index)}} mode="vertical" defaultOpenSubMenus={['2']}>
            <MenuItem>
              menu item 1
            </MenuItem>
            <MenuItem>
              menu item 2
            </MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>
                dropdown 1
              </MenuItem>
              <MenuItem>
                dropdown 2
              </MenuItem>
            </SubMenu>    
            <MenuItem>
              menu item 3
            </MenuItem>
          </Menu>
          <Button size="lg" onClick={() => {setShow(!show)}}>
            Toggle
          </Button>
          <Transition
            in={show}
            timeout={300}
            animation="zoom-in-bottom"
            wrapper
          >
            <div><p>abc</p></div>
            <Button btnType="primary" size="lg">Primary Large Button</Button>
          </Transition>     
      </header>
    </div>
  );
}

export default App;
