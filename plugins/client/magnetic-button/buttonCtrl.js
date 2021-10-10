import { EventEmitter } from 'events';
import {gsap} from 'gsap';
import { lerp, getMousePos, calcWinsize, distance } from '../utils';

// Calculate the viewport size
let winsize = calcWinsize();
// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-return-assign
window.addEventListener('resize', () => winsize = calcWinsize());

// Track the mouse position
let mousepos = {x: 0, y: 0};
window.addEventListener('mousemove', ev => (mousepos = getMousePos(ev)));

export default class ButtonCtrl extends EventEmitter {
  constructor(el) {
    super();
    // DOM elements
    // el: main button
    // text/textinner: inner text elements
    this.DOM = {el};
    this.DOM.text = this.DOM.el.querySelector('.magnetic-text');
    this.DOM.textinner = this.DOM.el.querySelector('.magnetic-text-inner');
    this.DOM.filler = this.DOM.el.querySelector('.magnetic-filler');
    // amounts the button will translate
    this.renderedStyles = {
      tx: {previous: 0, current: 0, amt: 0.1},
      ty: {previous: 0, current: 0, amt: 0.1}
    };
    // button state (hover)
    this.state = {
      hover: false
    };

    this.dataTriggerFactor = this.DOM.el.dataset.triggerFactor ?? .7;
    this.clss = this.DOM.el.dataset.magneticClss ?? null;

    this.position = this.getOffset(this.DOM.el);

    // calculate size/position
    this.calculateSizePosition();
    // this.position.top = +this.position.top + +this.dataOffset;


    // init events
    this.initEvents();



    // loop fn
    requestAnimationFrame(() => this.render());
  }

  getOffset(element) {
    if (!element.getClientRects().length)
    {
      return { top: 0, left: 0 };
    }

    const rect = element.getBoundingClientRect();
    const win = element.ownerDocument.defaultView;
    return (
      {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      });
  }

  calculateSizePosition() {
    // size/position
    // this.rect = this.DOM.el.getBoundingClientRect();
    this.position = this.getOffset(this.DOM.el);
    // the movement will take place when the distance from the mouse to the center of the button is lower than this value
    // this.distanceToTrigger = this.rect.width*0.7;
    this.distanceToTrigger = this.DOM.el.clientWidth*this.dataTriggerFactor;
  }

  initEvents() {
    this.onResize = () => this.calculateSizePosition();
    window.addEventListener('resize', this.onResize);
  }

  render() {
    window.dispatchEvent(new Event('resize'));
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(mousepos.x+window.scrollX, mousepos.y+window.scrollY, this.position.left + this.DOM.el.clientWidth/2, this.position.top + this.DOM.el.clientHeight/2);
    // const distanceMouseButton = this.calculateDistance(this.DOM.el, mousepos.x, mousepos.y);
    // console.log(this.position)
    // console.log(distanceMouseButton);

    // new values for the translations
    let x = 0;
    let y = 0;

    if ( distanceMouseButton < this.distanceToTrigger ) {
      if ( !this.state.hover ) {
        this.enter(this.clss);
      }
      x = (mousepos.x + window.scrollX - (this.position.left + this.DOM.el.clientWidth/2))*.3;
      y = (mousepos.y + window.scrollY - (this.position.top + this.DOM.el.clientHeight/2))*.3;
    }
    else if ( this.state.hover ) {
      this.leave(this.clss);
    }

    this.renderedStyles.tx.current = x;
    this.renderedStyles.ty.current = y;

    for (const key in this.renderedStyles ) {
      this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }

    this.DOM.el.style.transform = `translate3d(${this.renderedStyles.tx.previous}px, ${this.renderedStyles.ty.previous}px, 0)`;
    this.DOM.text.style.transform = `translate3d(${-this.renderedStyles.tx.previous*0.6}px, ${-this.renderedStyles.ty.previous*0.6}px, 0)`;

    requestAnimationFrame(() => this.render());
  }

  enter(clss) {
    this.emit('enter', clss);
    this.state.hover = true;
    this.DOM.el.classList.add('magnetic-hover');
    this.DOM.el.classList.add(clss);
    document.body.classList.add('active');

    gsap.killTweensOf(this.DOM.filler);
    gsap.killTweensOf(this.DOM.textinner);

    const timeline = gsap.timeline();
    if (this.DOM.filler) {
      timeline.to(this.DOM.filler, 0.5, {
        ease: 'Power3.easeOut',
        startAt: {y: '75%'},
        y: '0%'
      })
    }
    timeline
      .to(this.DOM.textinner, 0.1, {
        ease: 'Power3.easeOut',
        opacity: 0,
        y: '-10%'
      }, 0)
      .to(this.DOM.textinner, 0.25, {
        ease: 'Power3.easeOut',
        opacity: 1,
        startAt: {y: '30%', opacity: 1},
        y: '0%'
      }, 0.1);
  }

  leave(clss) {
    this.emit('leave', clss);
    this.state.hover = false;
    this.DOM.el.classList.remove('magnetic-hover');
    this.DOM.el.classList.remove(clss);
    document.body.classList.remove('active');

    gsap.killTweensOf(this.DOM.filler);
    gsap.killTweensOf(this.DOM.textinner);

    const timeline = gsap.timeline();
    if (this.DOM.filler) {
      timeline.to(this.DOM.filler, 0.4, {
        ease: 'Power3.easeOut',
        y: '-75%'
      })
    }
    timeline
      .to(this.DOM.textinner, 0.1, {
        ease: 'Power3.easeOut',
        opacity: 0,
        y: '10%'
      }, 0)
      .to(this.DOM.textinner, 0.25, {
        ease: 'Power3.easeOut',
        opacity: 1,
        startAt: {y: '-30%', opacity: 1},
        y: '0%'
      }, 0.1);
  }
}
