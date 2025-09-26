import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, MapPin } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg')] bg-cover bg-center opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-200 rounded-full blur-2xl opacity-40"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200">
            <Leaf className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Premium Japanese Matcha</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight">
            Matcha with
            <span className="block text-green-600">Elegance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the finest Japanese matcha, now in Agdal. Where tradition meets modern sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/menu">
              <Button size="lg" icon={ArrowRight}>
                Order Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Welcome to Matchai
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A premium matcha coffee spot in the heart of Agdal. We blend tradition and modern taste, 
                serving drinks crafted from the finest Japanese matcha in a space designed with elegance and simplicity.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Our Story
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg" 
                  alt="Premium Matcha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Matchai?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of authentic Japanese tradition and modern Moroccan hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Sourced directly from the finest Japanese matcha farms, ensuring authentic taste and superior quality in every cup.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Each drink is carefully crafted by our trained baristas who understand the delicate art of matcha preparation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Prime Location</h3>
              <p className="text-gray-600">
                Conveniently located in the heart of Agdal, Rabat, making it the perfect spot for your daily matcha ritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Elegance?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable matcha experience that combines Japanese tradition with Moroccan warmth.
          </p>
          <Link to="/menu">
            <Button variant="secondary" size="lg">
              Order Your Matcha Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}