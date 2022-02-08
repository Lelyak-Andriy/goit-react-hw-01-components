import React from "react";
import './App.css';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/data.json';
import FriendList from './components/FriendList/FriendList';
import friendsData from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionData from './data/transactions.json'


function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title='UPLOAD STATS' stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </>
  );
}

export default App;
