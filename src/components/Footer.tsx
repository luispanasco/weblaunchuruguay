import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#5c0905] text-slate-200 pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold text-white tracking-tighter">LAUNCH</span>
                            <span className="text-sm font-medium text-slate-400 block">| Uruguay</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Representante oficial de Launch en Uruguay. Tecnología de vanguardia para el diagnóstico y mantenimiento automotriz.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/nami.ltda/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/launchuruguay/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.tiktok.com/@launch.uruguay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </Link>
                            <Link href="https://www.youtube.com/@namiuruguay277" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link href="#productos" className="hover:text-primary transition-colors">Productos</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Soporte Técnico</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Garantía</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Productos</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Scanners Profesionales</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Elevadores</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Alineadoras</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Desmontadoras</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Balanceadoras</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contacto">
                        <h4 className="text-white font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                                <span>Montevideo, Uruguay</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                                <span>+598 99 123 456</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                                <span>contacto@launchuruguay.com.uy</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Launch Uruguay. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
