import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, User, Info, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/providers/ThemeProvider';
import Logo from './Logo';

const Navbar = () => {
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-30 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="mr-2"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            {!isMobile ? (
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-medical-dark-blue hover:text-medical-blue transition-colors dark:text-white dark:hover:text-medical-light-blue">Home</Link>
                <Link to="/analyze" className="text-medical-dark-blue hover:text-medical-blue transition-colors dark:text-white dark:hover:text-medical-light-blue">Analyze MRI</Link>
                <Link to="/about" className="text-medical-dark-blue hover:text-medical-blue transition-colors dark:text-white dark:hover:text-medical-light-blue">About</Link>
                <Button variant="default" className="bg-medical-blue hover:bg-medical-dark-blue dark:bg-medical-light-blue dark:hover:bg-medical-blue">
                  <Link to="/analyze">Upload Scan</Link>
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in dark:bg-gray-900 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-medical-dark-blue hover:bg-medical-blue/10 transition-colors dark:text-white dark:hover:bg-medical-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/analyze" 
              className="block px-3 py-2 rounded-md text-base font-medium text-medical-dark-blue hover:bg-medical-blue/10 transition-colors dark:text-white dark:hover:bg-medical-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Analyze MRI
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-medical-dark-blue hover:bg-medical-blue/10 transition-colors dark:text-white dark:hover:bg-medical-blue/20"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2">
              <Button 
                variant="default" 
                className="w-full bg-medical-blue hover:bg-medical-dark-blue dark:bg-medical-light-blue dark:hover:bg-medical-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/analyze">Upload Scan</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
