Feature: KasirAja Category Test

    @all @positive
    Scenario: Successfully add Category
        Given I open KasirAja website
        When I login with valid credential
        Then I should be on the dashboard page
        Given I open menu category
        When Click button tambah
        When Input name and description
        Then I should be on the category page and success add category

    @all @negative
    Scenario: Unsuccessfully add Category
        When Click button tambah
        Then There are error message name can not empty
    

