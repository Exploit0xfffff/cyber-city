# CyberCity

CyberCity is a cybersecurity platform that collects all cybersecurity files, enables chat functionality, and provides new tools. The platform also offers training and job opportunities.

## Features

- **Chat Functionality**: Similar to Discord, with channels and user roles.
- **File Management**: Upload, download, and manage cybersecurity files.
- **User Authentication**: Secure login and registration with role-based access control.
- **AI Integration**: Integration with Google Gemini and OpenAI GPT-4 for AI functionalities.
- **Training Modules**: Access to various cybersecurity training modules.
- **Job Opportunities**: Listings of job opportunities in the cybersecurity field.
- **Interactive UI**: Modern and interactive user interface with dark mode, bright mode, and system mode.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kasinadhsarma/CyberCity.git
   cd CyberCity
   ```

2. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd ../backend
   npm install
   ```

4. Set up the SQLite database:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Netlify

The frontend is deployed to Netlify. To deploy the frontend, run:
```bash
npm run build
deploy_netlify build
```

### Vercel

The application is also set up for deployment via Vercel. Ensure the Vercel GitHub App is installed and configured for the repository.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
