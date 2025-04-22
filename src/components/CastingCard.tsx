import { CalendarDays, MapPin, Clock, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export type CastingType = {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  payment: string;
  isPremium: boolean;
  isTfp: boolean;
  image: string;
};

interface CastingCardProps {
  casting: CastingType;
}

const CastingCard = ({ casting }: CastingCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:translate-y-[-5px] cosmic-border backdrop-blur-sm ${casting.isPremium ? 'bg-gradient-to-b from-muted to-card/40 animate-pulse-glow' : 'bg-card/40'}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={casting.image || "/placeholder.svg"} 
          alt={casting.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {casting.isPremium && (
          <Badge className="absolute top-2 right-2 bg-cosmic-purple text-white">
            Премиум
          </Badge>
        )}
        {casting.isTfp && (
          <Badge variant="outline" className="absolute top-2 left-2 border-cosmic-blue text-cosmic-blue bg-background/50 backdrop-blur-sm">
            TFP
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-medium mb-2 line-clamp-2">{casting.title}</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Camera size={16} />
            <span>{casting.category}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span>{casting.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays size={16} />
            <span>{casting.date}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <div className="font-medium">
          {casting.payment}
        </div>
        
        <Badge variant="secondary" className="bg-muted flex items-center gap-1">
          <Clock size={14} />
          <span>Новое</span>
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default CastingCard;
