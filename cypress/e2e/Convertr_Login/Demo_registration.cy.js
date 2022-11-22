import * as cypress from "rxjs";
const a = (' https://demo.wpeverest.com/user-registration/new-customer-registration-form/' )
describe('Convertr Registration Test',
  () => {
    beforeEach(() => {
      cy.visit(a)
    })

    it('Navigates to the Convertr registration page', () => {
      cy.visit(a)
    })

    it ('Verifies that the page that was loaded is indeed the "Registration" page', () => {
      cy.url()
      cy.url().should('include', 'user-registration' && 'new-customer-registration-form') // ASSERTIONS => true
    //  cy.url().should('be.equal', a ) // 'a has already been declared as a variable (but this wil Fail)
    //   cy.url().should(
    //     'be.equal', // basically does the same thing that previous line of code does
    //     `${cypress.config.ts("baseUrl")}
    })

    it ('Verifies that the page has the correct title/header ',() => {
      cy.contains('New Customer Registration Form') // ASSERTIONS => true
      cy.contains('Customer Details:')// or .should('include', 'Customer Details'
    })

    it ('Verifies that the page contains all the necessary text boxes titles/headers according to the requirement',() => {
      cy.contains('Customer Details:')// or .should('include', 'Customer Details'
      cy.contains('Full Name ')
      cy.contains('User Email') // ASSERTIONS => true
      cy.contains('User Password')
      cy.contains('Mobile')
      cy.contains('Address')
      cy.contains('Any other information you think we should know about?')
    })

        it('User sees an option of three titles and is able to select one',
      () => {
          cy.contains('Title')
          cy.get('#select_1665555058') //this is the dropdown button for the titles
          const dropdown = ('#select_1665555058')
          cy.contains('Mr.')
          cy.contains('Mrs.')
          cy.contains('Others')
          cy.get(dropdown).select('Mr.')
          cy.pause()
          // cy.get('#select_1665555058').should.('include', 'Mr', 'Mrs', 'Others')
          // cy.get(dropdown).should('include', 'Mr.' && 'Mrs.'&& 'Others') //alternative way, same thing as line 42-44
          // cy.get(dropdown).arrayContains('include', 'Mr.', 'Mrs.', 'Others') // Experimental

      })

    it('User is able to enter full name',
      () => {
        cy.get('#select_1665555058').type('Nathan') //First name
        cy.get('#first_name').type('Nathan') //First name
        cy.get('#last_name').type('Tester') //Last name
      })


    // describe(' Create an article',
//   () => {
//     it('If there are already lists of articles, users can see them',
//       () => {
//         cy.contains('-----')
//         cy.contains('------')
//       })
//     it('Verifies that User is able to access the Create an article button',
//       () => {
//         //cy.contains('Create an article')
//       })
//   })


//     it('Tests the Login functionality with an invalid username',
//       () => {
//         cy.visit('/')
//         cy.get('[data-testid="username"]').type('random_incorrect_=-1921@hgooglemail.com')
//         cy.wait(2000)
//         cy.get('[data-testid="password"]').type('Aaaa1111.')
//         cy.wait(2000)
//         cy.get('[data-testid="submit"]').click()
//         cy.wait(2000)
//         cy.contains('You have entered an invalid username or password')
//       })
//
//     it('Tests the Login functionality with an invalid password but a valid email',
//       () => {
//         cy.visit('/')
//       })
//
//     it('Tests the Login functionality with an valid username & Password',
//       () => {
//         //cy.contains('You have entered an invalid username or password')
//       })
//
//     it('Verifies that the Login authentication process is successful', function () {
//       cy.url()
//       cy.location('href')
//       cy.url().should('include', 'uk.castoredc.com/studies') // ASSERTIONS => true
//     });
//   });

//
// describe('This is to test the Login functionality', () => {
//     beforeEach() => {
//         cy.visit('/')
//     })
//     it('Enter incorrect login details ', function () {
//         cy.get()
//     });
// })


  })
