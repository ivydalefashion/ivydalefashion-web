# 🛍️ Ivydale Fashion — NestJS Backend

Full-featured REST API backend for Ivydale Fashion e-commerce platform.

## 🏗️ Stack

- **Framework**: NestJS + TypeScript
- **ORM**: Prisma
- **Database**: SQLite
- **Auth**: JWT + Google OAuth (Passport.js)
- **Admin Panel**: AdminJS
- **File Uploads**: Cloudinary
- **Docs**: Swagger (OpenAPI)
- **Formatting**: Prettier

---

## 📁 Project Structure

```
ivydale-backend/
├── prisma/
│   ├── schema.prisma       ← Database schema
│   └── seed.ts             ← Seed script
├── src/
│   ├── admin/              ← AdminJS panel config
│   ├── auth/               ← JWT + Google OAuth
│   │   ├── dto/
│   │   ├── guards/
│   │   └── strategies/
│   ├── blog/               ← Blog CRUD
│   ├── brands/             ← Brand CRUD
│   ├── categories/         ← Category CRUD
│   ├── cloudinary/         ← File upload
│   ├── orders/             ← Order management
│   ├── products/           ← Product CRUD + reviews
│   ├── users/              ← User profile + addresses
│   ├── wishlist/           ← Wishlist management
│   ├── app.module.ts
│   ├── main.ts
│   ├── prisma.module.ts
│   └── prisma.service.ts
└── .env.example
```

---

## 🚀 Setup (Step by Step)

### Step 1 — Install dependencies

```bash
cd ivydale-backend
npm install
```

### Step 2 — Create your `.env` file

```bash
cp .env.example .env
```

Then fill in your values:

```env
PORT=3001
DATABASE_URL="file:./ivydale.db"
JWT_SECRET=your_very_secret_key
GOOGLE_CLIENT_ID=from_google_console
GOOGLE_CLIENT_SECRET=from_google_console
GOOGLE_CALLBACK_URL=http://localhost:3001/api/auth/google/callback
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
ADMIN_EMAIL=admin@ivydalefashion.co.za
ADMIN_PASSWORD=Admin@123!
COOKIE_SECRET=some_random_cookie_secret
FRONTEND_URL=http://localhost:3000
```

### Step 3 — Generate Prisma Client

```bash
npm run prisma:generate
```

### Step 4 — Run database migration

```bash
npm run prisma:migrate
```
> When prompted, name your migration e.g. `init`

### Step 5 — Seed the database (optional but recommended)

```bash
npm run prisma:seed
```

### Step 6 — Start the server

```bash
# Development (with hot reload)
npm run start:dev

# Production
npm run build && npm run start:prod
```

---

## 🔗 API Endpoints

All routes are prefixed with `/api`.

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login (email + password) |
| GET | `/api/auth/google` | Initiate Google OAuth |
| GET | `/api/auth/google/callback` | Google OAuth callback |
| GET | `/api/auth/me` | Get current user (JWT required) |

### Users
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/users/profile` | Get my profile |
| PATCH | `/api/users/profile` | Update my profile |
| GET | `/api/users/addresses` | Get my addresses |
| POST | `/api/users/addresses` | Add address |
| PATCH | `/api/users/addresses/:id` | Update address |
| DELETE | `/api/users/addresses/:id` | Delete address |

### Brands
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/brands` | All brands |
| GET | `/api/brands/:slug` | Brand by slug |
| GET | `/api/brands/:slug/products` | Brand's products |
| POST | `/api/brands` | Create brand (Admin) |
| PATCH | `/api/brands/:id` | Update brand (Admin) |
| DELETE | `/api/brands/:id` | Delete brand (Admin) |

### Products
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/products` | Products (supports filters) |
| GET | `/api/products/featured` | Featured products |
| GET | `/api/products/:slug` | Product detail |
| POST | `/api/products` | Create product (Admin) |
| PATCH | `/api/products/:id` | Update product (Admin) |
| PATCH | `/api/products/:id/featured` | Toggle featured (Admin) |
| DELETE | `/api/products/:id` | Delete product (Admin) |
| POST | `/api/products/:id/reviews` | Add review |

**Product Query Params**: `?brandSlug=adidas&categorySlug=hoodies&featured=true&search=jersey&minPrice=100&maxPrice=1000&page=1&limit=20`

### Categories
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/categories` | All categories |
| GET | `/api/categories/:slug` | Category detail |
| POST | `/api/categories` | Create (Admin) |
| PATCH | `/api/categories/:id` | Update (Admin) |
| DELETE | `/api/categories/:id` | Delete (Admin) |

### Orders
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/orders` | My orders |
| GET | `/api/orders/:id` | Order detail |
| POST | `/api/orders` | Create order |
| PATCH | `/api/orders/:id/status` | Update status (Admin) |

### Wishlist
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/wishlist` | My wishlist |
| POST | `/api/wishlist/:productId` | Toggle wishlist item |
| DELETE | `/api/wishlist/:productId` | Remove from wishlist |

### Blog
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/blog/posts` | Published posts |
| GET | `/api/blog/posts/all` | All posts (Admin) |
| GET | `/api/blog/posts/:slug` | Post detail |
| POST | `/api/blog/posts` | Create post (Admin) |
| PATCH | `/api/blog/posts/:id` | Update post (Admin) |
| DELETE | `/api/blog/posts/:id` | Delete post (Admin) |
| GET | `/api/blog/tags` | All tags |
| POST | `/api/blog/tags` | Create tag (Admin) |
| GET | `/api/blog/authors` | All authors |
| POST | `/api/blog/authors` | Create author (Admin) |

### Cloudinary
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/cloudinary/upload` | Upload file |
| DELETE | `/api/cloudinary/:publicId` | Delete file (Admin) |

---

## 📖 Swagger Docs

Visit: `http://localhost:3001/api/docs`

---

## 🔧 Admin Panel

Visit: `http://localhost:3001/admin`

Login with your `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env`.

The admin panel gives you a GUI to manage:
- Users
- Brands (including setting featured products)
- Categories
- Products (toggle featured on/off)
- Orders (update status, add tracking)
- Blog posts, authors, tags

---

## 🎨 Prettier (Code Formatting)

```bash
# Format all files
npm run prettier:fix

# Or lint + fix
npm run lint
```

---

## 🌐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project → Enable **Google+ API** / **Google Identity**
3. Go to **Credentials** → Create **OAuth 2.0 Client ID**
4. Set Authorized redirect URI to:
   - Dev: `http://localhost:3001/api/auth/google/callback`
   - Prod: `https://your-render-url.onrender.com/api/auth/google/callback`
5. Copy Client ID and Secret into your `.env`

---

## ☁️ Cloudinary Setup

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Go to Dashboard → copy your Cloud Name, API Key, API Secret
3. Paste into your `.env`

---

## 🚀 Deploying to Render

1. Push code to GitHub
2. Create a new **Web Service** on Render
3. Set **Build Command**: `npm install && npm run prisma:generate && npm run prisma:migrate && npm run build`
4. Set **Start Command**: `npm run start:prod`
5. Add all environment variables from `.env.example`
6. For `DATABASE_URL`, use `file:./ivydale.db` — Render has persistent disk if you attach one
7. Set `NODE_ENV=production`

> ⚠️ **Important for Render**: SQLite files are ephemeral on Render's free tier. Add a persistent disk and update `DATABASE_URL` to point to the disk path, e.g. `file:/var/data/ivydale.db`

---

## 🔐 Auth Flow (Frontend Integration)

### Email Login
```
POST /api/auth/login → returns { user, token }
```
Store `token` in localStorage or cookie. Send as:
```
Authorization: Bearer <token>
```

### Google Login
```
Redirect user to: GET /api/auth/google
→ User logs in with Google
→ Redirected to: FRONTEND_URL/auth/google/success?token=<jwt>
→ Frontend reads token from URL, stores it
```

---

## 🗄️ Database Schema Overview

```
User ──────┐
           ├── Address (many)
           ├── Order (many) ──── OrderItem (many) ──── Product
           ├── WishlistItem ──── Product
           └── Review ────────── Product

Brand ──── Product ──── Category
                   ──── ProductImage
                   ──── ProductVariant
                   ──── Review

BlogPost ── BlogAuthor
         ── BlogTag (many-to-many)
         ── BlogImage
```
