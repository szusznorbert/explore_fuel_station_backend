# ⛽ Explore Fuel Station Backend

![Google Cloud Run](https://img.shields.io/badge/Google%20Cloud%20Run-4285F4?logo=googlecloud&logoColor=white)
![Firestore](https://img.shields.io/badge/Firestore-FFCA28?logo=firebase&logoColor=black)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)

A backend Express.js API designed for managing a fuel station system, deployed via **Google Cloud Run** and using **Firestore** for data storage.

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Google Cloud SDK](https://cloud.google.com/sdk)

### Google Cloud Project Setup

Ensure your project includes:

- Firestore (in Native mode)
- Cloud Run API enabled
- A Service Account with the following permissions:
  - Firestore access
  - Cloud Run deployment
  - Secret Manager access (for secure keys)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/express-firestore-api.git
cd express-firestore-api
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file by copying the example:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=8080
GOOGLE_APPLICATION_CREDENTIALS=./your_service-account.json
API_KEY=your-secret-key
# Add other environment-specific variables
```

---

## 👨‍💻 Local Development

To run the app locally:

```bash
yarn dev
```

The server will be available at: `http://localhost:8080`

---

## ☁️ Deploying to Google Cloud Run

### Step 1: Set Project Configuration

```bash
gcloud config set project YOUR_PROJECT_ID
gcloud auth configure-docker
```

### Step 2: Deploy the Application

```bash
gcloud run deploy express-firestore-api \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --service-account=api-service-account@YOUR_PROJECT_ID.iam.gserviceaccount.com \
  --set-env-vars "PORT=8080,PROJECT_ID=$(gcloud config get-value project)" \
  --set-secrets "API_KEY=API_KEY_SECRET:latest"
```

> 🛡️ Make sure to replace placeholders like `YOUR_PROJECT_ID` and `API_KEY_SECRET` with actual values from your environment and Secret Manager.
