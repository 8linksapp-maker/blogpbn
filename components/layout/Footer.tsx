import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <HeartPulse className="h-8 w-8 text-primary-500" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">Dr. João</span>
                <span className="text-xs text-gray-400">Cardiologista • CRM 12345</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicado a cuidar da saúde do seu coração através de medicina preventiva, diagnóstico preciso e tratamentos humanizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Início</Link></li>
              <li><Link to="/artigos" className="hover:text-primary-400 transition-colors">Artigos</Link></li>
              <li><Link to="/sobre" className="hover:text-primary-400 transition-colors">Sobre Dr. João</Link></li>
              <li><Link to="/contato" className="hover:text-primary-400 transition-colors">Contato</Link></li>
              <li><Link to="/politica-privacidade" className="hover:text-primary-400 transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tópicos</h3>
            <ul className="space-y-2">
              <li><Link to="/categoria/prevencao" className="hover:text-primary-400 transition-colors">Prevenção</Link></li>
              <li><Link to="/categoria/nutricao" className="hover:text-primary-400 transition-colors">Nutrição Cardíaca</Link></li>
              <li><Link to="/categoria/estilo-de-vida" className="hover:text-primary-400 transition-colors">Estilo de Vida</Link></li>
              <li><Link to="/categoria/tratamentos" className="hover:text-primary-400 transition-colors">Tratamentos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Consultório</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary-500 shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000 - Conj 50<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-500 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-500 shrink-0" />
                <span>contato@pbnfinal.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Site 01 PBN Final. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com ❤️ para a saúde do seu coração.</p>
        </div>
      </Container>
    </footer>
  );
};