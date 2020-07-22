import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

const DURATION = 400; // ms
const ENTER_DELAY = 200; // ms

const EASING = 'ease-out';
const ENTER_TIMING = `${DURATION}ms ${ENTER_DELAY}ms ${EASING}`;
const LEAVE_TIMING = `${DURATION}ms ${EASING}`;

const BASE = {
  // silence is golden
};
const ACTIVE = {
  opacity: 1,
};
const INACTIVE = {
  opacity: 0,
};
const LEAVING = {
  zIndex: '10',
};
const ENTERING = {
  zIndex: '5',
};

export const pageTransition = trigger('pageTransition', [
  state('*', style(BASE)),
  transition(':enter', [
    style({ ...INACTIVE, ...ENTERING }),
    animate(ENTER_TIMING, style(ACTIVE)),
  ]),
  transition(':leave', [
    style({ ...ACTIVE, ...LEAVING }),
    animate(LEAVE_TIMING, style(INACTIVE)),
  ]),
]);
