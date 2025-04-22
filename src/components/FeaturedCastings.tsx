import CastingCard, { CastingType } from "./CastingCard";

const MOCK_CASTINGS: CastingType[] = [
  {
    id: "1",
    title: "Фотосъемка для каталога модной одежды",
    category: "Фотомодели",
    location: "Санкт-Петербург, Центр",
    date: "20 ноября 2023",
    payment: "5 000 ₽",
    isPremium: true,
    isTfp: false,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    title: "TFP съемка для фотографа-портретиста",
    category: "Портрет",
    location: "Санкт-Петербург, Петроградская",
    date: "15 ноября 2023",
    payment: "TFP",
    isPremium: false,
    isTfp: true,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    title: "Показ новой коллекции одежды в ТЦ Галерея",
    category: "Подиум",
    location: "Санкт-Петербург, Невский пр.",
    date: "25 ноября 2023",
    payment: "7 000 ₽",
    isPremium: true,
    isTfp: false,
    image: "/placeholder.svg"
  },
];

const FeaturedCastings = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold cosmic-glow">Популярные кастинги</h2>
        <a href="/castings" className="text-cosmic-purple hover:underline">
          Смотреть все →
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CASTINGS.map((casting) => (
          <CastingCard key={casting.id} casting={casting} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCastings;
