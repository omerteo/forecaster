
# Forecaster

This is a Next.js project bootstrapped with `create-next-app` using TypeScript, Tailwind CSS, ESLint, Prisma ORM, and MongoDB.


## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up your MongoDB connection:**
   - Edit the `.env` file and set `DATABASE_URL` to your MongoDB connection string.
3. **Prisma setup:**
   - Define your models in `prisma/schema.prisma`.
   - Run `npx prisma generate` to generate the Prisma client.
   - (Optional) Run `npx prisma studio` to visually manage your data.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.


## Scripts
- `npm run dev` — Start the Next.js development server
- `npx prisma generate` — Generate Prisma client
- `npx prisma studio` — Open Prisma Studio

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
