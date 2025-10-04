import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface DonateItem {
  id: number;
  name: string;
  price: number;
  discount?: number;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const DONATE_ITEMS: DonateItem[] = [
  {
    id: 1,
    name: 'VIP',
    price: 299,
    image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg',
    description: 'Базовый VIP статус',
    features: ['Цветной ник', 'Команды /hat, /feed', '2 дома', 'Приват 50 блоков']
  },
  {
    id: 2,
    name: 'PREMIUM',
    price: 599,
    discount: 20,
    image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg',
    description: 'Премиум статус с бонусами',
    features: ['Все из VIP', 'Полёт /fly', '5 домов', 'Приват 150 блоков', 'Кейсы'],
    popular: true
  },
  {
    id: 3,
    name: 'ELITE',
    price: 999,
    image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg',
    description: 'Элитный статус',
    features: ['Все из Premium', '10 домов', 'Приват 300 блоков', 'Уникальный префикс', 'Эффекты']
  },
  {
    id: 4,
    name: 'LEGEND',
    price: 1999,
    image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg',
    description: 'Легендарный статус',
    features: ['Все из Elite', 'Безлимит домов', 'Креатив', 'Персональные частицы', 'Админ команды']
  }
];

const SERVERS = [
  { name: 'SkyBlock', online: 1243, slots: 2000 },
  { name: 'GriefrWorld', online: 892, slots: 1500 },
  { name: 'MiniGames', online: 2156, slots: 3000 },
  { name: 'Creative', online: 456, slots: 1000 }
];

export default function Index() {
  const [selectedServer, setSelectedServer] = useState('SkyBlock');
  const { toast } = useToast();

  const handlePurchase = (item: DonateItem) => {
    toast({
      title: "Переход к оплате",
      description: `${item.name} - ${item.price} ₽`,
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20 pointer-events-none" />
      
      <header className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                FT
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">FunTime</h1>
                <p className="text-xs text-purple-400">Minecraft Server</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Главная</a>
              <a href="#donate" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Донат</a>
              <a href="#servers" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Сервера</a>
              <a href="#rules" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Правила</a>
              <a href="#support" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Поддержка</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-500/30 px-4 py-1 text-sm">
              Онлайн: 4,747 игроков
            </Badge>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Добро пожаловать на
              <span className="block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mt-2">
                FunTime Network
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Крупнейшая сеть серверов Minecraft в России. Уникальные режимы, стабильная работа и активное комьюнити
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-[#1a1a2e] px-6 py-3 rounded-lg border border-purple-500/20">
                <code className="text-purple-400 font-mono text-lg">play.funtime.su</code>
              </div>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg"
                onClick={() => navigator.clipboard.writeText('play.funtime.su')}
              >
                <Icon name="Copy" size={20} className="mr-2" />
                Скопировать IP
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="servers" className="py-16 relative">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Наши сервера</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {SERVERS.map((server) => (
              <Card 
                key={server.name} 
                className="bg-[#1a1a2e] border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{server.name}</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Онлайн:</span>
                      <span className="text-purple-400 font-semibold">{server.online}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-orange-500 transition-all duration-500"
                        style={{ width: `${(server.online / server.slots) * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 text-right">
                      {server.slots} слотов
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 border border-purple-500/30">
                    Подключиться
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-16 bg-gradient-to-b from-transparent to-purple-900/10 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Донат привилегии</h3>
            <p className="text-gray-400 text-lg">Поддержи проект и получи эксклюзивные возможности</p>
          </div>
          
          <Tabs defaultValue="privileges" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-[#1a1a2e] border border-purple-500/20 mb-8">
              <TabsTrigger value="privileges" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Привилегии
              </TabsTrigger>
              <TabsTrigger value="currency" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Игровая валюта
              </TabsTrigger>
              <TabsTrigger value="cases" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Кейсы
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="privileges">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {DONATE_ITEMS.map((item) => (
                  <Card 
                    key={item.id}
                    className={`bg-[#1a1a2e] border-purple-500/20 overflow-hidden group hover:scale-105 transition-all duration-300 ${
                      item.popular ? 'ring-2 ring-orange-500 shadow-lg shadow-orange-500/20' : ''
                    }`}
                  >
                    {item.popular && (
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 text-sm font-bold">
                        🔥 ПОПУЛЯРНОЕ
                      </div>
                    )}
                    <div className="p-6">
                      <div className="relative mb-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-32 object-contain drop-shadow-2xl"
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm text-center mb-4">{item.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                            <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="border-t border-purple-500/20 pt-4">
                        {item.discount && (
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-gray-500 line-through text-sm">
                              {Math.round(item.price * 1.25)} ₽
                            </span>
                            <Badge className="bg-orange-500/20 text-orange-400 border-0 text-xs">
                              -{item.discount}%
                            </Badge>
                          </div>
                        )}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-3xl font-bold text-white">{item.price} ₽</span>
                        </div>
                        <Button 
                          onClick={() => handlePurchase(item)}
                          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                        >
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          Купить
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="currency">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { amount: '1,000 коинов', price: 99 },
                  { amount: '5,000 коинов', price: 449, bonus: '+10%' },
                  { amount: '10,000 коинов', price: 799, bonus: '+20%' }
                ].map((item, index) => (
                  <Card key={index} className="bg-[#1a1a2e] border-purple-500/20 p-6 hover:scale-105 transition-all">
                    <Icon name="Coins" size={48} className="text-yellow-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white text-center mb-2">{item.amount}</h4>
                    {item.bonus && (
                      <Badge className="bg-green-500/20 text-green-400 border-0 mx-auto block w-fit mb-2">
                        {item.bonus} бонус
                      </Badge>
                    )}
                    <p className="text-2xl font-bold text-center text-purple-400 mb-4">{item.price} ₽</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Купить
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cases">
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="text-purple-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Кейсы временно недоступны</h4>
                <p className="text-gray-400">Следите за обновлениями в нашем Discord</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Преимущества FunTime</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-600/20 to-orange-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Icon name="Zap" size={40} className="text-orange-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Стабильная работа</h4>
              <p className="text-gray-400">Сервера работают 24/7 без лагов и перебоев</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-600/20 to-orange-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Icon name="Users" size={40} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Активное комьюнити</h4>
              <p className="text-gray-400">Более 100,000 игроков в нашем сообществе</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-600/20 to-orange-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Icon name="Shield" size={40} className="text-green-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Защита от читеров</h4>
              <p className="text-gray-400">Современная античит система и модерация</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0f] border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white">
                  FT
                </div>
                <span className="text-xl font-bold text-white">FunTime</span>
              </div>
              <p className="text-gray-400 text-sm">Крупнейшая сеть серверов Minecraft в России</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Главная</a></li>
                <li><a href="#donate" className="text-gray-400 hover:text-purple-400 transition-colors">Донат</a></li>
                <li><a href="#servers" className="text-gray-400 hover:text-purple-400 transition-colors">Сервера</a></li>
                <li><a href="#rules" className="text-gray-400 hover:text-purple-400 transition-colors">Правила</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Помощь</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Баги</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-purple-500/20 hover:bg-purple-600/20 text-purple-400">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-purple-500/20 hover:bg-purple-600/20 text-purple-400">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-purple-500/20 hover:bg-purple-600/20 text-purple-400">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 FunTime Network. Все права защищены. Не является официальным продуктом Minecraft.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
