# NutriCare Clinic - Dietitian Website

A modern, responsive website for a professional dietitian clinic built with React and Tailwind CSS.

## 🌟 Features

### Complete Website Sections

1. **Navbar**
   - Responsive design with mobile menu
   - Smooth scroll navigation
   - Sticky header
   - "Book Appointment" CTA button

2. **Hero Section**
   - Eye-catching headline and subheading
   - Call-to-action buttons
   - Statistics showcase (10+ years, 5000+ clients, 98% success rate)
   - Professional imagery

3. **About Section**
   - Clinic mission and values
   - Professional dietitian image
   - Key features with icons
   - Certified professionals highlight

4. **Services Section**
   - 8 service cards with icons:
     - Weight Management
     - Diabetes Care
     - Sports Nutrition
     - Child Nutrition
     - Heart Health
     - Meal Planning
     - Digestive Health
     - Online Consultations
   - Hover effects and animations
   - Free consultation CTA

5. **Diet Plans Section**
   - 4 customizable plans:
     - Weight Loss Plan ($99/month)
     - Performance Plan ($149/month) - Most Popular
     - Wellness Plan ($79/month)
     - Medical Nutrition Therapy ($129/month)
   - Detailed features for each plan
   - Custom plan option with consultation

6. **Testimonials Section**
   - Interactive carousel with 6 client testimonials
   - 5-star ratings
   - Before/after results
   - Navigation arrows and dot indicators
   - Success statistics

7. **Contact/Appointment Section**
   - Comprehensive contact form
   - Service selection dropdown
   - Contact information cards
   - Office hours
   - Form validation and submission handling

8. **Footer**
   - Quick links
   - Contact information
   - Social media icons (Facebook, Instagram, Twitter, LinkedIn)
   - Copyright and legal links

## 🎨 Design Features

- **Color Scheme**: Green (#059669), White, Light Beige/Gray
- **Responsive Design**: Mobile-first approach, works on all devices
- **Animations**: Fade-in effects, hover transitions, smooth scrolling
- **Modern UI**: Clean, professional, health-oriented design
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🛠️ Technologies Used

- **React 19** - UI Framework
- **React Router DOM** - Navigation
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Unsplash Images** - Professional stock photos

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Components

- `Header.jsx` - Navigation bar with mobile menu
- `Footer.jsx` - Footer with links and contact info
- `HeroSection.jsx` - Landing section with CTA
- `AboutSection.jsx` - About the clinic
- `ServicesSection.jsx` - Services grid
- `DietPlansSection.jsx` - Pricing and plans
- `TestimonialsSection.jsx` - Client reviews carousel
- `ContactSection.jsx` - Contact form and information

## 📝 Customization

### Change Colors

Edit the Tailwind classes in components. Primary color classes:
- `bg-green-600` - Backgrounds
- `text-green-600` - Text
- `border-green-600` - Borders

### Update Content

- **Contact Information**: Edit `Footer.jsx` and `ContactSection.jsx`
- **Services**: Modify the `services` array in `ServicesSection.jsx`
- **Diet Plans**: Update the `dietPlans` array in `DietPlansSection.jsx`
- **Testimonials**: Edit the `testimonials` array in `TestimonialsSection.jsx`

### Add New Pages

1. Create a new component in `src/pages/`
2. Add a route in `App.jsx`:
   ```jsx
   <Route path="/your-path" element={<YourPage />} />
   ```
3. Add navigation link in `Header.jsx`

## ✨ Optional Enhancements

Future improvements that can be added:

1. **Dark Mode Support**
   - Add theme toggle in header
   - Use Tailwind's dark mode classes

2. **FAQ Section**
   - Create collapsible accordion component
   - Add common questions and answers

3. **Booking Modal**
   - Interactive calendar for scheduling
   - Time slot selection
   - Email confirmation

4. **Blog Section**
   - Nutrition tips and articles
   - Recipe database
   - Health resources

5. **Online Payment**
   - Stripe/PayPal integration
   - Subscription management

6. **Client Portal**
   - Login/authentication
   - Progress tracking
   - Meal plan access

## 🔒 Security Notes

- Form submissions currently simulated (replace with actual backend)
- Add CAPTCHA for production use
- Implement proper form validation on backend
- Use environment variables for sensitive data

## 📄 License

This project is created for educational/portfolio purposes.

## 👥 Support

For questions or support, contact: info@nutricareclinic.com

---

Built with ❤️ using React and Tailwind CSS
