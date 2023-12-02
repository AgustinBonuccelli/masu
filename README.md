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

# Install, Configure & Run, Regenerate docs

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

Regenerate docs
```bash
# Compile typescript
npm run tsc;

# Run the jdoc
npm run docs;
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

## Postman collection
Attached in resources folder [/resources/Masu.postman_collection.json ](https://github.com/AgustinBonuccelli/masu/blob/master/resources/Masu.postman_collection.json)

![image](https://github.com/AgustinBonuccelli/masu/assets/126742419/6b0210a0-eaf6-4c7d-9faf-5f29cd3f4af2)

## Presentation of the solution
Power point PPT with solution is attached in resources folder [/resources/Masu.](https://github.com/AgustinBonuccelli/masu/blob/master/resources/Masu.pptx)
![image](https://github.com/AgustinBonuccelli/masu/assets/126742419/d2ab6aee-4d2f-4abc-bfd7-dba513ea90bc)


## Diagram flow

![image](https://github.com/AgustinBonuccelli/masu/assets/126742419/177c1ff0-53bc-47a0-a098-4d467c49c9d3)


