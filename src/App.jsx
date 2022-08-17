import { observer } from 'mobx-react-lite';
import './App.scss';
import telegramWebApi from './telegramWebApi';

function App() {
  let data = telegramWebApi.initDataUnsafe
  return (
    <div className="App">
      <h4>{data.query_id}</h4>
      <h4>{data.user.id}</h4>
      <h4>{data.user.first_name}</h4>
      <h4>{data.user.last_name}</h4>
      <h4>{data.user.username}</h4>
      <h4>{data.user.language_code}</h4>
      <h4>{data.auth_date}</h4>
      <h4>{data.hash}</h4>
    </div>
  );
}

export default observer(App);
