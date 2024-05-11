# Jobs Scraper Web Application

Repository ini adalah proyek aplikasi Jobs Scraper yang menggunakan Next.js untuk frontend. Aplikasi ini mengumpulkan informasi lowongan pekerjaan dari berbagai situs job portal, menyimpannya dalam database, dan menyediakannya melalui API. Frontend aplikasi memungkinkan pengguna untuk melihat dan mencari lowongan pekerjaan yang tersedia.

## Teknologi yang Digunakan

### Backend
- **Bahasa Pemrograman:** Python
- **Framework:** FastAPI
- **Database:** MongoDB

### Frontend
- **Framework:** Next.js
- **Bahasa Pemrograman:** TypeScript
- **Styling:** Tailwind CSS

## Fitur Utama

1. **Job Scraping:**
   - Mengumpulkan data lowongan pekerjaan dari jobstreet.co.id, karir.com, kalibrr.com, dan linkedin.com.
   - Menyimpan data lowongan pekerjaan ke MongoDB.

2. **API Server:**
   - Menyediakan endpoint untuk mengakses data lowongan pekerjaan.
   - Endpoint untuk mendapatkan semua lowongan pekerjaan, lowongan berdasarkan ID, dan pencarian lowongan berdasarkan filter.

3. **Frontend:**
   - Menampilkan data lowongan pekerjaan dari API.
   - Fitur pencarian dan filter lowongan pekerjaan.


## Install and Running the Web Application 

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmadrafidev/jobs-scraper-web

2. Navigate to the directory:
   ```bash 
   cd jobs-scraper-web

3. Install the dependencies:
    ```bash 
    npm install

4. Run the application:
    ```bash 
    npm run dev

**Note**: 
Aplikasi Backend dan Scraper bisa baca di repository: [Jobs Scraper Backend](https://github.com/ahmadrafidev/jobs-scraper-backend)
