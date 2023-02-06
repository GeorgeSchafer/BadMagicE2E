import * as credentials from './credentials.json'
import * as personas from './personas'
import { loginSelectors as selectors } from './selectors'

const to = {
    badMagic : () => {
        cy.visit(credentials.url)
        cy.get(selectors.cookieBanner).click()
        cy.get(selectors.credentialsEmail).type(credentials.email)
        cy.get(selectors.submitCredentialsEmail).click()
        cy.get(selectors.credentialsPassword).type(credentials.password)
        cy.get(selectors.submitCredentialsPassword).click()
        cy.get(selectors.workspaceMenuButton).click()
        cy.get(selectors.workspaceMenuSelectAll).click()
        cy.get(selectors.workspaceMenuClose).click()
    }
};

const as = {
    salto: (apiURL) => {
        cy.get(selectors.apiURL).type(personas.residents.salto.guestEndpoint)
        cy.get(selectors.element4).click()
        cy.get(selectors.element5).click()
        cy.get(selectors.profileName).type(personas.residents.salto.profileName)
        cy.get(selectors.email).type(personas.residents.salto.email)
        cy.get(selectors.password).type(credentials.resident_password)
        cy.get(selectors.saveProfile).click()
    },

    phys: (apiURL) => {
        cy.get(selectors.apiURL).type(personas.residents.phys.guestEndpoint)
        cy.get(selectors.element4).click()
        cy.get(selectors.element5).click()
        cy.get(selectors.profileName).type(personas.residents.phys.profileName)
        cy.get(selectors.email).type(personas.residents.phys.email)
        cy.get(selectors.password).type(credentials.resident_password)
        cy.get(selectors.saveProfile).click()
    }
}

export {to, as};