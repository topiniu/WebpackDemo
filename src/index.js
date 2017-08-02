import _ from 'lodash';
import './style.css';
import m from './md.md'
import Icon from './icon.png';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], '');
  element.innerHTML = m;
  // element.classList.add('hello');

  // var myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());