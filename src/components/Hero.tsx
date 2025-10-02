import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, ArrowRight } from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const Hero = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { bankData } = useBankData();

  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-2 text-white">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Bank for getting a 
                <span className="text-yellow-400">$250 bonus</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                For a limited time, you could get a $250 cash bonus for opening a 
                qualifying checking account. Or get a bonus value of $250 
                when you also add a qualifying savings account.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={bankData?.externalUrls.signup || '#'}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  See Offer
                </a>
                <a 
                  href={bankData?.externalUrls.signup || '#'}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 font-semibold text-lg transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>

              {/* Features */}
              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-blue-100">Customer Support</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-yellow-400">0%</div>
                  <div className="text-blue-100">Monthly Fees</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-yellow-400">5000+</div>
                  <div className="text-blue-100">ATM Locations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-2xl p-8 max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Online Banking Sign In</h2>
                <p className="text-slate-600">Access your account securely</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-10 pr-12 py-3 border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-slate-600">Remember Me</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Sign In
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                <div className="text-center space-y-2">
                  <a href={bankData?.externalUrls.login || '#'} className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                    Forgot Your Username?
                  </a>
                  <a href={bankData?.externalUrls.login || '#'} className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                    Forgot Your Password?
                  </a>
                  <a href={bankData?.externalUrls.signup || '#'} className="block text-sm text-green-600 hover:text-green-800 transition-colors font-medium">
                    Activate Online Banking
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;