# WhatsApp Group Invitation Page

This project is a Next.js application that dynamically generates invitation pages for WhatsApp groups. It fetches group data from a SheetDB API and uses it to create a customized landing page for each group.

## Project Structure

The project is structured as a standard Next.js application with a `src` directory:

-   `src/app/`: This directory contains the main application logic.
    -   `[groupid]/page.tsx`: This is a dynamic route that generates the invitation page for a specific group. It fetches data from the SheetDB API based on the `groupid` from the URL.
    -   `layout.tsx`: This is the main layout for the application. It sets the language to Arabic and includes the "Cairo" font.
    -   `globals.css`: This file contains the global CSS styles for the application, including the Tailwind CSS directives.
-   `public/`: This directory contains static assets, such as images.
-   `package.json`: This file contains the project's dependencies and scripts.
-   `next.config.js`: This file contains the configuration for the Next.js application.
-   `tailwind.config.ts`: This file contains the configuration for Tailwind CSS.
-   `tsconfig.json`: This file contains the configuration for TypeScript.

## Getting Started

To get started with the project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```
2.  **Install the dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Open your browser:**
    Open your browser and navigate to `http://localhost:3000/[groupid]`, where `[groupid]` is the ID of the WhatsApp group you want to join. For example, to join the "ahmedali" group, you would navigate to `http://localhost:3000/ahmedali`.
