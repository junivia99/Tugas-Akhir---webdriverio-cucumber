Feature: KasirAja Login Tests

    @all
    Scenario: Login successfully with valid credential
        Given I open KasirAja website
        When I login with valid credential
        Then I should be on the dashboard page
    

