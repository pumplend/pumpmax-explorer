# blockkube-explorer

`blockkube-explorer` is a lightweight, feature-rich blockchain explorer designed to provide real-time insights into the Ethereum blockchain. Built with Next.js and MongoDB, it leverages Web3.js for blockchain interactions, offering users a responsive and intuitive interface to query blocks, transactions, and wallet balances.

## Features

- **Real-time Blockchain Data**: Explore the latest blocks and transactions on the Ethereum blockchain.
- **Wallet Information**: View detailed wallet balances and transaction histories.
- **Responsive Design**: A user-friendly interface built with Tailwind CSS, optimized for both desktop and mobile devices.
- **Dynamic Data Fetching**: Utilizes Web3.js to interact with Ethereum nodes, ensuring up-to-date blockchain information.
- **Server-Side Rendering**: Leveraging Next.js for fast page loads and SEO-friendly content rendering.

## Prerequisites

Before you begin, ensure you have installed the following on your system:

- Node.js (v14 or newer)
- npm (v6 or newer)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-github/blockkube-explorer.git
   cd blockkube-explorer
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy the `.env.example` file to `.env`.
   - Fill in the `NEXT_PUBLIC_ETH_NODE_URL` with your Ethereum node URL.
   - Set your `MONGODB_URI` to point to your MongoDB instance.
   - Optionally, set `INDEX_PAST_BLOCKS=true` if you wish to index all past blockchain blocks up to the current block. **Caution**: This process can be resource-intensive and time-consuming, depending on how far back the indexing goes.

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

For production, build the application and then start the server:

```
npm run build
npm start
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you have any features, fixes, or improvements.
