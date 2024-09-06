# DevSync

DevSync is an email enhancement application built for developers (freelancers) to communicate and track progress, change requests, and other communications from clients to developers.

## Project Structure

The project follows a modular structure with separate modules for developers, clients, and common features. It uses standalone components and a core service for task management.

## TODO List

- [x] Set up initial project structure
- [x] Create basic routing
- [x] Set up feature modules (Developer, Client, Common)
- [x] Create TaskService
- [ ] Implement authentication service
- [ ] Create login and registration components
- [ ] Implement KanbanBoard component for developers
- [ ] Implement ProjectOverview component for clients
- [ ] Set up real-time communication (WebSocket)
- [ ] Integrate with backend API
- [ ] Implement email parsing service
- [ ] Add unit tests for components and services
- [ ] Set up end-to-end testing
- [ ] Implement proper error handling and logging
- [ ] Add user documentation
- [ ] Set up CI/CD pipeline

## Development Context

The project is currently in its initial stages. We have set up the basic structure, routing, and a task service. The next steps involve implementing the core functionalities such as authentication, the main components for developers and clients, and integration with the backend.

Key points:

1. The project uses standalone components, which are imported in the feature modules rather than declared.
2. We have a TaskService in the core module that handles basic CRUD operations for tasks.
3. The routing is set up to lazy load feature modules for better performance.
4. We need to implement proper authentication and authorization next.

## Getting Started

To run the project locally:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `ng serve` to start the development server
4. Navigate to `http://localhost:4200/` in your browser

## Contributing

[Add contributing guidelines here]

## License

[Add license information here]
