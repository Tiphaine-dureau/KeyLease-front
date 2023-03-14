# CHANGELOG

Les changements notables du projet sont notés dans ce fichier.  
Nomenclature :

- Unreleased : pour les fonctionnalités non publiées sur main
- Added : pour les nouvelles fonctionnalités
- Changed : pour les changements de fonctionnalités existantes
- Deprecated : pour les fonctionnalités qui seront bientôt supprimées
- Removed : pour les fonctionnalités supprimées
- Fixed : pour les corrections de bugs
- Security : en cas de vulnérabilités
- Numéro de version : major.minor.patch

### Unreleased

#### Added

- Added ngxs for authentication (reactive programmation) : store and storage
- Added Json Server to mock api and start project more quickly
- Updated Login : added buttons for auto login - updated loading (spinner) : moved it to the auth-state
- Updated toolbar : when user is not authenticated the links and the menu doesn't exist
- Updated register : added button to go on register page from login and added button to go on login page from register -
  removed temporary links on menu burger
- Added display of tenant and owner detail
- Fixed : When token was out of date, menu was display -> fixed : isAuthenticated is more restrictive
- Updated db.json with data to complete the simulated api with property data
- Added GET /properties and display it on table with filter
- Added POST /property (stepper - spinner - method in the service)
- Added GET /properties/:id and PUT /properties/:id
- Added DELETE /properties/:id

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
