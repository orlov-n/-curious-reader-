import cypress from "cypress";

describe('Top Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "bookData"})
  })

  it('Should have a page title', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('h1').should('contain.text', 'Curious Reader')
  })

  it('Should diplay books from the correct genre' , () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "hardcoverFiction"})
    cy.get('.genres-container').find('p').last().click()
    cy.get('.books-container').find('.book-card').should('have.length', 15)
  })

  it('Should have a genre page displaying books with details about the books from that genre.' , () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "hardcoverFiction"})
    cy.get('.genres-container').find('p').last().click()
    cy.get('.book-card').first().find('.title').should('contain.text', 'PORTRAIT OF AN UNKNOWN WOMAN')
    cy.get('.book-card').first().find('.description').should('contain.text', "The 22nd book in the Gabriel Allon series. Allon becomes an art forger to uncover a multibillion-dollar fraud.")
    cy.get('.book-card').first().find('.author').should('contain.text', "Daniel Silva")
  })
})