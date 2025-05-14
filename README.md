## Getting Started

this Api get the pictures from Nasa API.

Nasa Api 

| Feature               | implementation
|-----------------------|------------------------------
| Continuos integration | ✓
| Continuos delivery    | ✓
| Docker file           | ✓
| Dependency Injection  | ✓                            
| Unit Tests            | ✓
| High Test Coverage    | ✓                            

## Requests
<b>GET</b> /picture returns the list of the latest pictures
<br><b>GET</b> /health returns if the application is running properly

## Deploy structure

you can do the deployment on AWS EC2 service through GitHub actions. after a merge into main branch you can go to actions section and run a new deployment process to EC2 AWS

## Architecture organization

Presentation <-> UseCase <-> Repository

## Run locally

```bash
npm run start
```
