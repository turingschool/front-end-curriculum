---
title: Address Book
module: 4
---

# Abstract

Address Book is a two week long paired project intended to solidify your RESTful
API design skills, and get you familiar with the patterns associated with
building a single app across multiple repositories.

Consider how a contact is stored in the Apple ecosystem:

![Contact
Image](https://img.gadgethacks.com/img/57/10/63648585470394/0/apple-pay-cash-101-make-person-person-payments-via-imessage.w1456.jpg)

Your job is to create an address book that can recreate some of this
functionality with your own backend and database. A user should be able to
create a new contact, add contact details (phone, email, address, website) for
that person, and be able to update or delete everything about the contact.

Address book will be build in two separate repositories:
- A back-end repository for your database and server
- A front-end repository for your user-facing application, which will consume
  the back-end API

## Learning Goals

The primary learning goals for this project are:

- server-side testing
- further understanding of complete CRUD endpoints
- connecting BE & FE repositories using CORS
- multiple environments: 
    - testing 
    - making use of automatic continuous integration with TravisCI
    - deployment with Heroku

The second focus for this project is developing professional-level workflow habits. This includes:

- using a PR template
- conducting actual code reviews in your PRs
- detailed agile workflow using a kanban system or GH issues
- keeping track of MVP features and nice-to-have features
- agreeing to a commit message template
- exploring `git rebase` and squashing
- Highly semantic, specific, professional documentation (README, API documentation, etc)

This workflow process will be good preparation for the next group project, which is your Cross-Pollination capstone.

