import * as login from '../support/login.js';
import { 
    residents as residents, 
    guests as guests
  } from '../support/personas.js';
import { zWaveSelectors as selectors } from '../support/selectors.js';
import { placeholder as p } from '../support/placeholder.js'

describe('ZWave API endpoints', () => {
  // before('Before', () => {  }),

  beforeEach('Description', () => {
    login.to.badMagic();
    login.as.phys(residents.phys.guestEndpoint);
  }),

  it('01 Permanent Guest', ()=> {
    const request = {
      method: 'POST',
      url: `${residents.phys.guestEndpoint.replace(p.unit_id, residents.phys.unit_id)}`
    }

    cy.get(selectors.permanentGuestCode).click()
    cy.get(selectors.unitID).clear().type(residents.phys.unit_id)
    cy.get(selectors.firstName).clear().type(guests.firstName)
    cy.get(selectors.lastName).clear().type(guests.permanent.lastName)
    cy.get(selectors.phone).clear().type(guests.phone)
    cy.get(selectors.email).clear().type(guests.permanent.email)
    cy.intercept(request).as('request')
    cy.get(selectors.try).click()
    cy.get('@request').its('response').then( (response) => { 
      expect(response.statusCode).to.eq(201);
    })

  })// ,it('02 DESCRIPTION', ()=> {})


})
