import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DonateItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

const DONATE_ITEMS: DonateItem[] = [
  { id: 1, name: 'Барон', price: 10, image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg', description: 'Префикс [Барон], /kit Барон, /salary, /crawl • 2 дома, 2 региона (Гриф), 6 слотов аукциона', features: ['Базовые команды', 'Цветной ник', '2 дома'] },
  { id: 2, name: 'Страж', price: 16, image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg', description: 'Описание будет добавлено позже', features: ['Все из Барон', 'Дополнительные команды', '3 дома'] },
  { id: 3, name: 'Герой', price: 24, image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg', description: 'Описание будет добавлено позже', features: ['Все из Страж', '/hat команда', '5 домов'] },
  { id: 4, name: 'Аспид', price: 56, image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg', description: 'Описание будет добавлено позже', features: ['Все из Герой', '/fly полёт', '10 домов'] },
  { id: 5, name: 'Сквид', price: 69, image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg', description: 'Описание будет добавлено позже', features: ['Все из Аспид', 'Эффекты', '15 домов'] },
  { id: 6, name: 'Глава', price: 87, image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg', description: 'Описание будет добавлено позже', features: ['Все из Сквид', 'Приватные варпы', '20 домов'] },
  { id: 7, name: 'Элита', price: 149, image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg', description: 'Описание будет добавлено позже', features: ['Все из Глава', 'Уникальный префикс', '30 домов'] },
  { id: 8, name: 'Титан', price: 239, image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg', description: 'Описание будет добавлено позже', features: ['Все из Элита', 'Креатив', '50 домов'] },
  { id: 9, name: 'Принц', price: 329, image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg', description: 'Описание будет добавлено позже', features: ['Все из Титан', 'Эксклюзивные команды', '75 домов'] },
  { id: 10, name: 'Князь', price: 549, image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg', description: 'Описание будет добавлено позже', features: ['Все из Принц', 'Безлимит варпов', '100 домов'] },
  { id: 11, name: 'Герцог', price: 999, image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg', description: 'Описание будет добавлено позже', features: ['Все из Князь', 'Админ команды', 'Безлимит домов'] },
  { id: 12, name: 'Спонсор', price: 1850, image: '/img/fd26bc25-073b-4cc9-b7f9-db6bfc16dc8d.jpg', description: 'Описание будет добавлено позже', features: ['Все из Герцог', 'Особый статус', 'Все возможности'] },
  { id: 13, name: 'Мажор', price: 2650, image: '/img/67c5133c-b633-474c-b7b1-9fa03f2e3069.jpg', description: 'Описание будет добавлено позже', features: ['ТОП привилегия', 'Максимальные права', 'VIP поддержка'] }
];

const REVIEWS = [
  { author: 'IIoneR', role: 'Создатель', text: 'Лучший анархический сервер! Добро пожаловать в RoomTime!', rating: 5 },
  { author: 'umQKoKiq', role: 'Создатель', text: 'Играйте, веселитесь и наслаждайтесь анархией!', rating: 5 },
  { author: 'TukeInside', role: 'Создатель', text: 'Стабильный сервер с крутым комьюнити!', rating: 5 },
  { author: '_no_ezz_xaxa_', role: 'Админ', text: 'Всегда помогу новичкам, заходите!', rating: 5 },
  { author: 'kristallik_mal', role: 'Бета тестер', text: 'Тестировал с самого начала - проект огонь!', rating: 5 }
];

export default function Index() {
  const { toast } = useToast();
  const [onlinePlayers] = useState(47);

  const handlePurchase = (item: { name: string; price: number }) => {
    window.open('https://funpay.com/users/16724676/', '_blank');
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
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                RT
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">RoomTime</h1>
                <p className="text-xs text-purple-400">Анархический Minecraft сервер</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Главная</a>
              <a href="#donate" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Донат</a>
              <a href="#tokens" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Токены</a>
              <a href="#rules" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Правила</a>
              <a href="#reviews" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Отзывы</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => window.open('https://t.me/HollyFunServer', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white border-0"
              >
                <Icon name="Send" size={18} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-green-600/20 text-green-400 border-green-500/30 px-4 py-1 text-sm">
              🟢 Онлайн: {onlinePlayers} игроков
            </Badge>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Добро пожаловать на
              <span className="block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mt-2">
                RoomTime Server
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Лучший анархический сервер Minecraft. Играй без правил, строй, выживай и доминируй!
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
              <div className="bg-[#1a1a2e] px-6 py-3 rounded-lg border border-purple-500/20">
                <code className="text-purple-400 font-mono text-lg">RoomTime.gomc.me</code>
              </div>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg"
                onClick={() => {
                  navigator.clipboard.writeText('RoomTime.gomc.me');
                  toast({ title: "IP скопирован!" });
                }}
              >
                <Icon name="Copy" size={20} className="mr-2" />
                Скопировать IP
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button 
                onClick={() => window.open('https://t.me/HollyFunServer', '_blank')}
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-600/20"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Telegram
              </Button>
              <Button 
                onClick={() => window.open('https://discord.gg/WBrBCpUbkc', '_blank')}
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:bg-purple-600/20"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Discord
              </Button>
              <Button 
                onClick={() => window.open('https://youtube.com/@lololoshkafixplay?si=HUfx9dOGnah-yenD', '_blank')}
                variant="outline"
                className="border-red-500/30 text-red-400 hover:bg-red-600/20"
              >
                <Icon name="Youtube" size={20} className="mr-2" />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1a1a2e]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">Команда проекта</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#1a1a2e] border-orange-500/30 p-4">
                <h4 className="text-lg font-bold text-orange-400 mb-2">🔶 Создатели</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• IIoneR</li>
                  <li>• umQKoKiq</li>
                  <li>• TukeInside</li>
                </ul>
              </Card>
              <Card className="bg-[#1a1a2e] border-red-500/30 p-4">
                <h4 className="text-lg font-bold text-red-400 mb-2">🔴 Администраторы</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• _no_ezz_xaxa_</li>
                </ul>
              </Card>
              <Card className="bg-[#1a1a2e] border-blue-500/30 p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-2">🔵 Бета тестеры</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• kristallik_mal</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Донат привилегии</h3>
            <p className="text-gray-400 text-lg">Поддержи проект и получи преимущества</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {DONATE_ITEMS.map((item) => (
              <Card 
                key={item.id}
                className="bg-[#1a1a2e] border-purple-500/20 overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="p-4">
                  <div className="relative mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-24 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-xs text-center mb-3">{item.description}</p>
                  
                  <ul className="space-y-1 mb-4 min-h-[60px]">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-1 text-xs text-gray-300">
                        <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-purple-500/20 pt-3">
                    <div className="text-center mb-3">
                      <span className="text-2xl font-bold text-white">{item.price} ₽</span>
                    </div>
                    <Button 
                      onClick={() => handlePurchase(item)}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                      size="sm"
                    >
                      Купить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tokens" className="py-16 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Токены и кейсы</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-[#1a1a2e] border-yellow-500/20 p-6 hover:scale-105 transition-all">
              <Icon name="Coins" size={48} className="text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white text-center mb-2">Токены</h4>
              <p className="text-gray-400 text-center mb-4">Игровая валюта сервера</p>
              <p className="text-3xl font-bold text-center text-yellow-400 mb-4">1 ₽ / шт</p>
              <Button 
                onClick={() => handlePurchase({ name: 'Токены', price: 1 })}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
              >
                Купить
              </Button>
            </Card>

            <Card className="bg-[#1a1a2e] border-orange-500/20 p-6 hover:scale-105 transition-all">
              <Icon name="Package" size={48} className="text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white text-center mb-2">Кейс с донатом</h4>
              <p className="text-gray-400 text-center mb-4">Рандомная привилегия</p>
              <p className="text-3xl font-bold text-center text-orange-400 mb-4">25 ₽ / шт</p>
              <Button 
                onClick={() => handlePurchase({ name: 'Кейс с донатом', price: 25 })}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                Купить
              </Button>
            </Card>

            <Card className="bg-[#1a1a2e] border-green-500/20 p-6 hover:scale-105 transition-all">
              <Icon name="Gift" size={48} className="text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white text-center mb-2">Кейс с токенами</h4>
              <p className="text-gray-400 text-center mb-4">Рандомное кол-во токенов</p>
              <p className="text-3xl font-bold text-center text-green-400 mb-4">7 ₽ / шт</p>
              <Button 
                onClick={() => handlePurchase({ name: 'Кейс с токенами', price: 7 })}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Купить
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 relative">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Отзывы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REVIEWS.map((review, index) => (
              <Card key={index} className="bg-[#1a1a2e] border-purple-500/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.author}</h4>
                    <p className={`text-xs ${
                      review.role === 'Создатель' ? 'text-orange-400' : 
                      review.role === 'Админ' ? 'text-red-400' : 
                      'text-blue-400'
                    }`}>{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{review.text}</p>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-16 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Правила сервера</h3>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="main" className="bg-[#1a1a2e] border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  1. ОСНОВНЫЕ ПРАВИЛА
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm space-y-2">
                  <p>1.1 Незнание правил не освобождает вас от ответственности</p>
                  <p>1.2 Начав играть на наших серверах, Вы автоматически подтверждаете своё согласие с данным сводом правил</p>
                  <p>1.3 Администратор вправе наказать игрока по причине, не указанной в настоящих правилах</p>
                  <p>1.8 Игроки обязаны соблюдать все правила</p>
                  <p>1.11 Оскорбление, провоцирование администрации запрещено</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chat" className="bg-[#1a1a2e] border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  2. ПРАВИЛА ЧАТА
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm space-y-2">
                  <p>2.1 Запрещен Капс/Спам/Флуд в любом из чатов</p>
                  <p>2.2 Запрещены унижения, оскорбления игроков</p>
                  <p>2.3 Запрещена нецензурная лексика (маты, скрытые маты)</p>
                  <p>2.4 Запрещено рекламировать/упоминать посторонние ресурсы</p>
                  <p>2.7 Запрещается розжиг межнациональной розни, расизм</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account" className="bg-[#1a1a2e] border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  3. АККАУНТ
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm space-y-2">
                  <p>3.1 Ник не должен содержать мата, оскорблений, схожести с читами</p>
                  <p>3.2 Запрещается предоставлять свой аккаунт другим людям</p>
                  <p>3.3 Ответственность несет владелец аккаунта</p>
                  <p>3.4 Запрещена продажа/передача аккаунтов, продажа привилегий</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="game" className="bg-[#1a1a2e] border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  4. ИГРОВЫЕ ПРАВИЛА
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm space-y-2">
                  <p>4.1 Запрещено мошенничество, обман администрации</p>
                  <p>4.3 Запрещено пользоваться читами, кликерами, автоматизациями</p>
                  <p>4.6 Запрещено вызывание неполадок в работе сервера</p>
                  <p>4.8 Запрещено использование/скрытие багов/недоработок сервера</p>
                  <p>4.10 Запрещено строительство половых органов, нацистских символик, лавакастов</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="donate" className="bg-[#1a1a2e] border-purple-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-purple-400">
                  9. ПЛАТНЫЕ УСЛУГИ
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm space-y-2">
                  <p>9.1 Попытки махинаций оплатами наказываются баном без возврата средств</p>
                  <p>9.2 Предоставьте чек оплаты при обращении о пропаже доната</p>
                  <p>9.3 Администрация не обязана предоставлять доказательства нарушений</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0f] border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white">
                  RT
                </div>
                <span className="text-xl font-bold text-white">RoomTime</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Лучший анархический Minecraft сервер</p>
              <div className="bg-[#1a1a2e] px-4 py-2 rounded border border-purple-500/20 inline-block">
                <code className="text-purple-400 font-mono text-sm">RoomTime.gomc.me</code>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Создатели</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-orange-400">IIoneR</li>
                <li className="text-orange-400">umQKoKiq</li>
                <li className="text-orange-400">TukeInside</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Социальные сети</h4>
              <div className="space-y-3">
                <Button 
                  onClick={() => window.open('https://t.me/HollyFunServer', '_blank')}
                  variant="outline" 
                  className="w-full border-blue-500/20 hover:bg-blue-600/20 text-blue-400"
                >
                  <Icon name="Send" size={18} className="mr-2" />
                  Telegram
                </Button>
                <Button 
                  onClick={() => window.open('https://discord.gg/WBrBCpUbkc', '_blank')}
                  variant="outline" 
                  className="w-full border-purple-500/20 hover:bg-purple-600/20 text-purple-400"
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Discord
                </Button>
                <Button 
                  onClick={() => window.open('https://youtube.com/@lololoshkafixplay?si=HUfx9dOGnah-yenD', '_blank')}
                  variant="outline" 
                  className="w-full border-red-500/20 hover:bg-red-600/20 text-red-400"
                >
                  <Icon name="Youtube" size={18} className="mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 RoomTime HollyFun. Лучший анархический сервер. Не является официальным продуктом Minecraft.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}