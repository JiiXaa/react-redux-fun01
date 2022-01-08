import React from 'react';
import { selectSong } from '../actions';
import '../index.css';

import SongList from './SongList';
import SongDetail from './SongDetail';

export default function App() {
  return (
    <div id='my-container' className='ui centered grid middle aligned'>
      <div className='ui row'>
        <div className='column four wide'>
          <SongList />
        </div>
        <div className='column four wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
}
