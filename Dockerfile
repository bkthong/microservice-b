FROM --platform=linux/amd64 registry.access.redhat.com/ubi8/nodejs-16-minimal:latest

EXPOSE 8080

# Add source code to the workding directory of the image
ADD src/ .

# Update file ownership to user and group 1001
USER root
RUN microdnf -y install bind-utils iputils iproute procps-ng && microdnf clean all
RUN chown -R 1001:0 .
RUN chmod -R g=rwX .

# Install dependencies as user 1001
USER 1001 
RUN npm install

# Execute unit tests
# -- blank for now --

# CMD starts the application when the image is used to start a container
CMD ["npm" , "start"]
