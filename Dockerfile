# ---------- Build Stage ----------
FROM node:24-bookworm-slim AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install
RUN pnpm --filter @workspace/vaulti build

# ---------- Production Stage ----------
FROM nginx:alpine

COPY --from=builder /app/artifacts/vaulti/dist/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
