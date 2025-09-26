import React from 'react';
import { Plus } from 'lucide-react';
import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

export default function Menu() {
  const { dispatch } = useCart();

  const addToCart = (menuItem: typeof menuItems[0], size: 'small' | 'big') => {
    dispatch({ type: 'ADD_ITEM', payload: { menuItem, size } });
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted matcha specialties, each one a perfect balance of tradition and innovation
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Specialties</h2>
            <p className="text-lg text-gray-600">Each drink is crafted with premium Japanese matcha and the finest ingredients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 relative overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/${
                      item.id === 'rouge-cloud' ? '4021775' :
                      item.id === 'pistachio-dream' ? '5946963' :
                      item.id === 'vanilla-nine' ? '4021882' :
                      '5946971'
                    }/pexels-photo-${
                      item.id === 'rouge-cloud' ? '4021775' :
                      item.id === 'pistachio-dream' ? '5946963' :
                      item.id === 'vanilla-nine' ? '4021882' :
                      '5946971'
                    }.jpeg`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-900/20"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Small</span>
                        <span className="text-lg font-bold text-green-600">{item.prices.small} MAD</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addToCart(item, 'small')}
                        icon={Plus}
                      >
                        Add
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Large</span>
                        <span className="text-lg font-bold text-green-600">{item.prices.big} MAD</span>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addToCart(item, 'big')}
                        icon={Plus}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Experience the perfect blend of tradition and innovation with our premium matcha drinks
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            View Menu Again
          </Button>
        </div>
      </section>
    </div>
  );
}