Feature: KasirAja User Test

    @all @positive
    Scenario: Successfully add User
        Given I open KasirAja website
        When I login with valid credential
        Then I should be on the dashboard page
        Given I open menu pengguna
        When Click button tambah
        When Input name,email and password
        Then I should be on the user page and success add user

    @all @negative
    Scenario: Unsuccessfully add User
        When Click button tambah
        Then There are error message name can not empty
    

