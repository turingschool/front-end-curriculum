---
title: BYOB Back-End Feature Checklist
---

* [ ] At least 2 different tables with at least 1 relationship (one-to-many or many-to-many)
* [ ] Postgresql database configured for development environment using knex
* [ ] Data is seeded into the database
* [ ] 4 GET endpoints
    * [ ] 2 GET endpoints for all of one resource (i.e. `/api/v1/merchants`)
    * [ ] 2 GET endpoints for a specific resource (i.e. `/api/v1/merchants/:merchant_id`)
* [ ] 2 POST endpoints
* [ ] 2 PUT or PATCH endpoints
* [ ] 2 DELETE endpoints
* [ ] A query parameter on at least one endpoint that acts as a filter on a resource (i.e. GET `api/v1/merchants?areacode=80202`, which would limit the results to merchants in the 80202 area code)
* [ ] Postgresql database configured for test environment using knex
* [ ] All endpoint happy paths are tested
  * [ ] Some endpoint happy paths are tested
  * [ ] No tests yet
* [ ] All endpoint sad paths are tested
  * [ ] Some endpoint sad paths are tested
* [ ] Documentation is written in repository README describing the API endpoints
* [ ] Deployed to Heroku
* [ ] TravisCI runs test suite
* [ ] TravisCI automatically deploys to Heroku if test suite passes 
