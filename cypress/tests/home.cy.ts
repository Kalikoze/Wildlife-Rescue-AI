describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Display Tests', () => {
    it('should render the hero section', () => {
      cy.get('[data-cy="hero-section"]').should('be.visible')
    })

  it('should display the correct brand name', () => {
    cy.get('[data-cy="hero-brand"]')
      .should('be.visible')
      .and('contain.text', 'WildWatch AI')
  })

  it('should display the main title', () => {
    cy.get('[data-cy="hero-title"]')
      .should('be.visible')
      .and('contain.text', 'Intelligent Wildlife Monitoring with AI')
  })

  it('should display the description', () => {
    cy.get('[data-cy="hero-description"]')
      .should('be.visible')
      .and('contain.text', 'Empowering zoos, sanctuaries, and educators')
  })

  it('should have working CTA buttons with correct links', () => {
    // Check primary CTA
    cy.get('[data-cy="hero-cta-primary"]')
      .should('have.attr', 'href', '/dashboard')
      .and('contain.text', 'Get Started')

    // Check secondary CTA
    cy.get('[data-cy="hero-cta-secondary"]')
      .should('have.attr', 'href', '/about')
      .and('contain.text', 'Learn More')
  })

  it('should have the correct styling for CTAs', () => {
    // Primary CTA should have orange background
    cy.get('[data-cy="hero-cta-primary"]')
      .should('have.class', 'bg-accent-orange')

    // Secondary CTA should have green border
      cy.get('[data-cy="hero-cta-secondary"]')
        .should('have.class', 'border-accent-green')
    })
  })

  context('Accessibility Tests', () => {
    beforeEach(() => {
      cy.injectAxe()
    })

    it('should pass accessibility tests', () => {
      cy.checkA11y()
    })
  })

  context('Responsive Design', () => {
    const viewports = ['iphone-6', 'iphone-x', 'samsung-s10', 'samsung-note9'] as const;

    viewports.forEach(viewport => {
      context(`Tests for ${viewport}`, () => {
        beforeEach(() => {
          cy.viewport(viewport);
          cy.visit('/');
          cy.injectAxe();
        });

        it('should pass accessibility checks', () => {
          cy.checkA11y();
        });
      });
    });
  });
});
