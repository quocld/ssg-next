# SSG Landing Page

A modern, performant landing page built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🔒 TypeScript for type safety
- 🌐 Internationalization support
- 🐳 Docker containerization
- 🧹 ESLint & Prettier for code quality
- 🐶 Husky for git hooks
- 📝 Commitlint for commit message standardization
- 🚀 Optimized for production

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
- **Containerization**: Docker

## 📦 Prerequisites

- Node.js 18.x or later
- pnpm 8.x or later
- Docker (optional)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd ssg-landingpage
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Development

- **Code Formatting**: Run `pnpm format` to format code
- **Linting**: Run `pnpm lint` to check code quality
- **Type Checking**: Run `pnpm type-check` to verify TypeScript types

## 🐳 Docker Support

Build and run the application using Docker:

```bash
# Build the image
docker build -t ssg-landingpage .

# Run the container
docker run -p 3000:3000 ssg-landingpage
```

## 📝 Commit Guidelines

This project uses conventional commits. Please follow the commit message format:
```
type(scope): description
```

Types:
- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: code style changes
- refactor: code refactoring
- test: test related changes
- chore: maintenance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
