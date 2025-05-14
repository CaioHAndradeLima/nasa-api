## Getting Started

this Api get the pictures from Nasa API.

Nasa Api 

| Feature                       | implementation
|-------------------------------|------------------------------
| Continuos integration         | ✓
| Continuos delivery            | ✓
| Local data persistance        | ✘
| Infinite Scroll or pagination | ✘                            
| Detail Screen                 | ✓                            
| Transition Animation          | ✘                            
| Image Internal Cache          | ✓                            
| Horizontal adaptation         | ✓                            
| Dependency Injection          | ✓                            
| Good Test Coverage            | ✓                            
| Unit Tests                    | ✓                            
| UI Tests                      | ✓                            


## Requests
<b>GET</b> /picture returns the list of the latest pictures
<br><b>GET</b> /health returns if the application is running properly

## Deploy structure

you can do the deployment on AWS EC2 service through GitHub actions. after a merge into main branch the CI will start and make a new deployment


## AWS EC2

you can create a instance on EC2
AWS EC2


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
