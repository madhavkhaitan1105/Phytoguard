# Phytoguard - Plant Disease Detection Platform

A modern, responsive React application for AI-powered plant disease detection. Built with cutting-edge web technologies and designed with farmers and agricultural professionals in mind.

## 🌟 Features

### 🏠 **Home Page**
- **Hero Section**: Eye-catching gradient background with floating animations
- **Features Section**: Interactive cards showcasing key benefits
- **How It Works**: Step-by-step process explanation with animations
- **Responsive Design**: Optimized for all device sizes

### 🔍 **Detection Page**
- **Drag & Drop Upload**: Intuitive file upload with visual feedback
- **Image Preview**: 3D tilt effect on hover for uploaded images
- **Mock Analysis**: Realistic loading states and progress indicators
- **Result Cards**: Detailed disease information with confidence scores
- **Treatment Recommendations**: Actionable advice for farmers

### 👥 **About Page**
- **Team Section**: Animated team member cards
- **Project Timeline**: Interactive roadmap with scroll animations
- **Tech Stack**: Modern technology showcase
- **Company Values**: Mission and vision presentation

### 📧 **Contact Page**
- **Contact Form**: Floating label design with validation
- **Contact Information**: Multiple ways to reach the team
- **Success Toast**: Animated confirmation messages
- **Response Time**: Clear expectations for communication

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Routing**: React Router DOM for navigation
- **Icons**: React Icons (Font Awesome)
- **HTTP Client**: Axios (configured for future backend integration)

## 🎨 Design System

### Color Palette
- **Primary Gradient**: `from-green-400 via-green-500 to-green-700`
- **Background**: `bg-emerald-50` (light) / `bg-gray-900` (dark)
- **Text**: `text-gray-800` (primary) / `text-gray-600` (secondary)
- **Accent**: `text-green-600` with hover effects

### Typography
- **Headings**: Poppins (600-700 weight)
- **Body Text**: Inter (400 weight)
- **Responsive Sizing**: Tailwind utilities for consistent scaling

### Components
- **Glass Cards**: `backdrop-blur-md bg-white/60` with subtle borders
- **Gradient Borders**: Animated gradient borders for emphasis
- **Rounded Corners**: `rounded-2xl` for modern appearance
- **Shadows**: `shadow-lg hover:shadow-xl` with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd phytoguard/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Screens**: 1440px+

### Mobile Optimizations
- Simplified animations on smaller screens
- Touch-friendly button sizes
- Optimized typography scaling
- Hidden decorative elements on mobile

## 🌙 Dark Mode

- **Toggle**: Available in the navigation bar
- **Persistence**: Theme preference saved in localStorage
- **Smooth Transitions**: 300ms transition between themes
- **Custom Styling**: Dark-optimized glass cards and colors

## 🎭 Animations

### Framer Motion Features
- **Page Transitions**: Smooth entry animations
- **Scroll Animations**: Elements animate into view
- **Hover Effects**: Interactive feedback on user actions
- **Loading States**: Shimmer effects and progress indicators
- **Micro-interactions**: Button presses and icon rotations

### Performance
- **Optimized Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Animations only trigger when in viewport
- **Reduced Motion**: Respects user accessibility preferences

## 🔧 Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Styling Guidelines
- Use Tailwind utilities for consistency
- Follow the established color palette
- Maintain glass card design patterns
- Ensure dark mode compatibility

### Animation Patterns
- Use `motion.div` for animated containers
- Implement `whileHover` and `whileTap` for interactions
- Add `initial`, `animate`, and `transition` props
- Use `AnimatePresence` for mount/unmount animations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🔮 Future Enhancements

- **Backend Integration**: Connect to real plant disease detection API
- **User Authentication**: Login/signup functionality
- **Image Gallery**: Save and manage uploaded images
- **Disease Database**: Comprehensive plant disease information
- **Mobile App**: React Native version
- **Offline Support**: PWA capabilities
- **Multi-language**: Internationalization support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email contact@phytoguard.com or join our community discussions.

---

Built with ❤️ for the agricultural community