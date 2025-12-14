# Agent and Tool Management

This is a full-stack application for managing AI agents and their tools. The backend is built with Node.js and Express, the database is PostgreSQL, and the frontend is built with Angular.

## Features

*   **Agent and Tool Storage:** Store and manage AI agents, their configurations, and the tools they use.
*   **Versioning:** Robust version control for updates and rollbacks.
*   **Metadata and Documentation:** Comprehensive metadata, documentation, success criteria, and usage examples for each agent and tool.
*   **Access Control:** Identity and access management to control who can publish, modify, or run specific agents.
*   **Search and Filtering:** Efficiently search and discover agents and tools.
*   **API Access:** REST API for seamless integration into other systems.

## Tech Stack

*   **Backend:** Node.js, Express
*   **Frontend:** Angular
*   **Database:** PostgreSQL
*   **ORM:** Sequelize

## Getting Started

### Prerequisites

*   Node.js and npm
*   Angular CLI
*   PostgreSQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shrikarak/agent-tool-manager.git
    cd agent-tool-manager
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in the `backend` directory with the following content, replacing the values with your PostgreSQL credentials:
        ```
        DB_HOST=localhost
        DB_USER=postgres
        DB_PASSWORD=password
        DB_NAME=agent_tool_manager_db
        PORT=3000
        API_KEY=my-secret-api-key
        ```
    *   Create the database `agent_tool_manager_db` in PostgreSQL.
    *   Synchronize the database:
        ```bash
        npm run sync-db
        ```
    *   Start the backend server:
        ```bash
        npm start
        ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    *   Start the frontend development server:
        ```bash
        ng serve
        ```

4.  **Access the application:**
    Open your browser and navigate to `http://localhost:4200`.

## API

The API is protected by an API key. You need to include the `x-api-key` header in your requests with the value of `API_KEY` from your `.env` file.

### Endpoints

*   `GET /api/agents`: Get all agents.
*   `GET /api/agents?search=<term>`: Search for agents.
*   `GET /api/agents/:id`: Get an agent by ID.
*   `POST /api/agents`: Create a new agent.
*   `PUT /api/agents/:id`: Update an agent.
*   `DELETE /api/agents/:id`: Delete an agent.
*   `GET /api/tools`: Get all tools.
*   `GET /api/tools?search=<term>`: Search for tools.
*   `GET /api/tools/:id`: Get a tool by ID.
*   `POST /api/tools`: Create a new tool.
*   `PUT /api/tools/:id`: Update a tool.
*   `DELETE /api/tools/:id`: Delete a tool.

## Future Work

*   **Advanced Authentication:** Implement a more robust authentication system like JWT or OAuth.
*   **Execution Environment:** Integrate with cloud providers or other infrastructure for running agents.
*   **Logging and Monitoring:** Implement a comprehensive logging and monitoring solution.
*   **Feedback Loops:** Incorporate mechanisms for agents to receive feedback and learn.
*   **Autonomous Capabilities:** Enable "mother agents" to dynamically create and register new agents and tools.
