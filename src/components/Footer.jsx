import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-gray-300 py-10">
    <div class="w-4/5 mx-auto grid md:grid-cols-3 gap-10">
      <div>
        <h3 class="text-xl font-semibold text-yellow-400 mb-3">community-services-booking-platform</h3>
        <p class="text-sm leading-relaxed">
          this is community-services-booking-platform aLight nyabiheke 2025/2026
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-yellow-400 mb-3">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">login</a></li>
          <li><a href="#" class="hover:text-white">LandingPage</a></li>
          <li><a href="#" class="hover:text-white">ProviderDashboard</a></li>
          <li><a href="#" class="hover:text-white">regist</a></li>
          <li><a href="#" class="hover:text-white">clintDashboard</a></li>
          <li><a href="#" class="hover:text-white">services</a></li>
          <li><a href="#" class="hover:text-white">Login</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-yellow-400 mb-3">Follow Us</h3>
        <div class="flex space-x-4 text-2xl">
          <a href="#" class="hover:text-blue-500">twiter</a>
          <a href="#" class="hover:text-blue-400">faceboock</a>
          <a href="#" class="hover:text-pink-500">instagram</a>
          <a href="#" class="hover:text-sky-400">link din</a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      © 2025 community-services-booking-platform.
    </div>
  </footer>
  )
}

export default Footer
