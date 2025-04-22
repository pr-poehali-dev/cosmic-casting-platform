import { Link } from "react-router-dom";
import { Telegram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/30 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold cosmic-glow">
              COSMOS<span className="text-cosmic-purple">CAST</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
              Главная
            </Link>
            <Link to="/castings" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
              Кастинги
            </Link>
            <Link to="/category/tfp" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
              TFP съемки
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-cosmic-purple transition-colors">
              О нас
            </Link>
          </div>
          
          <Link 
            to="https://t.me/vocoder" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-all hover:bg-cosmic-purple/10"
          >
            <Telegram size={18} className="text-cosmic-purple" />
            <span className="text-sm font-medium">t.me/vocoder</span>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            © 2023 COSMOSCAST — Космос кастингов в Санкт-Петербурге
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
