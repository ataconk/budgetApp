import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import HelpPage from '../components/helpPage';
import ExpenseDashboardPage from '../components/expenseDashboard';
import EditExpensePage from '../components/editExpense';
import NotFoundPage from '../components/notFoundPage';
import AddExp from '../components/addExpense';
import Header from '../components/header';
import LoginPage from '../components/loginPage';


const AppRouter  = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExp}/>
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" components={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        

        </div>
    </BrowserRouter>
);

export default AppRouter;