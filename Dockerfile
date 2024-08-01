# Temel imaj olarak Node.js kullanılıyor
FROM node:18-alpine AS base

# Uygulama dizinini oluştur ve çalışma dizini olarak ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını çalışma dizinine kopyala ve bağımlılıkları yükle
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulamanın çalışacağı port
EXPOSE 3000

# Nodemon ile uygulamayı başlat
CMD ["npx", "nodemon", "src/main.tsx"]