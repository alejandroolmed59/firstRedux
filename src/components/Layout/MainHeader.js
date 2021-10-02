import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useDispatch} from 'react-redux'
import {toggleActions} from '../../redux/slice/toggleSlice'

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const togglear = () =>{
    dispatch(toggleActions.toggle())
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li onClick={togglear}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
