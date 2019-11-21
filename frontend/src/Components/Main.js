import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import UserAcount from './UserAccount/UserAccount';
import OtherUserAcount from './OtherUserAccount/OtherUserAccount';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';


const Main = () => (
    <Switch>
        <Route exact path="/HomePage" component={HomePage} />
        <Route path="/UserAcount" component={UserAcount} />
        <Route path="/OtherUserAccount" component={OtherUserAcount} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/SignUp" component={SignUp} />
    </Switch>
)

export default Main;