# Project README

## Overview

This project includes a Node.js backend server and a React frontend client. It uses PostgreSQL as the database.

## Table of Contents

- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Running the Client](#running-the-client)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Additional Notes](#additional-notes)

## Installation

To get started, you'll need to install the necessary npm modules for both the server and client separately.

For the Client:

```bash
cd client
cd contact
npm install
```

For the Server:

```bash
cd server
npm install
```

## Running the client

To get the client app running

```bash
   cd client
   cd contact
   npm run dev
```

## Running the server

To get the Server running

```bash
    cd server
    npm run server
```

## Environment Variable

For the Server:

```
APP_PORT='server_port'
DB_PORT='database_port'
DB_USER='database_username'
DB_PASSWORD='database_password'
DB_NAME='database_name'
DB_HOST='localhost'

```

For the Client:

```
VITE_SERVERURL='server_hosting_url'
```

## Database Setup

For the database setup, use **data.sql** file for the creating the required table.

## Additional Notes

There are two pages "contact us" and "contact list",to visit that pages:

1.  "contact us" path will be '/contact-us'.
2.  "contact list" path will be '/contact-list'.
