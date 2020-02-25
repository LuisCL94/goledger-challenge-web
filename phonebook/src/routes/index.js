import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import View from '../pages/View';
// import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        {/* <Route path="/infoContact/:infoContact" component={InfoClient} />
        <Route path="/infoCompany/:infoCompany" component={EditClient} /> */}
        {/* <Route path="/info/:info" component={View} />
        <Route path="/edit/:edit" component={Edit} /> */}
        <Route path="/view/:typeAsset/:name" component={View} />
      </Switch>
    </BrowserRouter>
  );
}