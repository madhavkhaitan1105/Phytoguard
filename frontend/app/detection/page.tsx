"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Upload,
    X,
    Camera,
    FileImage,
    CheckCircle,
    AlertTriangle,
    Leaf,
    ArrowLeft,
    Download,
    Share2,
    RotateCcw
} from "lucide-react";
import Link from "next/link";

export default function DetectionPage() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisComplete, setAnalysisComplete] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [result, setResult] = useState<null | {
        disease: string;
        confidence: number;
    }>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFile = (file: File) => {
        if (file && file.type.startsWith("image/")) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
        setImagePreview(null);
        setAnalysisComplete(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const startAnalysis = async () => {
        if (!selectedImage) return;

        setIsAnalyzing(true);

        // Prepare form data
        const formData = new FormData();
        formData.append("image", selectedImage);

        try {
            const res = await fetch("http://localhost:8000/api/detect/", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (data.prediction && data.confidence !== undefined) {
                setResult({
                    disease: data.prediction,
                    confidence: data.confidence,
                });
            } else {
                setResult({
                    disease: "Unknown",
                    confidence: 0,
                });
            }
        } catch (error) {
            setResult({
                disease: "Error",
                confidence: 0,
            });
        }

        setIsAnalyzing(false);
        setAnalysisComplete(true);
    };

    const resetAnalysis = () => {
        setAnalysisComplete(false);
        setIsAnalyzing(false);
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="container-custom py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                                Back to Home
                            </Link>
                            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
                            <h1 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                                Plant Disease Detection
                            </h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-poppins font-semibold text-gray-900 dark:text-white">
                                Phytoguard
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 pt-24">
                <div className="max-w-4xl mx-auto">
                    {/* Upload Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="text-center mt-10 mb-8">
                            <h2 className="font-poppins font-bold text-3xl text-gray-900 dark:text-white pt-16 mb-4">
                                Upload Plant Photo
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Take a clear photo of the affected plant area for accurate disease detection
                            </p>
                        </div>

                        {!imagePreview ? (
                            <div
                                className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-200 ${dragActive
                                    ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                                    : "border-gray-300 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500"
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <div className="space-y-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                                        <Upload className="w-10 h-10 text-white" />
                                    </div>

                                    <div>
                                        <h3 className="font-poppins font-semibold text-xl text-gray-900 dark:text-white mb-2">
                                            Drag & Drop Your Image
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            or click to browse files
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                                        >
                                            <FileImage className="w-5 h-5 mr-2 inline" />
                                            Choose File
                                        </button>

                                        <button className="border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-8 py-3 rounded-xl transition-all duration-200">
                                            <Camera className="w-5 h-5 mr-2 inline" />
                                            Take Photo
                                        </button>
                                    </div>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Supports JPG, PNG, WEBP up to 10MB
                                    </p>
                                </div>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileInput}
                                    className="hidden"
                                />
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-6"
                            >
                                {/* Image Preview */}
                                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-poppins font-semibold text-lg text-gray-900 dark:text-white">
                                            Selected Image
                                        </h3>
                                        <button
                                            onClick={removeImage}
                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="relative group">
                                        <Image
                                            src={imagePreview}
                                            alt="Plant preview"
                                            width={400}
                                            height={256}
                                            className="w-full h-64 object-cover rounded-2xl"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-2xl flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                                                    View Full Size
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Analysis Controls */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    {!analysisComplete && !isAnalyzing && (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={startAnalysis}
                                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                        >
                                            <Leaf className="w-5 h-5" />
                                            Analyze Plant Disease
                                        </motion.button>
                                    )}

                                    {analysisComplete && (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={resetAnalysis}
                                            className="border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                                        >
                                            <RotateCcw className="w-5 h-5" />
                                            Analyze Another Image
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Analysis Loading */}
                    <AnimatePresence>
                        {isAnalyzing && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="mb-8"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </div>

                                        <h3 className="font-poppins font-semibold text-xl text-gray-900 dark:text-white mb-2">
                                            Analyzing Your Plant
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            Our AI is examining your image for disease patterns...
                                        </p>

                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full animate-shimmer"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Analysis Results */}
                    <AnimatePresence>
                        {analysisComplete && result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-6"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                                            Analysis Results
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <AlertTriangle className="w-8 h-8 text-white" />
                                            </div>
                                            <h4 className="font-poppins font-semibold text-lg text-gray-900 dark:text-white mb-2">
                                                {result.disease}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Disease Detected</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <span className="text-white font-bold text-xl">{result.confidence}%</span>
                                            </div>
                                            <h4 className="font-poppins font-semibold text-lg text-gray-900 dark:text-white mb-2">
                                                Confidence
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Accuracy Level</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
