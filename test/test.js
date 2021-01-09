import 'mocha';
import chai from 'chai';
import { Cursor } from '../app.js';
const { expect } = chai;

describe('cursor', () => {
  let cursor;
  beforeEach(() => cursor = new Cursor());

  it('reset, moves cursor to (0, 0)', () => {
    cursor.reset();

    expect(cursor.position).to.deep.equal({ x: 0, y: 0 });
  });

  it('goto, moves to position', () => {
    cursor.goto(1, 2);

    expect(cursor.position).to.deep.equal({ x: 1, y: 2 });
  });
});
