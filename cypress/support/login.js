import * as credentials from './credentials.json'
import * as personas from './personas.json'

const selectors = {
    cookieBanner: '#onetrust-reject-all-handler',
    credentialsEmail: '#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(3) > div > input',
    submitCredentialsEmail: '#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(4) > div',
    credentialsPassword: '#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(2) > div > input',
    submitCredentialsPassword: '#public > main > div.page__content > div > div > div.css-1dbjc4n.r-z2wwpe.r-nsbfu8 > div > div:nth-child(3) > div > div',
    workspaceMenuButton: 'body > div > div > div.flex.justify-between.items-center.p-2.w-full.border-b.z-10.bg-gray-200.border-gray-400 > div:nth-child(2) > div > button',
    workspaceMenuSelectAll: 'body > div > div > div.flex.justify-between.items-center.p-2.w-full.border-b.z-10.bg-gray-200.border-gray-400 > div:nth-child(2) > div > div > div.px-2.text-gray-800 > div.flex.justify-between.items-center.my-2 > button',
    workspaceMenuClose: 'body > div > div > div.flex.justify-between.items-center.p-2.w-full.border-b.z-10.bg-gray-200.border-gray-400 > div:nth-child(2) > div > div > div.flex.self-end > button',
    apiURL: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-1 > div > div > input',
    element4: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-1 > div > div > div.overflow-y-scroll.overflow-x-hidden > div:nth-child(5) > div:nth-child(3) > div.flex.items-baseline > div.font-bold',
    element5: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > button',
    profileName: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > input:nth-child(2)', 
    email: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > input:nth-child(3)', 
    password: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > input:nth-child(4)', 
    saveProfile: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.border.bg-gray-200.border-gray-400.rounded.pt-4.px-4.mb-4 > div.flex.flex-wrap > div > div > div.flex.mt-4 > button.bg-blue-500'
}

const to = {
    badMagic : () => {
        cy.visit(credentials.url)
        cy.get(selectors.cookieBanner).click()
        cy.get(selectors.credentialsEmail).type(credentials.email)
        cy.get(selectors.submitCredentialsEmail).click()
        cy.get(selectors.credentialsPassword).type(credentials.password)
        cy.get(selectors.submitCredentialsPassword).click()
    }
};

const as = {
    salto: (apiURL) => {
        cy.get(selectors.workspaceMenuButton).click()
        cy.get(selectors.workspaceMenuSelectAll).click()
        cy.get(selectors.workspaceMenuClose).click()
        cy.get(selectors.apiURL).type(personas.residents.salto.guestEndpoint)
        cy.get(selectors.element4).click()
        cy.get(selectors.element5).click()
        cy.get(selectors.profileName).type(personas.residents.salto.profileName)
        cy.get(selectors.email).type(personas.residents.salto.email)
        cy.get(selectors.password).type(credentials.resident_password)
        cy.get(selectors.saveProfile).click()
    },

    phys: (apiURL) => {
        cy.get(selectors.workspaceMenuButton).click()
        cy.get(selectors.workspaceMenuSelectAll).click()
        cy.get(selectors.workspaceMenuClose).click()
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