import './style.css';
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from 'motion';

inView('.textinviewleft', () => {
  animate('.textinviewleft', { x: [-2000, 0] }, { duration: 2 });
});

inView('.textinviewright', () => {
  animate('.textinviewright', { x: [2000, 0] }, { duration: 2 });
});
