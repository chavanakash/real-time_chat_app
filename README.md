# Real-Time Chat Application

A real-time chat application where users can chat with each other instantly.  
This project demonstrates a full DevOps workflow: Dockerization, Kubernetes deployment, and CI/CD with Jenkins.

---

## Features

- Real-time messaging using **Socket.IO**
- Node.js + Express backend
- Static frontend served from backend (`public` folder)
- Dockerized for easy deployment
- Kubernetes manifests for scalable deployment
- CI/CD pipeline using Jenkins (build, push, deploy)

---

## Project Structure

```
real-time_chat_app/
├── backend/           # Node.js backend (Express + Socket.IO)
├── public/            # Frontend (HTML, CSS, JS, images)
├── k8s/               # Kubernetes manifests (deployment, service)
├── Jenkinsfile        # Jenkins pipeline for CI/CD
├── README.md
```

---

## How to Run Locally

1. **Install dependencies:**
    ```sh
    cd backend
    npm install
    ```

2. **Start the backend:**
    ```sh
    node index.js
    ```

3. **Open `public/index.html` in your browser.**

---

## Docker & Kubernetes

- **Dockerfile** builds the backend and copies the frontend from `public/`.
- **Kubernetes**: Deploy using `k8s/deployment.yaml` and `k8s/service.yaml`.
- **Minikube**: Use `minikube tunnel` for LoadBalancer access.

---

## CI/CD with Jenkins

- Jenkins pipeline builds the Docker image, pushes to Docker Hub, and deploys to Kubernetes automatically on every commit.

---

## How to Access the App (Minikube)

1. Deploy with `kubectl apply -f k8s/`
2. Run `minikube tunnel`
3. Get the external IP with `kubectl get svc chat-app-service`
4. Open `http://<EXTERNAL-IP>` in your browser

---

## Authors

- [Your Name]
- [Contributors]

---

## License

This project is licensed under the MIT License.