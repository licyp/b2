# B2

It is a practice project to create a CRUD application with React front end, Apollo and GraphQL to connect to Neo4j database.

Followings have been the main sources:

- Apollo and GraphQL: [GRANDstack](https://grandstack.io/docs/getting-started-grand-stack-starter).
- React implementation: [Material-UI](https://material-ui.com/getting-started/installation/)
- Dark mode: [react-hook-context-emotion-dark-mode](https://github.com/MaximeHeckel/react-hook-context-emotion-dark-mode).

## End goal

The aim is to have a generic client to connect to Neo4j database and automatically get `Nodes` and `Relationships` in a graph visualization.

Then select a `Node` type and select `properties` to be listed. Available `properties` dynamically aligned to the selected `Node`. Result table used as CRUD interface, with filter and sort functionalities.

When a line selected all `properties` displayed not just the selected ones.

The detailed page has a visualization with option to increase or decrease the distance traversed.

## Install

1. Download the code and install dependencies:

    ```
    npm install
    ```
    or with Yarn
    ```
    yarn install
    ```

2.  Create a Neo4j database:

    Neo4j Sandbox:
    1. [Neo4j Sandbox](https://neo4j.com/sandbox) instance with **'Movies'** pre built option. Make sure that `.api/.env` has a line like: `NEO4J_URI=bolt://18.204.14.182:33815`.
    2.  Find `username`, `password` and `Bolt URL` under *'Connection Details'* tab and copy them to `./api/.env`.
    
    Neo4j Desktop:
    1. [Neo4j Desktop](https://neo4j.com/download/) instance with *'APOC'* plugin. Open *'Neo4j Browser'* and run `:play movie-graph`, follow the instruction to create **'Movies'** data set, for more check out [Built-In Examples](https://neo4j.com/developer/example-data/). Make sure that `.api/.env` has the exact line: `NEO4J_URI=bolt://localhost:7687`.
    2.  Use `username`, `password` and `Bolt URL` to update `./api/.env`.

    Note: `.env` should not be part of public repository, it was left out from `.gitignore` for easy start.

4.  Open a new terminal and run:

    ```
    npm start
    ```
    
    or with Yarn
    
    ```
    yarn start
    ```
