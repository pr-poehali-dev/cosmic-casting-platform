import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="cosmic-border rounded-full overflow-hidden bg-card/40 backdrop-blur-sm p-1.5 flex items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Поиск кастингов в Санкт-Петербурге..."
            className="border-none bg-transparent pl-10 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          className="px-6 h-10 bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:opacity-90 transition-opacity"
        >
          Найти
        </Button>
      </div>
      
      <div className="flex justify-center gap-2 mt-4 text-sm">
        <Button variant="ghost" size="sm" className="px-3 py-1 h-auto rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/30">
          Фотосъемки
        </Button>
        <Button variant="ghost" size="sm" className="px-3 py-1 h-auto rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/30">
          TFP
        </Button>
        <Button variant="ghost" size="sm" className="px-3 py-1 h-auto rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/30">
          Показы
        </Button>
        <Button variant="ghost" size="sm" className="px-3 py-1 h-auto rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/30">
          Коммерческие
        </Button>
        <Button variant="ghost" size="sm" className="px-3 py-1 h-auto flex items-center gap-1 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/30">
          <Filter size={14} /> Фильтры
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
