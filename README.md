# Minikube Demo Project

This is a simple Node.js application deployed on a local Kubernetes cluster using Minikube. The project demonstrates how to build a Docker image, create Kubernetes deployments and services, and scale pods locally.

## Project Structure

The project contains the following files:

- `app.js` — Node.js HTTP server
- `Dockerfile` — Builds the Node.js app container
- `deployment.yaml` — Kubernetes Deployment definition
- `service.yaml` — Kubernetes Service definition
- `README.md` — Project documentation

## Prerequisites

- Docker Desktop installed and running
- Minikube installed
- kubectl installed

## Steps to Run Locally

1. Start Minikube with the command:


2. Build the Docker image inside Minikube:


3. Deploy the app to Kubernetes:


4. Verify running resources:


5. Access the app in your browser:

It should display “Hello from Minikube!”.

## Scaling the Deployment

To increase the number of pods:

## Checking Logs

View logs of any pod using:

## Clean Up

After finishing your tests:

## Outcome

This project helps you understand Kubernetes basics locally, including deployments, services, scaling, and managing pods with kubectl. Screenshots of pods, services, app output, scaling, and logs can be captured as part of the deliverables.


