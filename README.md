# 🚀 Astro + Sanity + Turborepo Starter

⚡️ Kickstart your web projects with the [Astro](https://astro.build/) + [Sanity](https://www.sanity.io/) + [Truborepo](https://turbo.build/) Starter! Integrate Astro, Sanity, and Turborepo for high performance, Core Web Vitals optimization, and SEO-friendly web development. Perfect for building modern, fast, and flexible web applications with ease.

## Features

- **Portable Text**: Flexible rich text handling with customizable structures.
- **Type Safety**: TypeScript support throughout the project.
- **SEO Optimization**: Dynamic metadata fetching and SEO-friendly URLs.
- **Sanity Integration**: Seamless content management with Sanity CMS.
- **Error Handling**: Robust error management in metadata and content fetching.
- **Customizable Components**: Flexibility in rendering text and links.
- **Development Tools**: Integrated ESLint, Prettier, and TypeScript for high code quality.
- **Preview Functionality**: Fast content preview and internal linking within Sanity.
- **Singleton Types & Validation**: Ensures data integrity and easy management of global settings.

## Advantages

- **Performance**: Fast builds and efficient development with Turborepo.
- **Type Safety**: Comprehensive TypeScript integration for reliable code.
- **SEO-Ready**: Built-in optimizations for improved SEO performance.
- **Seamless Integration**: Smooth content management with Sanity.
- **Customizability**: Extensible components and flexible Portable Text configuration.
- **CI/CD**: Automated Sanity deployments with GitHub Actions.

## Setup Instructions

### 1. Environment Variables

Set the following environment variables for local or production setups:

**Sanity Studio Preview**

In the `/apps/sanity` directory, create a `.env.local` file with:

```
SANITY_STUDIO_PREVIEW_DOMAIN=<your_dev_deployment_URL>
```

**Astro API Token**

In the `/apps/astro` directory, create a `.env.local` file with:

```
SANITY_API_TOKEN=<your_sanity_token>
```

_Generate this token in your Sanity project dashboard._

### 2. Constant Files

Update `constants.ts` in both `/apps/sanity/constants.ts` and `/apps/astro/src/global/constants.ts` directories to match your project settings.

### 3. Project ID

Update the `projectId` in:

- `/apps/astro/src/utils/sanity.fetch.ts`
- `/apps/sanity/sanity.cli.ts`
- `/apps/sanity/sanity.config.ts`

_Ensure these IDs correspond to your Sanity project._

### 4. GitHub Actions

To automatically deploy the Sanity Studio:

- **Deployment Trigger**: Automatic deployment occurs when you push changes to any file within the `/apps/sanity/*` directory.
- **Required Environment Variables**:
  - `SANITY_DEPLOY_STUDIO_TOKEN`: Add this token to your GitHub project's environment variables for deployment.
  - `SANITY_STUDIO_PREVIEW_DOMAIN`: Set this variable for your preview deployment domain in Sanity Studio.

## Authors

- [@milewskibogumil](https://github.com/milewskibogumil)
