import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CastingCard, { CastingType } from "@/components/CastingCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

// Моковые данные для страницы кастингов
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
  {
    id: "4",
    title: "Съемки для рекламы косметического бренда",
    category: "Реклама",
    location: "Санкт-Петербург, Приморский район",
    date: "30 ноября 2023",
    payment: "10 000 ₽",
    isPremium: false,
    isTfp: false,
    image: "/placeholder.svg"
  },
  {
    id: "5",
    title: "TFP Фотопроект 'Космическая одиссея'",
    category: "Арт",
    location: "Санкт-Петербург, Студия на Васильевском",
    date: "18 ноября 2023",
    payment: "TFP",
    isPremium: false,
    isTfp: true,
    image: "/placeholder.svg"
  },
  {
    id: "6",
    title: "Модели для презентации новой коллекции украшений",
    category: "Ювелирная съемка",
    location: "Санкт-Петербург, Крестовский остров",
    date: "1 декабря 2023",
    payment: "6 000 ₽",
    isPremium: true,
    isTfp: false,
    image: "/placeholder.svg"
  },
];

const Castings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 cosmic-glow">Кастинги в Санкт-Петербурге</h1>
            <p className="text-muted-foreground">Найдите идеальный проект для своего портфолио и карьеры</p>
          </div>
          
          {/* Поисковая строка и фильтры */}
          <div className="mb-8">
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  placeholder="Поиск кастингов..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                Фильтры
              </Button>
            </div>
            
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-lg cosmic-border bg-card/40 backdrop-blur-sm">
                <div>
                  <h3 className="font-medium mb-3">Категория</h3>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="photo">Фотосъемки</SelectItem>
                      <SelectItem value="advert">Реклама</SelectItem>
                      <SelectItem value="video">Видеосъемки</SelectItem>
                      <SelectItem value="fashion">Показы</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Расположение</h3>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите район" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="center">Центр</SelectItem>
                      <SelectItem value="petrogradskiy">Петроградский</SelectItem>
                      <SelectItem value="vasilevskiy">Василеостровский</SelectItem>
                      <SelectItem value="admiralteyskiy">Адмиралтейский</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Дополнительно</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tfp" />
                      <Label htmlFor="tfp">Только TFP</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="paid" />
                      <Label htmlFor="paid">Только оплачиваемые</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="premium" />
                      <Label htmlFor="premium">Премиум</Label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Список кастингов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_CASTINGS.map((casting) => (
              <CastingCard key={casting.id} casting={casting} />
            ))}
          </div>
          
          {/* Пагинация */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" className="w-10 h-10 p-0 rounded-md">1</Button>
              <Button variant="outline" className="w-10 h-10 p-0 rounded-md bg-muted">2</Button>
              <Button variant="outline" className="w-10 h-10 p-0 rounded-md">3</Button>
              <Button variant="outline" className="w-10 h-10 p-0 rounded-md">...</Button>
              <Button variant="outline" className="w-10 h-10 p-0 rounded-md">10</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Castings;
