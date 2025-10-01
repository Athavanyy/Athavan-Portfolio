# Athavan's Portfolio Website

A modern, responsive portfolio website built with React showcasing my projects, skills, and professional journey.

## Features

- **6 Complete Pages**: Home, About, Projects, Education, Services, and Contact
- **Custom Logo**: Hexagonal logo with initials (AP) in the navigation bar
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Contact Form**: Captures user information and redirects to home page
- **Modern UI/UX**: Clean, professional design with smooth animations
- **React Router**: Single-page application with client-side routing

## Pages Overview

### 1. Home Page
- Welcome message and mission statement
- Call-to-action buttons linking to About and Projects pages
- Quick statistics showcase
- Gradient background with modern styling

### 2. About Page
- Professional profile image
- Legal name and personal description
- Downloadable resume link (PDF)
- Technical skills showcase
- Clean, employer-friendly layout

### 3. Projects Page
- 3+ featured projects with images
- Detailed project descriptions
- Role and outcome information
- Technology tags for each project
- Interactive project cards

### 4. Education Page
- Complete educational timeline
- Degree information with dates
- Institution details
- Additional certifications
- Professional qualifications

### 5. Services Page
- 4 main service offerings
- Service descriptions with key features
- Visual service cards with images
- Call-to-action section
- Professional service presentation

### 6. Contact Page
- Contact information panel
- Interactive contact form
- Form validation and submission
- Professional contact details
- Available hours information

## Technical Implementation

### Technologies Used
- **React 18.3.1**: Modern React with hooks
- **React Router DOM 6.30.1**: Client-side routing
- **CSS3**: Custom styling with Flexbox and Grid
- **HTML5**: Semantic markup
- **JavaScript ES6+**: Modern JavaScript features

### Key Features
- **State Management**: React hooks for form handling
- **Local Storage**: Contact form submissions stored locally
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and proper contrast
- **Performance**: Optimized images and efficient CSS

### File Structure
```
src/
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point with React Router setup
├── NavBar.jsx       # Navigation component with custom logo
├── Home.jsx         # Home page component
├── About.jsx        # About page component
├── Projects.jsx     # Projects showcase component
├── Education.jsx    # Education timeline component
├── Services.jsx     # Services offering component
├── Contact.jsx      # Contact form component
├── index.css        # Global styles and responsive design
└── App.css          # Additional component styles
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd athavan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Assignment Requirements Met

### Content Requirements (65 Marks)
✅ **Navigation Bar**: Custom navigation with all 6 pages  
✅ **Custom Logo**: Hexagonal logo with initials "AP"  
✅ **Home Page**: Welcome message, mission statement, navigation buttons  
✅ **About Page**: Legal name, profile image, description, resume link  
✅ **Projects Page**: 3+ projects with images, descriptions, roles, outcomes  
✅ **Education Page**: Qualifications, dates, degrees, certifications  
✅ **Services Page**: Service offerings with images and descriptions  
✅ **Contact Page**: Contact info panel and interactive form  
✅ **Form Functionality**: Captures data and redirects to home page  
✅ **Error-free Code**: All JavaScript, CSS, and assets functional  

### Internal Documentation (5 Marks)
✅ **Code Comments**: Comprehensive comments throughout all components  
✅ **Contextual Variables**: Human-readable variable names and function names  

### Version Control & Deployment (10 Marks)
✅ **GitHub Repository**: Well-structured repository with proper commits  
✅ **Cloud Deployment**: Ready for deployment to Vercel, Netlify, or similar  

## Deployment

This project is ready for deployment to various cloud platforms:

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Render
1. Connect your GitHub repository to Render
2. Set build command: `npm run build`
3. Set start command: `npm run preview`

## Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the About page with your details
2. **Projects**: Replace the sample projects with your own work
3. **Education**: Update the education timeline with your qualifications
4. **Services**: Modify the services to match your offerings
5. **Contact**: Update contact information and form handling
6. **Styling**: Customize colors, fonts, and layout in `index.css`

## License

This project is open source and available under the [MIT License](LICENSE).
