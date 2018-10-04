import React, {Component} from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    return <div>now loading</div>
  }
});

export default ()=><LoadableComponent />