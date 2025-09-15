## Simple TypeScript CRUD API

This project is a basic Express.js REST API written in TypeScript. It supports Create, Read, Update, and Delete (CRUD) operations for items stored in memory.

## Setup

### Initialize the project
```bash
npm init -y
```
Creates a new `package.json` file with default values. The `-y` flag automatically answers "yes" to all prompts.

### Install Express
```bash
npm install express
```
Installs Express.js framework as a production dependency. Express is a minimal web framework for Node.js that handles HTTP requests and routing.

### Install development dependencies
```bash
npm install --save-dev typescript ts-node @types/node @types/express nodemon
```
Installs development dependencies that are only needed during development:
- **typescript**: The TypeScript compiler that converts TypeScript code to JavaScript
- **ts-node**: Allows running TypeScript files directly without pre-compilation
- **@types/node**: TypeScript type definitions for Node.js built-in modules
- **@types/express**: TypeScript type definitions for Express.js
- **nodemon**: Automatically restarts the server when file changes are detected during development

## Endpoints

- `POST /items` — Create a new item
- `GET /items` — Get all items
- `GET /items/:id` — Get a single item by ID
- `PUT /items/:id` — Update an item by ID
