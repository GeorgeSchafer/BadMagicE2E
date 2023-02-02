import * as login from '../support/login.js';
import * as personas from '../support/personas.json';

describe('ZWave API endpoints', () => {
  before('Before', () => {
    let selectors = {
      unitID: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(1) > div > div > div.flex.flex-grow > input",
      firstName: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input",
      lastName: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input",
      phone: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input",
      email: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(4) > div > div.flex.flex-grow > input",
      activationType: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(5) > div > div.flex.flex-grow > input"
    }
    
  }),
  beforeEach('Description', () => {
    login.to.badMagic();
    login.as.phys();
  }),
  it('01 Permanent Guest', ()=> {
    
  })// ,it('02 DESCRIPTION', ()=> {})


})
