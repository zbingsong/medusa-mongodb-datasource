A connector to MongoDB for Medusa.

## Compatibility

Compatible with versions >= 1.8.0 of `@medusajs/medusa`. 

## Getting Started

Visit the [Quickstart Guide](https://docs.medusajs.com/create-medusa-app) to set up a server.

Visit the [Docs](https://docs.medusajs.com/development/backend/prepare-environment) to learn more about our system requirements.

## What is Medusa

Medusa is a set of commerce modules and tools that allow you to build rich, reliable, and performant commerce applications without reinventing core commerce logic. The modules can be customized and used to build advanced ecommerce stores, marketplaces, or any product that needs foundational commerce primitives. All modules are open-source and freely available on npm.

Learn more about [Medusa’s architecture](https://docs.medusajs.com/development/fundamentals/architecture-overview) and [commerce modules](https://docs.medusajs.com/modules/overview) in the Docs.

## How to use
0. If you don't have a Medusa backend yet, refer to the [Quickstart Guide](https://docs.medusajs.com/create-medusa-app).
1. Install the connector in your Medusa backend:
```npm install @medusajs/medusa-connector-mongodb```
2. Add the connector to your Medusa backend's `medusa-config.js`:
```js
module.exports = {
  // ...
  modules: {
    // ...
    cacheService: {
      resolve: "@medusajs/medusa-connector-mongodb",
      options: { 
        host: "localhost",
        port: 27017,
        database: "medusa",
      },
    },
  },
}
```
3. Create a repository that will be stored in MongoDB in your Medusa backend's `/src/repositories` folder:
```ts
import MongdoModule from "@medusajs/medusa-connector-mongodb";

export const MyMongotRepository = dataSource
  .getRepository(Product)
  .extend({
    // it is important to spread the existing repository here.
    //  Otherwise you will end up losing core properties
    ...MedusaProductRepository,

    /**
     * Here you can create your custom function
     * For example
     */
    customFunction(): void {
      // TODO add custom implementation
      return
    },
  })

export default ProductRepository
```
