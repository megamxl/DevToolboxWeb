## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Self hosting with docker

Although the project is not yet available on Docker Hub, you can self-host it by building the Docker image yourself. Follow these steps to get started:

**Step 1** : install the docker engine ([how to install docker](https://docs.docker.com/engine/install/))

**Step 2** : clone the repository 

**Step 3** : build the container

```bash
docker build . -t devoolboxweb
```

**Step 4** : run the docker with needed variables : 

```bash
docker container run \
    --name devoolboxweb \
    -p 3000:3000 \
    devoolboxweb
```