
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Telegram } from "lucide-react";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-cosmic-purple/20">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cosmic-glow rounded-full filter blur-md opacity-30"></div>
            <span className="text-2xl font-bold tracking-wider cosmic-glow relative">
              COSMOS<span className="text-cosmic-purple">CAST</span>
            </span>
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="px-4 py-2 hover:text-cosmic-purple transition-colors">
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/castings">
                <NavigationMenuLink className="px-4 py-2 hover:text-cosmic-purple transition-colors">
                  Кастинги
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 hover:text-cosmic-purple bg-transparent transition-colors">
                Категории
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/category/models" className="block p-3 hover:bg-muted rounded-md transition-colors">
                    Для моделей
                  </Link>
                  <Link to="/category/actors" className="block p-3 hover:bg-muted rounded-md transition-colors">
                    Для актеров
                  </Link>
                  <Link to="/category/tfp" className="block p-3 hover:bg-muted rounded-md transition-colors">
                    TFP съемки
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className="px-4 py-2 hover:text-cosmic-purple transition-colors">
                  О нас
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link 
          to="https://t.me/vocoders" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-all hover:bg-cosmic-purple/10"
        >
          <Telegram size={18} className="text-cosmic-purple" />
          <span className="text-sm font-medium">t.me/vocoders</span>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
