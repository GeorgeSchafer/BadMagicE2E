
const residents = {
    lastName: "Cypress",
    salto: {
        unit_id: 284303,
        profileName: "Salto",
        email: "salto@sr.com",
        phone: "9282347480",
        guestEndpoint : "api/v1/units/:unit_id/access",
        guestCredentialType: "ble"
    },
    phys: {
        unit_id: 976194,
        profileName: "Phys",
        email: "phys@sr.com",
        phone: "9282347480",
        guestEndpoint: "api/v2/units/:unit_id/resident-guest-access-codes",
        guestCredentialType: "code",
        activationType: {
            p: "permanent", 
            t: "temporary", 
            r: "recurring"
        }
    }
};

const guests = {
    firstName: "Cypress",
    phone : 9282345555,
    permanent: {
        lastName : "P",
        email : "p@cy.press",
        activationType : "permanent"
    },
    temporary: {
        lastName : "T",
        email : "t@cy.press",
        increment : 300000,
        activationType : "temporary"
    },
    recurring: {
        lastName : "R",
        email : "r@cy.press",
        activationType : "recurring",
        increment: 300000,
        days: {
            mon: "Monday", 
            tue: "Tuesday", 
            wed: "Wednesday", 
            thu: "Thursday", 
            fri: "Friday"
        }
    }
};

export {residents, guests};