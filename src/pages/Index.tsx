import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
import FeaturedCastings from "@/components/FeaturedCastings";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RocketIcon, SearchIcon, MegaphoneIcon, CameraIcon, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Функция для создания космических точек на фоне
  useEffect(() => {
    const createStars = () => {
      const universe = document.getElementById('universe');
      if (!universe) return;
      
      // Очистить существующие звезды
      const existingStars = document.querySelectorAll('.space-dot');
      existingStars.forEach(star => star.remove());
      
      // Создать новые звезды
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('space-dot');
        
        // Случайное положение
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Случайный размер
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Случайное время анимации
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        universe.appendChild(star);
      }
    };
    
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div id="universe" className="flex flex-col min-h-screen relative">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-cosmic-purple/50 bg-background/30 backdrop-blur-sm inline-flex items-center">
            <RocketIcon size={14} className="mr-1 text-cosmic-purple" />
            <span>Лучшие кастинги Санкт-Петербурга</span>
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cosmic-glow leading-tight">
            Найди свой <span className="text-cosmic-purple">идеальный кастинг</span> <br /> в Санкт-Петербурге
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Ваш космический проводник в мире кастингов и съемок для моделей и актеров в городе на Неве
          </p>
          
          <SearchBox />
          
          {/* Мерцающая кнопка Телеграм */}
          <div className="mt-8">
            <Link 
              to="https://t.me/vocoders" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white font-medium animate-pulse-slow hover:animate-none hover:shadow-cosmic transition-all"
            >
              <MessageCircle size={20} className="animate-cosmic-spin" />
              <span>Связаться в Telegram: t.me/vocoders</span>
            </Link>
          </div>
        </div>
        
        {/* Декоративные плавающие элементы */}
        <div className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full bg-cosmic-purple/10 backdrop-blur-sm animate-float"></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-32 rounded-full bg-cosmic-blue/10 backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute top-[60%] right-[30%] w-16 h-16 rounded-full bg-cosmic-pink/10 backdrop-blur-sm animate-float-fast"></div>
      </section>
      
      {/* AI-generated Images Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 cosmic-glow text-center">
          Кастинги с использованием ИИ-фотографий
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cosmic-border rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-64 bg-gradient-to-b from-cosmic-purple/20 to-cosmic-blue/20 relative">
              <img 
                src="/placeholder.svg" 
                alt="AI-Generated Model Portrait" 
                className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Badge className="absolute top-3 right-3 bg-cosmic-purple/80">ИИ фото</Badge>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-lg font-medium text-white">Фотосессия для девушек-моделей</h3>
                <p className="text-sm text-white/80">Создание портфолио с ИИ-обработкой</p>
              </div>
            </div>
          </div>
          
          <div className="cosmic-border rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-64 bg-gradient-to-b from-cosmic-blue/20 to-cosmic-pink/20 relative">
              <img 
                src="/placeholder.svg" 
                alt="AI-Generated Fashion Shoot" 
                className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Badge className="absolute top-3 right-3 bg-cosmic-blue/80">ИИ фото</Badge>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-lg font-medium text-white">Коммерческая реклама одежды</h3>
                <p className="text-sm text-white/80">Съемки для каталога с ИИ-эффектами</p>
              </div>
            </div>
          </div>
          
          <div className="cosmic-border rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-64 bg-gradient-to-b from-cosmic-pink/20 to-cosmic-purple/20 relative">
              <img 
                src="/placeholder.svg" 
                alt="AI-Generated Cinematic Shot" 
                className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Badge className="absolute top-3 right-3 bg-cosmic-pink/80">ИИ фото</Badge>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-lg font-medium text-white">Актерский кастинг — короткометражка</h3>
                <p className="text-sm text-white/80">Съемки в научно-фантастическом фильме</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Категории */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 cosmic-glow text-center">Популярные категории</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="cosmic-border rounded-lg p-6 bg-card/40 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="h-12 w-12 rounded-full bg-cosmic-purple/20 flex items-center justify-center mb-4">
              <CameraIcon className="h-6 w-6 text-cosmic-purple" />
            </div>
            <h3 className="text-xl font-medium mb-2">Фотосъемки</h3>
            <p className="text-muted-foreground">Найдите фотосессии для портфолио и коммерческих проектов</p>
          </div>
          
          <div className="cosmic-border rounded-lg p-6 bg-card/40 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="h-12 w-12 rounded-full bg-cosmic-blue/20 flex items-center justify-center mb-4">
              <MegaphoneIcon className="h-6 w-6 text-cosmic-blue" />
            </div>
            <h3 className="text-xl font-medium mb-2">Реклама</h3>
            <p className="text-muted-foreground">Кастинги для рекламных роликов и печатной рекламы</p>
          </div>
          
          <div className="cosmic-border rounded-lg p-6 bg-card/40 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="h-12 w-12 rounded-full bg-cosmic-pink/20 flex items-center justify-center mb-4">
              <SearchIcon className="h-6 w-6 text-cosmic-pink" />
            </div>
            <h3 className="text-xl font-medium mb-2">TFP проекты</h3>
            <p className="text-muted-foreground">Сотрудничество с фотографами на условиях Time for Print</p>
          </div>
        </div>
      </section>
      
      {/* Популярные кастинги */}
      <FeaturedCastings />
      
      {/* CTA секция */}
      <section className="container mx-auto px-4 py-16">
        <div className="cosmic-border rounded-xl p-8 bg-gradient-to-r from-cosmic-dark/80 to-muted/80 backdrop-blur-md text-center">
          <h2 className="text-3xl font-bold mb-4 cosmic-glow">Готовы покорить космос кастингов?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Присоединяйтесь к нашему сообществу и получайте доступ к эксклюзивным предложениям в мире моды и кино Санкт-Петербурга
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-6 py-6 bg-cosmic-purple hover:bg-cosmic-purple/90 text-white">
              Смотреть все кастинги
            </Button>
            <Link 
              to="https://t.me/vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="px-6 py-6 border-cosmic-purple/50 text-cosmic-purple hover:bg-cosmic-purple/10">
                <MessageCircle size={16} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
