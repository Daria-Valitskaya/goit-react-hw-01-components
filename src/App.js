import './App.css';
import Section from './components/Section';
import ProfileList from './components/Profile/ProfileList';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friend.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import transactions from './components/Transaction/transactions.json';
function App() {
  return (
    <div>
      <Section title="Задание 1 - Профиль социальной сети">
        <ProfileList />
      </Section>
      <Section title="Задание 2 - Секция статистики">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section title="Задание 3 - Список друзей">
        <FriendList friends={friends} />
      </Section>
      <Section title="Задание 4 - История транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
