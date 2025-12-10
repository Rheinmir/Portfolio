FROM nginx:alpine

# Copy the static files to the Nginx HTML directory
COPY src /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80