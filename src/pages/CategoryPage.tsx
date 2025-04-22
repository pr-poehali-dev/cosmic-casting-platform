
import { useParams } from 'react-router-dom';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import CastingCard from "@/components/CastingCard";

type CategoryData = {
  [key: string]: {
    title: string;
    description: string;
    castings: Array<{
      id: number;
      title: string;
      type: string;
      location: string;
      date: string;
      payment: string;
      description: string;
      requirements: string[];
      contactPerson: string;
    }>;
  };
};

const categoryData: CategoryData = {
  models: {
    title: "Кастинги для моделей",
    description: "Ищите работу модели в Санкт-Петербурге? Здесь вы найдете актуальные кастинги для модельных съемок, показов и рекламных кампаний.",
    castings: [
      {
        id: 1,
        title: "Модели для весенней коллекции одежды",
        type: "Фотосессия",
        location: "Центр, Невский проспект",
        date: "15.05.2023",
        payment: "5000-8000₽",
        description: "Требуются модели для презентации новой коллекции одежды петербургского дизайнера. Съемка будет проходить в историческом центре города.",
        requirements: ["Рост от 175 см", "Размер 42-44", "Опыт работы моделью"],
        contactPerson: "Александра"
      },
      {
        id: 2,
        title: "Модели для модного показа",
        type: "Подиум",
        location: "Новая Голландия",
        date: "22.05.2023",
        payment: "6000₽",
        description: "Модный дом ищет моделей для участия в показе новой коллекции на фестивале современной моды в Санкт-Петербурге.",
        requirements: ["Рост от 170 см", "Размер 40-44", "Уверенная походка"],
        contactPerson: "Максим"
      },
      {
        id: 3,
        title: "Модели для каталога купальников",
        type: "Фотосессия",
        location: "Студия на Васильевском острове",
        date: "10.06.2023",
        payment: "10000₽ за день",
        description: "Съемка для каталога летней коллекции купальников известного бренда. Предполагается полный день работы.",
        requirements: ["Рост от 168 см", "Размер 42-44", "Спортивное телосложение"],
        contactPerson: "Елена"
      }
    ]
  },
  actors: {
    title: "Кастинги для актеров",
    description: "Найдите свою роль в Санкт-Петербурге! Актуальные кастинги для кино, сериалов, рекламы и театральных постановок.",
    castings: [
      {
        id: 1,
        title: "Роли в историческом сериале о Петербурге",
        type: "Сериал",
        location: "Киностудия Ленфильм",
        date: "20.05.2023",
        payment: "От 3000₽ за смену",
        description: "Требуются актеры и актрисы разных возрастов для съемок в многосерийном историческом проекте о Петербурге XIX века.",
        requirements: ["Актерское образование", "Портфолио", "Готовность к историческим костюмам"],
        contactPerson: "Дмитрий"
      },
      {
        id: 2,
        title: "Актеры для рекламного ролика",
        type: "Реклама",
        location: "Студия на Петроградской",
        date: "25.05.2023",
        payment: "15000₽",
        description: "Съемки рекламного ролика для крупного банка. Нужны актеры на роли сотрудников офиса и клиентов.",
        requirements: ["Опыт работы в рекламе", "Возраст 25-45 лет", "Деловой стиль"],
        contactPerson: "Ирина"
      },
      {
        id: 3,
        title: "Массовка для городских сцен фильма",
        type: "Кино",
        location: "Центр города",
        date: "1-5.06.2023",
        payment: "1500₽ за смену",
        description: "Для съемок художественного фильма требуется массовка. Съемки будут проходить в историческом центре города.",
        requirements: ["Никаких татуировок на видимых частях тела", "Готовность к долгим съемкам"],
        contactPerson: "Сергей"
      }
    ]
  },
  tfp: {
    title: "TFP съемки",
    description: "Творческие проекты на условиях Time for Print (TFP) в Санкт-Петербурге. Отличная возможность для моделей пополнить портфолио и поработать с талантливыми фотографами.",
    castings: [
      {
        id: 1,
        title: "TFP фотосессия в стиле фэнтези",
        type: "Фотосессия",
        location: "Студия на Обводном канале",
        date: "18.05.2023",
        payment: "TFP",
        description: "Креативная фотосессия в фэнтезийном стиле. Гример, стилист и костюмы предоставляются. Результат - 5-7 обработанных фото.",
        requirements: ["Женщины 18-30 лет", "Фотогеничность", "Готовность к творческому макияжу"],
        contactPerson: "Михаил"
      },
      {
        id: 2,
        title: "Уличная фотосессия в стиле урбан",
        type: "Фотосессия",
        location: "Улицы Петербурга",
        date: "23.05.2023",
        payment: "TFP",
        description: "Стрит-фотограф ищет моделей для создания городских портретов. Съемка пройдет в наиболее атмосферных местах города.",
        requirements: ["Мужчины и женщины 18-35 лет", "Наличие нескольких комплектов одежды", "Непринужденность перед камерой"],
        contactPerson: "Анна"
      },
      {
        id: 3,
        title: "TFP съемка для модного блога",
        type: "Фотосессия",
        location: "Парки и сады Петербурга",
        date: "27-28.05.2023",
        payment: "TFP",
        description: "Фотограф и стилист ищут моделей для создания модного контента. Результаты будут опубликованы в популярном блоге о моде.",
        requirements: ["Женщины 20-30 лет", "Размер 40-44", "Фотогеничность"],
        contactPerson: "Ольга"
      }
    ]
  }
};

const CategoryPage = () => {
  const { type } = useParams<{ type: string }>();
  const category = type && categoryData[type] ? categoryData[type] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-background overflow-hidden relative">
        <NavBar />
        <div className="container mx-auto pt-28 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-6">Категория не найдена</h1>
          <p>Извините, запрашиваемая категория кастингов не существует.</p>
        </div>
        <Footer />
      </div>
    );
  }

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
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3 cosmic-glow">{category.title}</h1>
          <p className="max-w-2xl mx-auto text-cosmic-light">{category.description}</p>
        </div>
        
        <div className="mb-10">
          <SearchBox placeholder={`Поиск ${category.title.toLowerCase()}...`} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.castings.map(casting => (
            <CastingCard key={casting.id} casting={casting} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
