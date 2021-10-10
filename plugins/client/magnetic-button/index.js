import Cursor from '../cursor';
import ButtonCtrl from './buttonCtrl';

const cursor = new Cursor(document.querySelector('#cursor'));
// const button = new ButtonCtrl(document.querySelector('#filter-0'));
// button.on('enter', () => cursor.enter());
// button.on('leave', () => cursor.leave());
document.querySelectorAll('.magnetic').forEach(($btn) => {
  const button = new ButtonCtrl($btn);

  button.on('enter', (clss) => cursor.enter(clss));
  button.on('leave', (clss) => cursor.leave(clss));
})

