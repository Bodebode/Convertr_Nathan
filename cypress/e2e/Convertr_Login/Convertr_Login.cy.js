const a = ('https://angular.realworld.io/')
const loginpage = ('https://angular.realworld.io/login')

describe('Testing that the page loads successfully ', () => {
    it('Navigates to the Login page', () => {
        cy.visit(a)
    })

    it('Verifies that the page loaded the correct url', () => {
        cy.url().should('include', 'angular' && 'realworld') // ASSERTIONS => true
        cy.url().should('be.equal', a) //may fail if url is not exact
    })

    it('Verifies that the page that was loaded is indeed the "Sign in" page', () => {
        cy.contains('conduit')//.should('include', 'Conduit')
        cy.contains('Sign in')//.should('include', 'Sign in')

        it('Verifies that the "Sign in" button is visible ', function () {
            cy.get('.container > .nav > :nth-child(2) > .nav-link').should('be.visible')
        });
    })
})

describe('Testing Convertrs sign in page ', () => {
    it('Navigates to the Homepage page', () => {
            cy.visit(a)
        })
    it('Verifies that the Sign in button is visible ', function () {
        });

    it('User clicks the "Sign in" button ', function () {
            cy.get('.container > .nav > :nth-child(2) > .nav-link')
            cy.wait(2000)
            cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
            cy.wait(2000)
        });
    it('Verifies that the Sign in page is successfully loaded ', function () {
        cy.url().should('include', 'login') // ASSERTIONS => true
        cy.url().should('be.equal', loginpage) //may fail if url is not exact
        });

});

describe('Testing the functionality for sign-in page ', () => {
    it('Navigates to the Login page', () => {
        // cy.visit('https://angular.realworld.io/login')
        // cy.visit(loginpage)
        // cy.wait(5000)
    })
    it('Tests the Login functionality with an invalid username/email',
        () => {
            cy.get(':nth-child(2) > .form-control').type('random_incorrect_=-1921@hgooglemail.com')
            cy.wait(2000)
            cy.get(':nth-child(3) > .form-control').type('Password!23')
            cy.wait(2000)
            cy.get('.btn').click()
            // cy.wait(2000)
            cy.contains('email or password is invalid')
        })

    it('Clears the previously typed inputs', () => {
            cy.get(':nth-child(2) > .form-control').clear()
            cy.get(':nth-child(3) > .form-control').clear()
    })

    it('Tests the Login functionality with an invalid password but a valid email',
        () => {
            cy.get(':nth-child(2) > .form-control').type('cvtrtest1@convertr.io')
            cy.wait(2000)
            cy.get(':nth-child(3) > .form-control').type('Aaaa1111.')
            cy.wait(2000)
            cy.get('.btn').click()
            // cy.wait(2000)
            cy.contains('email or password is invalid')
        })

    it('Clears the previously typed inputs', () => {
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').clear()
    })

    it('Tests the Login functionality with only valid credentials',
        () => {
            cy.get(':nth-child(2) > .form-control').type('cvtrtest1@convertr.io')
            cy.wait(2000)
            cy.get(':nth-child(3) > .form-control').type('Password!23')
            cy.wait(2000)
            cy.get('.btn').click()
        })

     it('Verifies that the Login authentication process is successful', function () {
            cy.contains('cvtrtest1@convertr.io')
            // cy.contains('Your field' && 'Global field')
            cy.contains('No articles are here... yet')
//     cy.location('href')
//     cy.url().should('include', 'angular') // ASSERTIONS => true
  });
});

describe('User Creates an Article ', () => {
    it('Verifies that User sees a "New Article" button', () => {
        cy.contains("New Article")
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    });

    it('Verifies that the page loaded was indeed the Article creation page ', function () {
        //bunch of checks/assertions
    });

    it('Verifies that all the required textboxes are available ', function () {
        //some more assertions
    });

    it('Fills in the Article title ', function () {
        cy.get(':nth-child(1) > .form-control').type("Nathan's New Article")
    });

    it('Fills in Article sub heading', function () {
        cy.get(':nth-child(2) > .form-control').type('This is my subheading')
    });

    it('User writes the Article  ', function () {
        cy.get(':nth-child(3) > .form-control').click().type("A close reading of 20th century history indicates, as nothing else can, the horrors that accompany loss of faith in the idea of the individual. +\n" +
            "            \"It is only the individual, after all, who suffers.The group does not suffer – only those who compose it. \n" +
            "            \"Thus, the reality of the individual must be regarded as primary if suffering is to be regarded seriously. Without such regard, there can be no motivation to reduce suffering and, therefore, no respite.+\n" +
            "            \"Instead, the production of individual suffering can and has and will be again rationalized and justified for its supposed benefits for the future and the group.\n" +
            "    ")
    });

    it('User enters a few tags', function () {
        cy.get(':nth-child(4) > .form-control').type('#Nathan '+'#Writes '+'#Some '+'#Tags ',)
    });

    it('User clicks the "Publish Article" Button ', function () {
        cy.get('.btn').click()
        cy.wait(2000)
        });

    it('Verifies that the Article has indeed being created ', function () {
        cy.get('.container > .nav > :nth-child(1) > .nav-link').click()
        cy.contains("Nathan's New Article")
    });

});

//
//
// describe('Study Structure - Create Visit', () =>
//       it('Verifies if there are already lists of Studies, users can see them', () => {

