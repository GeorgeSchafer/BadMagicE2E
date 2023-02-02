import * as login from '../support/login.js';
import * as personas from '../support/personas.json';

describe('Salto API endpoints', () => {
  before('intercept all of the posts!', () => {
    const selectors = {
      unitID: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(1) > div > div > div.flex.flex-grow > input'
      , firstName: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input'
      , lastName: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input'
      , phone: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input'
      , guestCredentialType: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(4) > div > div.flex.flex-grow > input'

    };
  }),
  beforeEach('Open Login Page, dismiss cookies banner, log in to profile', () => {
    login.to.badMagic();
    login.as.salto();
  }),
  it('01 Create Permanent', () => {
    cy.get(selectors.unitID).type(personas.residents.salto.unit_id)
    cy.get(selectors.firstName).clear()
    cy.get(selectors.firstName).type(personas.guests.permanent.firstName)
    cy.get(selectors.lastName).clear()
    cy.get(selectors.lastName).type(personas.guests.permanent.lastName)
    cy.get(selectors.phone).clear()
    cy.get(selectors.phone).type(personas.guests.permanent.phone)
    cy.get(selectors.guestCredentialType).clear()
    cy.get(selectors.guestCredentialType).select(personas.residents.salto.guestCredentialType)

    // cy.intercept('POST','/api/*').as('request')
    cy.request('/api/v1/units/284303/access').as('request')
    cy.log('adding the /api/* intercept')
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div.flex > button.bg-blue-500').click()
    cy.get('@request').then((request) => {
      console.log(request);
      expect(request.response.statusCode).to.eq(422);
    })
  })
  // , it('02 Create Temporary', ()=> {

  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(1) > div > div > div.flex.flex-grow > input').type(personas.residents.salto.unit_id)
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input').clear()
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input').type(personas.guests.temporary.firstName)
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input').clear()
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input').type(personas.guests.temporary.lastName)
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input').clear()
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input').type(personas.guests.temporary.phone)
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(4) > div > div.flex.flex-grow > input').clear()
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(5) > div > div.flex.flex-grow > div > select').select(personas.residents.salto.guestCredentialType)
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(6) > div > div.flex.flex-grow > input').type((new Date((new Date()).valueOf() + 300000)).toJSON())
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(7) > div > div.flex.flex-grow > input').type((new Date((new Date()).valueOf() + (300000 * 2))).toJSON())
  //   cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div.flex > button.bg-blue-500').click()

  //   // cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div:nth-child(2) > div.mb-1 > div')
  //   //   .then((element)=>{
  //   //     expect(element[0].innerText).to.equal("200")
  //   //    })
  // })

})

