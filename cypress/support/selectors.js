
const DESIREDSELECTORS = {
    // This is an empty object as a placeholder for objects of selectors to ensure cypress/e2e/template.cy.js does not break.
};

const loginSelectors = {
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

const zWaveSelectors = {
    unitID: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(1) > div > div > div.flex.flex-grow > input",
    firstName: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(1) > div > div.flex.flex-grow > input",
    lastName: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(2) > div > div.flex.flex-grow > input",
    phone: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(3) > div > div.flex.flex-grow > input",
    email: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(4) > div > div.flex.flex-grow > input",
    activationType: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div:nth-child(2) > div:nth-child(5) > div > div.flex.flex-grow > input",
    permanentGuestCode: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.col-span-1 > div > div.overflow-y-scroll.overflow-x-hidden > div:nth-child(5) > div:nth-child(3) > div.flex.items-baseline > div.font-bold",
    recurringGuestCode: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.col-span-1 > div > div.overflow-y-scroll.overflow-x-hidden > div:nth-child(5) > div:nth-child(2) > div.flex.items-baseline > div.font-bold",
    temporaryGuestCode: "body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.col-span-1 > div > div.overflow-y-scroll.overflow-x-hidden > div:nth-child(5) > div:nth-child(4) > div.flex.items-baseline > div.font-bold",
    try: 'body > div > div > div.w-full.flex-grow.grid.divide-x.grid-cols-4 > div.p-4.col-span-3.overflow-y-scroll > div.overflow-hidden.p-4.border.rounded.overflow-x-hidden.mb-4.bg-gray-200.border-gray-400 > div.flex.py-2 > div.flex.flex-col.flex-grow.mr-4 > div.flex > button.bg-blue-500'
};

export {
    loginSelectors,
    zWaveSelectors,
    DESIREDSELECTORS
};
