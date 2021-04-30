import { Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import React from 'react';
import ExpenseDashboardPage from '../components/expenseDashboard';
import EditExpensePage from '../components/editExpense';
import NotFoundPage from '../components/notFoundPage';
import AddExp from '../components/addExpense';

import LoginPage from '../components/loginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter  = () => (
    <Router history={history}>
        <div>

            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExp}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PublicRoute component={NotFoundPage} />
            </Switch>
        

        </div>
    </Router>
);

export default AppRouter;