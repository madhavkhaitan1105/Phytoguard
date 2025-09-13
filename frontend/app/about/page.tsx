"use client";

import { motion } from "framer-motion";
import {
    Leaf,
    Target,
    Users,
    Award,
    Code,
    Database,
    Smartphone,
    Brain,
    Github,
    Linkedin,
    Mail,
    Calendar,
    MapPin,
    ExternalLink
} from "lucide-react";

export default function AboutPage() {
    const team = [
        {
            name: "Madhav Khaitan",
            role: "Model Training & Dataset Curation",
            description: "Expert in machine learning and computer vision, responsible for training our AI models and curating high-quality plant disease datasets.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            skills: ["Machine Learning", "Python"]
        },
        {
            name: "Maanyata Aul",
            role: "Backend Developer",
            description: "Backend specialist focused on building robust APIs and server infrastructure to power our plant disease detection platform.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
            skills: ["Django", "REST APIs", "Database Design", "Python"]
        },
        {
            name: "Raghav Katta",
            role: "Full Stack Developer",
            description: "Full Stack developer creating intuitive, responsive user interfaces that make plant disease detection accessible to everyone and integrating the frontend with the backend.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            skills: ["Next.js", "Framer Motion", "TypeScript", "UI/UX Design"]
        }
    ];

    const techStack = [
        {
            name: "Next.js",
            description: "React framework for production",
            icon: Code,
            color: "from-gray-400 to-gray-600"
        },
        {
            name: "Django REST",
            description: "Python web framework for APIs",
            icon: Database,
            color: "from-green-400 to-green-600"
        },
        {
            name: "TensorFlow",
            description: "Machine learning platform",
            icon: Brain,
            color: "from-orange-400 to-orange-600"
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework",
            icon: Smartphone,
            color: "from-cyan-400 to-cyan-600"
        },
        {
            name: "Framer Motion",
            description: "Animation library for React",
            icon: Award,
            color: "from-purple-400 to-purple-600"
        },
        {
            name: "TypeScript",
            description: "Typed JavaScript",
            icon: Code,
            color: "from-blue-400 to-blue-600"
        }
    ];

    const values = [
        {
            icon: Target,
            title: "Accuracy",
            description: "We strive for the highest accuracy in plant disease detection to help farmers make informed decisions."
        },
        {
            icon: Users,
            title: "Accessibility",
            description: "Making advanced AI technology accessible to farmers worldwide, regardless of their technical background."
        },
        {
            icon: Leaf,
            title: "Sustainability",
            description: "Promoting sustainable farming practices through early disease detection and reduced chemical usage."
        },
        {
            icon: Award,
            title: "Innovation",
            description: "Continuously improving our technology to stay at the forefront of agricultural AI solutions."
        }
    ];

    const stats = [
        { number: "95%", label: "Detection Accuracy" },
        { number: "50K+", label: "Images Analyzed" },
        { number: "100+", label: "Disease Types" },
        { number: "24/7", label: "Availability" }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding pt-24 bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="font-poppins font-bold pt-16 text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                            About <span className="gradient-text">Phytoguard</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            We're a passionate team of developers and researchers dedicated to revolutionizing
                            agriculture through AI-powered plant disease detection.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="font-poppins font-bold text-3xl sm:text-4xl text-green-600 dark:text-green-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                To empower farmers worldwide with cutting-edge AI technology that enables early
                                detection of plant diseases, helping them protect their crops and maximize yields
                                while promoting sustainable farming practices.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                We believe that technology should be accessible to everyone, and our platform
                                makes advanced plant disease detection available to farmers regardless of their
                                technical expertise or resources.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 text-white">
                                <div className="text-center">
                                    <Leaf className="w-16 h-16 mx-auto mb-6" />
                                    <h3 className="font-poppins font-bold text-2xl mb-4">
                                        Vision
                                    </h3>
                                    <p className="text-green-100 leading-relaxed">
                                        A world where every farmer has access to AI-powered tools that help them
                                        grow healthier crops and contribute to global food security.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We're a diverse team of passionate individuals working together to make
                            plant disease detection accessible to farmers worldwide.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="text-center mb-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-poppins font-semibold text-sm text-gray-900 dark:text-white">
                                        Skills & Expertise
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-medium rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center gap-4 mt-6">
                                    <a
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="section-padding bg-white dark:bg-gray-900">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                            Technology Stack
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We use cutting-edge technologies to build a robust, scalable, and user-friendly
                            plant disease detection platform.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center`}>
                                        <tech.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-poppins font-semibold text-lg text-gray-900 dark:text-white">
                                            {tech.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {tech.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            These core values guide everything we do and shape our commitment to
                            farmers and sustainable agriculture.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-poppins font-semibold text-xl text-gray-900 dark:text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="section-padding bg-gradient-to-r from-green-500 to-green-600">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Have questions about Phytoguard or want to collaborate with us?
                            We'd love to hear from you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:contact@phytoguard.com"
                                className="bg-white text-green-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Us
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <Github className="w-5 h-5" />
                                View on GitHub
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
