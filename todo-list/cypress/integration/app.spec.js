context('App', () => {
    
    beforeEach(() => {
        cy.request('POST', '/api/clear');
    })

    it('should load our app and show content', () => {
        cy.visit('/')
        cy.contains('ToDo app')
    })

    it('should get the newly added task in list', () => {
        const rand = Math.floor(Math.random() * 1024);
        const task = `cypress task added ${rand}`;

        cy.request('POST', '/api/todo', {
            newTask: task
        })

        cy.visit('/')
        cy.contains('Task:')

        cy.contains(task)        
    })

    it(`should create a new task and get it back`, () => {
        const rand = Math.floor(Math.random() * 1024);
        const task = `cypress task get ${rand}`;

        cy.visit('/')
        cy.get('input').type(task).should('have.value', task);
        cy.get('button:first').click();
        cy.get('ul').contains(task);
    })

    it(`should create a new task and remove it`, () => {
        const rand = Math.floor(Math.random() * 1024);
        const task = `cypress task remove ${rand}`;

        cy.visit('/')
        cy.get('input').type(task).should('have.value', task);
        cy.get('button:first').click();
        cy.get('ul').contains(task).find('button').click();
    })
  })