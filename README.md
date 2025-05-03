## Bunq hotspots

This project is a submission for a [Bunq Hackathon !](https://www.bunq.com/en-nl/hackathon) The topic of the hackathon was to create an AI agent ideally integrating Bunq API there.

The project itself is a web application that utilizes Bunq's OAuth and Python API that uses AI for operating with different datasets.

The idea lies in the personalized recommendations of different spots, like - cafes, restaurants, museums, etc. The personalization is being built by collecting user's payments that they are making, what are the kind of those payments and taking their geolocation data. The app design is made that way to also focus on clastering people. The map is personalized not only by your payments, but also where other people have been. Therefore makes to define **HOT** spots.

Our AI agent helps you find the next best place to go, based on where you've been and where the community is going.

## Tech stack
- TypeScript
- React
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

-   Node.js
-   npm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/d-stoianov/bunq-spendings-map.git
    cd bunq-spendings-map
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Configure .env file:

    `VITE_GOOGLE_MAPS_API_KEY=`
    `VITE_API_URL=`

5.  Start the development server:

    ```bash
    npm run dev
    ```

6.  Open your browser and navigate to `http://localhost:5173`.

## Project Structure

-   `src/`: Contains all the source code
    -   `app/`: Routing with each route
    -   `assets/`: Static assets - images, icons
    -   `components/`: Reusable components
    -   `context/`: React contexts
    -   `features/`: Main app features - map, chat, etc
    -   `mocks/`: Mocked json data
    -   `utils/`: Handy utility functions

## ESLint

The project uses ESLint and Prettier for code quality and consistency. You can run the linter with:

```bash
npm run lint
```

## Building project

To generate static assets for deployment the project, you can use the following command:

```bash
npm run build
```

## Building project

To generate static assets for deployment the project, you can use the following command:

```bash
npm run build
```
