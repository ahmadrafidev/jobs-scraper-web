# Jobs Scraper Web Application

This repository is a Jobs Scraper application project that uses Next.js for the frontend. This application collects job vacancy information from various job portal sites, stores it in a database, and provides a list of job vacancies via API. In this service, the frontend of the application allows users to view and search for available job vacancies.

## Technology Used

### Backend
- **Programming Language:** Python
- **Framework:** FastAPI
- **Database:** MongoDB

### Frontend
- **Web Client Framework:** Next.js
- **Mobile Client Framework:** React Native with Expo
- **Bahasa Pemrograman:** TypeScript
- **Styling:** Tailwind CSS

## Main feature

1. **Job Scraping:**
    - Collect job vacancy data from jobstreet.co.id, karir.com, kalibrr.com, and linkedin.com.
    - Save job vacancy data to MongoDB.

2. **Server API:**
    - Provides an endpoint to access job vacancy data.
    - Endpoint to get all job vacancies, vacancies by ID, and search vacancies by filter.

3. **Frontend:**
    - Displays job vacancy data from the API.
    - Job vacancy search and filter feature.


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

5. Build for the production:
   ```bash
   npm run build
   ```

**Note**: 

1. Backend services and scrapers that handle business logic regarding applications can be accessed through the repository: [Jobs Scraper Backend](https://github.com/ahmadrafidev/jobs-scraper-backend)
2. Mobile client services that handle user interactions via mobile applications can be accessed through the repository: [Jobs Scraper Mobile](https://github.com/ahmadrafidev/jobs-scraper-mobile)
