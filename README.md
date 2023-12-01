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
├── resources
│   ├── Massu.pptx
│   └── Masu.postman_collection.json
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
```

# Other contents

Postman collection is attached in resources folder

![image](https://github.com/AgustinBonuccelli/masu/assets/126742419/6b0210a0-eaf6-4c7d-9faf-5f29cd3f4af2)

PPT with solution is attached in resources folder

Diagram

![image](https://github.com/AgustinBonuccelli/masu/assets/126742419/752bb777-1ac2-4d9c-b5b8-595ceb192c6f)


