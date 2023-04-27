# CHANGELOG

Les changements notables du projet sont notés dans ce fichier.  
Nomenclature :

- Unreleased : pour les fonctionnalités non publiées sur main
- Added : pour les nouvelles fonctionnalités
- Updated : pour les changements de fonctionnalités existantes
- Deprecated : pour les fonctionnalités qui seront bientôt supprimées
- Removed : pour les fonctionnalités supprimées
- Fixed : pour les corrections de bugs
- Security : en cas de vulnérabilités
- Numéro de version : major.minor.patch

### Unreleased

### [0.1.17] - 2023-04-27

#### Updated

- Added missing spinners on features and standardize its display under the page title

### [0.1.16] - 2023-04-26

#### Updated

- Updated Observable on delete fonctions (tenant, owner, property)

### [0.1.15] - 2023-04-26

#### Updated

- Updated Toolbar : added responsive

### [0.1.14] - 2023-04-26

#### Removed

- Removed old CSS

### [0.1.13] - 2023-04-24

#### Fixed

- BF null display on identity-card (additional address)

### [0.1.12] - 2023-04-23

#### Fixed

- BF back navigation on update fixture
- BF disabled submit button when required fields are empty

### [0.1.11] - 2023-04-18

#### Updated

- Updated display interface

### [0.1.10] - 2023-04-17

#### Updated

- Updated and moved balance-card to a common component and used it in owner detail and tenant detail views.

### [0.1.9] - 2023-04-16

#### Added

- Added download RentReceipt on payments dashboard and display it if rent is paid

### [0.1.8] - 2023-04-15

#### Updated

- Updated all interface with Tailwind

#### Added

- Added new components

### [0.1.7] - 2023-04-14

#### Updated

- Updated owner business model to add balance and expectedRentAmount
- Updated db.json to lock api

#### Added

- Added card on Owner detail to display balance and expectedRentAmount minus rental fees

### [0.1.6] - 2023-04-13

#### Added

- Added expected amount from CAF to Owner in leaseContract feature
- Added amount paid from CAF to Owner in payment feature

### [0.1.5] - 2023-04-12

#### Updated

- Updated db.json and routes with payment data to complete the simulated api
- Updated lease-contract business model to integrate payments
- Updated tenant business model to integrate a list of leases contracts id
- Updated english routes : translate to french

#### Fixed

- Bf Birthday display

#### Added

- Added payment business model
- Added payment service (CRUD)
- Added display for payment feature (table and form related to CRUD)

### [0.1.4] - 2023-03-29

#### Added

- Updated db.json with fixture-inventory data to complete the simulated api
- Added GET /fixtures-inventory/:id and display it in a card
- Added property-card to removed duplicated when we reminded property in fixture-detail
- Added POST /fixtures-inventory (form)
- Added PUT /fixtures-inventory/:id (form)
- Added DELETE /fixtures-inventory/:id
- Added fixture-inventory and lease-contrat columns on properties-dashboard

### [0.1.3] - 2023-03-27

#### Added

- Updated db.json with data to complete the simulated api with lease-contract data
- Added GET /lease-contracts/:id and display it in a card
- Added POST /lease-contracts (form)
- Added PUT /lease-contracts/:id (form)
- Added DELETE /lease-contracts/:id

### [0.1.2] - 2023-03-15

#### Added

- Added ngxs for authentication (reactive programmation) : store and storage
- Added Json Server to mock api and start project more quickly
- Added display of tenant and owner detail
- Added GET /properties and display it on table with filter
- Added POST /property (stepper - spinner - method in the service)
- Added GET /properties/:id and PUT /properties/:id
- Added DELETE /properties/:id
- Added property detail display

#### Updated

- Updated Login : added buttons for auto login - updated loading (spinner) : moved it to the auth-state
- Updated toolbar : when user is not authenticated the links and the menu doesn't exist
- Updated register : added button to go on register page from login and added button to go on login page from register -
  removed temporary links on menu burger
- Updated db.json with data to complete the simulated api with property data

#### Fixed

- Fixed : When token was out of date, menu was display -> fixed : isAuthenticated is more restrictive

### [0.1.1] - 2023-03-02

#### Added

- spinner and redirection on post - put and delete tenant and on submit login

### [0.1.0] - 2023-03-02

#### Added

- GET /owners
- POST /owners
- GET /owners/:id
- PUT /owners/:id
- DELETE /owners/:id
- Spinner and redirection on post - put and delete

### [0.0.9] - 2023-02-24

#### Added

- POST /tenants
- PUT /tenants by id
- DELETE /tenants by id

### [0.0.8] - 2023-02-21

#### Fixed

- removed and replaced Moment because module not found on deploy

### [0.0.7] - 2023-02-21

#### Added

- GET /tenants and display it on dashboard (table)

### [0.0.6] - 2023-02-08

#### Added

- Tenant form (stepper - without POST)

### [0.0.6] - 2023-02-02

#### Added

- GET /clients on tenants-dashboard

### [0.0.5] - 2023-02-01

#### Added

- Navbar Navigation
- Card Component
- Navigation architecture : CRUD : "property - owner - tenant"

### [0.0.4] - 2023-01-27

#### Added

- Update LoginForm : spinner and snackbar

### [0.0.3] - 2023-01-27

#### Added

- Feature RegisterForm

### [0.0.2] - 2023-01-24

#### Added

- Feature Form Login
- JWT authentication

### [0.0.1] - 2023-01-16

#### Added

- Feature Configure apiURL (ReceivedHelloWorldFromBack)
