# Vertex AI Studio Frontend App with Node.js Backend

This repository contains a frontend and a Node.js backend, designed to run together.
The backend acts as a proxy, handling Google Cloud API calls.

This project is intended for demonstration and prototyping purposes only.
It is not intended for use in a production environment.

## Prerequisites

To run this application locally, you need:

*   **[Google Cloud SDK / gcloud CLI](https://cloud.google.com/sdk/docs/install)**: Follow the instructions to install the SDK.

*   **gcloud Initialization**:
    *   Initialize the gcloud CLI:
        ```bash
        gcloud init
        ```
    *   Authenticate for Application Default Credentials (needed to call Google Cloud APIs):
        ```bash
        gcloud auth application-default login
        ```

*   **Node.js and npm**: Ensure you have Node.js and its package manager, `npm`, installed on your machine.

## Project Structure

The project is organized into two main directories:

*   `frontend/`: Contains the Frontend application code.
*   `backend/`: Contains the Node.js/Express server code to proxy Google Cloud API calls.

## Backend Environment Variables

The `backend/.env.local` file is automatically generated when you download this application.
It contains essential Google Cloud environment variables pre-configured based on your project settings at the time of download.

The variables set in `backend/.env.local` are:
*   `API_BACKEND_PORT`: The port the backend API server listens on (e.g., `5000`).
*   `API_PAYLOAD_MAX_SIZE`: The maximum size of the request payload accepted by the backend server (e.g., `5mb`).
*   `GOOGLE_CLOUD_LOCATION`: The Google Cloud region associated with your project.
*   `GOOGLE_CLOUD_PROJECT`: Your Google Cloud Project ID.

**Note:** These variables are automatically populated during the download process.
You can modify the values in `backend/.env.local` if you need to change them.

## Installation and Running the App

To install dependencies and run your Google Cloud Vertex AI Studio App locally, execute the following command:

```bash
npm install && npm run dev
```

## Public Mockup Demo

For a quick preview of the application's interface and functionality without setting up the full development environment, you can view the **public mockup page**.

### Viewing the Mockup

The mockup page (`mockup.html`) is a standalone HTML file that demonstrates:

* The full user interface design
* Interactive meal moment and vibe selection
* Sample recipe generation with multiple recipe variations
* AI Chef chatbot interface
* All visual elements and animations

**To view the mockup:**

1. **Local viewing**: Simply open `mockup.html` in any modern web browser:
   ```bash
   # Option 1: Direct file open
   open mockup.html  # macOS
   xdg-open mockup.html  # Linux
   start mockup.html  # Windows
   
   # Option 2: Using a local server
   python3 -m http.server 8080
   # Then navigate to http://localhost:8080/mockup.html
   ```

2. **GitHub Pages**: The mockup can also be deployed to GitHub Pages for easy sharing.

### Features in the Mockup

* **Interactive Selection**: Choose from 5 meal moments (Breakfast, Lunch, Dinner, Snack, Party Time) and 4 vibes (Quick & Easy, Gourmet Chef, Healthy & Fresh, Comfort Food)
* **Sample Recipes**: Pre-loaded recipes for different combinations showcasing the app's output
* **AI Chef Chat**: Simulated chatbot interface demonstrating the conversational AI feature
* **Responsive Design**: Works on desktop and mobile devices
* **No Backend Required**: Fully functional demo without needing Google Cloud setup

**Note**: The mockup uses simulated data and does not connect to actual AI services. It's designed for demonstration, prototyping, and stakeholder previews
