import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from '../components/admin/common/sidebar/Sidebar'
import AdminLayout from "../layout/admin/AdminLayout";
import Header from "../components/admin/common/header/Header.jsx";
import TravelManagement from '../pages/admin/travelManagement/travelManagement';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/admin/:paths?' exact>
            <AdminLayout className="wrapper">
             <Header/>
             <Sidebar/>
             
              <Route path="/admin/traveladmin" component={TravelManagement} />
            </AdminLayout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;


