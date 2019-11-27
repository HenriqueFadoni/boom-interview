import React, { FunctionComponent } from 'react';

import Table from './components/Table/Table';
import DetailedView from './components/DetailedView/DetailedView';

const App: FunctionComponent = () => (
  <div className="App">
    <Table />
    <DetailedView />
  </div>
);

export default App;
