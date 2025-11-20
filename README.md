# Portfolio Docker Project

This project is a Dockerized static portfolio application. It showcases a personal portfolio using HTML, CSS, and JavaScript, and is served using Nginx.

## Project Structure

```
portfolio-docker
├── src
│   ├── index.html        # Main HTML document for the portfolio application
│   ├── index.css         # Styles for the portfolio application
│   ├── js
│   │   └── main.js       # JavaScript code for interactivity
│   └── assets
│       ├── fonts         # Directory for font files
│       └── data          # Directory for data files (e.g., JSON, images)
├── Dockerfile             # Instructions for building the Docker image
├── docker-compose.yml      # Defines services, networks, and volumes for Docker
├── nginx
│   └── default.conf       # Nginx configuration for serving static files
├── .dockerignore          # Files and directories to ignore when building the Docker image
└── README.md              # Documentation for the project
```

## Getting Started

### Prerequisites

- Docker installed on your machine.
- Docker Compose installed (if using `docker-compose.yml`).

### Building the Docker Image

1. Navigate to the project directory:
   ```
   cd portfolio-docker
   ```

2. Build the Docker image:
   ```
   docker build -t portfolio-app .
   ```

### Running the Application

You can run the application using Docker Compose:

```
docker-compose up
```

This command will start the Nginx server and serve your portfolio application on `http://localhost:80`.

### Accessing the Application

Open your web browser and go to `http://localhost:80` to view your portfolio.

### Stopping the Application

To stop the application, press `CTRL+C` in the terminal where Docker Compose is running, or run:

```
docker-compose down
```

## Customization

Feel free to modify the HTML, CSS, and JavaScript files in the `src` directory to personalize your portfolio. You can also add more assets in the `src/assets` directory as needed.

## License

This project is open-source and available under the [MIT License](LICENSE).