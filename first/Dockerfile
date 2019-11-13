FROM node:10.16-alpine

# Labels
LABEL Maintainer="Julien BREUX <juliano@ornikar.com>"

# Add tini
# Demonstrate docker bad sig term
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

# Create home directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Change working directory
WORKDIR /home/node/app

# Copy dependencies requirements
COPY package*.json yarn.lock ./

# Change user
USER node

# Install dependencies
RUN yarn install \
    --prefer-offline \
    --pure-lockfile \
    --ignore-engines \
    --no-progress

# Copy application :trollface:
COPY index.js ./

# Expose application
EXPOSE 3000

# Define the running command
CMD [ "node", "index.js" ]
