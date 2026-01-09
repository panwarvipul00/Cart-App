import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#001f3f] text-white py-12 mt-auto">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">


                <div>
                    <h3 className="text-xl font-bold mb-6">Filters</h3>
                    <div className="flex flex-col gap-3 text-gray-300">
                        <a href="#" className="hover:text-white transition-colors">All</a>
                        <a href="#" className="hover:text-white transition-colors">Electronics</a>
                        <a href="#" className="hover:text-white transition-colors">Clothing</a>
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                    </div>
                    <p className="text-gray-400 text-sm mt-8">
                        &copy; 2024 American Cart System
                    </p>
                </div>


                <div>
                    <h3 className="text-xl font-bold mb-6">About Us</h3>
                    <div className="flex flex-col gap-3 text-gray-300">
                        <a href="#" className="hover:text-white transition-colors">About Us</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>


                <div>
                    <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                            <Facebook size={20} fill="white" className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition-colors">
                            <Twitter size={20} fill="white" className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-colors">
                            <Instagram size={20} className="text-white" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
