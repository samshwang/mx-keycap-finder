# mx-keycap-finder
The MX Keycap Finder website catalogs a searchable database of mx-compatible keycaps.
The website is in early prototype with several seeded datasets. Keycaps are currently
searchable by color, designer and associated themes.

The website is being built on the PERN stack (PostgreSQL, Express, React, NodeJS) with
Knex and Objection query builders.

<img src="./preview.PNG" />

## installation
Download or clone the repository to the directory of your choice and run `$yarn run install`
to setup default configurations for the website.

## usage
Run `$yarn run dev` from the root of the repository to start your local webserver hosting
the website at localhost:3000

You can also run `yarn run migrate:latest` from the /server directory to setup the database
schema.

`yarn run db:seed` from the /server directory seeds the website with a test dataset.

## to do
This website is currently an early, workable prototype. Immediate priorities of new features include:
- 
