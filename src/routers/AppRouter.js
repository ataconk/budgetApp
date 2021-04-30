import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import React from 'react';
import HelpPage from '../components/helpPage';
import ExpenseDashboardPage from '../components/expenseDashboard';
import EditExpensePage from '../components/editExpense';
import NotFoundPage from '../components/notFoundPage';
import AddExp from '../components/addExpense';

import LoginPage from '../components/loginPage';
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter  = () => (
    <Router history={history}>
        <div>

            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExp}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" components={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        

        </div>
    </Router>
);

export default AppRouter;