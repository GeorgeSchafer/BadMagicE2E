import * as login from '../support/login.json';
import * as personas from '../support/personas.json';

describe('Salto API endpoints', () => {
  beforeEach('Open Login Page, dismiss cookies banner, log in to profile', () => {
    cy.visit(login.url)
    cy.get('#onetrust-reject-all-handler').click()
    cy.get('#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(3) > div > input').type(login.email)
    cy.get('#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(4) > div').click()
    cy.get('#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(2) > div > input').type(login.password)
    cy.get('#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(3) > div > div').click()
    cy.get('body > div > div > div.flex.justify-between.items-center.p-2.w-full.border-b.z-10.bg-gray-200.border-gray-400 > div:nth-child(2) > div > button').click()
    cy.get('body > div > div > div.flex.justify-between.items-center.p-2.w-full.border-b.z-10.bg-gray-200.border-gray-400 > div:nth-child(2) > div > div > div.px-2.text-gray-800 > div.flex.justify-between.items-center.my-2 > button').click()
    cy.get('body > div > div > div.flex.justify-between.items-center.p-2.w-full.border-b.z-10.bg-gray-200.border-gray-400 > div:nth-child(2) > div > div > div.flex.self-end > button').click()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-1 > div > div > input').type('/api/v1/units/:unit_id/access')
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-1 > div > div > div.overflow-y-scroll.overflow-x-hidden > div:nth-child(5) > div:nth-child(3) > div.flex.items-baseline > div.font-bold').click()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > button').click()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > input:nth-child(2)').type('Salto')
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > input:nth-child(3)').type(personas.residents.salto.email)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > input:nth-child(4)').type(login.resident_password)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > div.flex.mt-4 > button.bg-blue-500').click()
  }),
  it('01 Create Permanent', ()=> {
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(1) > div > div > div.flex.flex-grow > input').type(personas.residents.salto.unit_id)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input').type(personas.guests.permanent.firstName)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input').type(personas.guests.permanent.lastName)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input').type(personas.guests.permanent.phone)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(4) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(5) > div > div.flex.flex-grow > div > select').select(personas.residents.salto.guestCredentialType)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div.flex > button.bg-blue-500').click()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div:nth-child(2) > div.mb-1 > div')
      .then((element)=>{
        expect(element[0].innerText).to.equal("200")
       })
  }),
  it('02 Create Temporary', ()=> {

    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(1) > div > div > div.flex.flex-grow > input').type(personas.residents.salto.unit_id)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input').type(personas.guests.temporary.firstName)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input').type(personas.guests.temporary.lastName)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input').type(personas.guests.temporary.phone)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(4) > div > div.flex.flex-grow > input').clear()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(5) > div > div.flex.flex-grow > div > select').select(personas.residents.salto.guestCredentialType)
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(6) > div > div.flex.flex-grow > input').type((new Date((new Date()).valueOf() + 300000)).toJSON())
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(7) > div > div.flex.flex-grow > input').type((new Date((new Date()).valueOf() + (300000 * 2))).toJSON())
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div.flex > button.bg-blue-500').click()
    cy.get('body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div:nth-child(2) > div.mb-1 > div')
      .then((element)=>{
        expect(element[0].innerText).to.equal("200")
       })
  })

})

