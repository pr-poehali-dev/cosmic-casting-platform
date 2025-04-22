
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Космический фон с частицами */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
      </div>
      
      <NavBar />
      
      <main className="container mx-auto pt-28 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl backdrop-blur-md bg-background/20 border border-cosmic-purple/30 p-8 mb-10 shadow-cosmic">
            <h1 className="text-4xl font-bold mb-6 text-center cosmic-glow">О проекте COSMOSCAST</h1>
            
            <div className="space-y-6 text-cosmic-light">
              <p className="text-lg">
                <span className="text-cosmic-purple font-semibold">COSMOSCAST</span> — это инновационная платформа, объединяющая творческих людей Санкт-Петербурга для участия в кастингах, съемках и проектах в сфере моды, кино и рекламы.
              </p>
              
              <p>
                Наша миссия — создать космическую вселенную возможностей для моделей, актеров и креативных профессионалов города. Мы стремимся сделать процесс поиска и участия в кастингах максимально простым и эффективным.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <div className="bg-background/30 rounded-lg p-6 border border-cosmic-purple/20 hover:border-cosmic-purple/50 transition-all hover:transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-cosmic-purple">Для моделей</h3>
                  <p>Регулярные кастинги для модных показов, фотосессий и рекламных проектов. Возможности для профессионального роста и создания портфолио.</p>
                </div>
                
                <div className="bg-background/30 rounded-lg p-6 border border-cosmic-purple/20 hover:border-cosmic-purple/50 transition-all hover:transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-cosmic-purple">Для актеров</h3>
                  <p>Кастинги для кино, сериалов, рекламы и театральных постановок. Разнообразные роли для актеров любого возраста и опыта.</p>
                </div>
                
                <div className="bg-background/30 rounded-lg p-6 border border-cosmic-purple/20 hover:border-cosmic-purple/50 transition-all hover:transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 text-cosmic-purple">TFP проекты</h3>
                  <p>Креативные фотосессии и проекты на условиях TFP (Time for Print) для взаимовыгодного сотрудничества фотографов и моделей.</p>
                </div>
              </div>
              
              <p>
                Мы тщательно проверяем все размещаемые у нас кастинги, чтобы обеспечить безопасность и профессионализм взаимодействия. Наша команда всегда готова помочь с любыми вопросами.
              </p>
              
              <div className="mt-10 text-center">
                <h3 className="text-2xl font-semibold mb-4 cosmic-glow">Свяжитесь с нами</h3>
                <a 
                  href="https://t.me/vocoders" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cosmic-purple hover:bg-cosmic-purple/20 transition-all"
                >
                  <span className="text-lg font-medium">t.me/vocoders</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
