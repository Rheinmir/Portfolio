FROM nginx:alpine

# Copy the static files to the Nginx HTML directory
COPY src /usr/share/nginx/html

# Expose port 80
EXPOSE 80