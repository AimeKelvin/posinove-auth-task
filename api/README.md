# Posinove Auth API (Node + TS + JWT + Mongo + MVC)

Production-ready authentication boilerplate with:
- Register / Login / Logout
- Protected routes (`/api/v1/users/me`, `/api/v1/users/dashboard`)
- JWT in **HttpOnly cookies** (also returned in JSON for non-cookie clients)
- **Swagger UI** at `/docs`
- **Docker** & `docker-compose`
- Minimal **frontend** at `/` with forms + protected dashboard
- **Helmet**, **CORS**, **rate-limit**, **bcrypt**, **Joi** validation

## Quick Start (Local)

```bash
cd api
cp .env.example .env
npm i
npm run dev
