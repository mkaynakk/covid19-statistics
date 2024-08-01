# React Covid19 İstatistik Uygulaması

Bu proje, Docker kullanarak containerized edilmiş bir React uygulamasıdır.

## Gereksinimler

- Docker
- Docker Compose (isteğe bağlı)

## Başlangıç

### Docker Image Oluşturma

Docker image'ınızı oluşturmak için aşağıdaki komutu kullanın:

```sh
docker build -t covid19statistics-app .
```

#### Docker Container’ını Çalıştırma

Docker container’ınızı başlatmak için aşağıdaki komutu kullanın:

```sh
docker run -p 3000:3000 covid19statistics-app
```

Bu komut, uygulamanızı http://localhost:3000 adresinde çalıştıracaktır.

---

Kullanılabilir NPM Komutları

-     npm run dev: Geliştirme sunucusunu başlatır.
-     npm run build: Uygulamayı production için derler.
-     npm run lint: Kodunuzu ESLint ile denetler.
-     npm run preview: Production derlemesini önizler.
-     npm run format:check: Kodunuzu Prettier ile biçim kontrolünden geçirir.
-     npm run format: Kodunuzu Prettier ile biçimlendirir.
-     npm run test: Testleri çalıştırır.
-     npm run test:watch: Tüm testleri izleme modunda çalıştırır.

NOT: Manuel çalıştırmada, ".env.example" dosyası kopyalanıp, adı değiştirilerek ".env" yapılmalıdır!
