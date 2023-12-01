# Masu Challenge

# App Structure

```bash
├── build
├── docs
├── src
│   ├── routes
│   │   └── dummy.ts
│   ├── services
│   │   └── productServices.ts
│   ├── types.d.ts
│   ├── utils.ts   
│   └── index.ts
├── .env
├── .gitignore
├── jsdoc.json
├── package.json
├── README.md
└── tsconfig.json
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

```bash
# Clone the repo.
git clone https://github.com/AgustinBonuccelli/masu.git;

# Goto the cloned project folder.
cd masu;

# Install NPM dependencies.
# Note: You can review the list of dependencies from the below link.
# https://github.com/faizahmedfarooqui/nodets/network/dependencies
npm install;

# Run the app
npm run dev;
```

# List of Routes

```sh
# Web Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /api/v1/products
  GET    | /api/v1/products/{id}
+--------+-------------------------+

# Other contents

postman collection attached

