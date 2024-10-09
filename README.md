# TypeMaster

TypeMaster is a web application designed to test and improve typing speed. Built with Next.js, Tailwind CSS, TypeScript, and Firebase for authentication, TypeMaster offers users a sleek and responsive interface to measure their typing performance.

## Demo

Try the live demo: [TypeMaster Demo](https://6706e9af47288b564aa80a46--typing-speed-testp.netlify.app/)

## Features

- **Typing Speed Test:** Measure your typing speed over different time intervals (15s, 30s, 60s, etc.).
- **Authentication:** Secure sign-in and sign-up features powered by Firebase.
- **Real-time Feedback:** Get instant feedback on your typing accuracy and speed.
- **User Accounts:** Track your progress and scores by logging into your account.
- **Custom Themes:** Dark mode available for comfortable typing sessions.
- **Leaderboard:** Compare your scores with other users (upcoming feature).

## Screenshots

![Screenshot 1](path-to-screenshot.png)
![Screenshot 2](path-to-screenshot.png)

## Getting Started

To run TypeMaster locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/typemaster.git
    ```

2. Navigate to the project directory:

    ```bash
    cd typemaster
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up Firebase:

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Enable authentication and set up Firestore.
    - Add your Firebase config to `.env.local`:

    ```bash
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view TypeMaster.

## Technologies Used

- **Next.js** – React framework for server-side rendering and static site generation.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **TypeScript** – Superset of JavaScript for type safety.
- **Firebase** – Authentication and database.

## Authors

- Your Name
  - [GitHub](https://github.com/yourusername)
  - [LinkedIn](https://linkedin.com/in/yourprofile)

Feel free to customize this documentation based on the project specifics and features.
