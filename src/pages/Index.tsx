import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Настольная игра "Монополия"', price: 2499, rating: 4.8, reviews: 124, image: '/placeholder.svg', category: 'Настольные игры' },
  { id: 2, name: 'Конструктор LEGO City', price: 3999, rating: 4.9, reviews: 89, image: '/placeholder.svg', category: 'Конструкторы' },
  { id: 3, name: 'Кукла Барби', price: 1499, rating: 4.6, reviews: 156, image: '/placeholder.svg', category: 'Куклы' },
  { id: 4, name: 'Радиоуправляемая машина', price: 4599, rating: 4.7, reviews: 67, image: '/placeholder.svg', category: 'Игрушки' },
  { id: 5, name: 'Пазл 1000 элементов', price: 899, rating: 4.5, reviews: 98, image: '/placeholder.svg', category: 'Пазлы' },
  { id: 6, name: 'Мягкая игрушка Медведь', price: 1799, rating: 4.9, reviews: 234, image: '/placeholder.svg', category: 'Мягкие игрушки' },
  { id: 7, name: 'Набор для творчества', price: 1299, rating: 4.4, reviews: 45, image: '/placeholder.svg', category: 'Творчество' },
  { id: 8, name: 'Развивающая игра', price: 799, rating: 4.6, reviews: 78, image: '/placeholder.svg', category: 'Развивающие игры' },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const { toast } = useToast();

  const filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    toast({
      title: "Добавлено в корзину",
      description: `${product.name} успешно добавлен в корзину`,
    });
  };

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
      toast({ title: "Удалено из избранного" });
    } else {
      setFavorites([...favorites, productId]);
      toast({ title: "Добавлено в избранное" });
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#FF6B35] to-[#004E89] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">FUNTIME STORE</h1>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-[#FF6B35] transition-colors">Каталог</a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">О нас</a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Доставка</a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/20 relative">
                <Icon name="Heart" size={24} />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#FF6B35] text-white border-0">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-white/20 relative">
                    <Icon name="ShoppingCart" size={24} />
                    {cartItems.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-[#FF6B35] text-white border-0">
                        {cartItems.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-bold">Корзина</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    {cartItems.length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">Корзина пуста</p>
                    ) : (
                      <>
                        {cartItems.map((item, index) => (
                          <div key={index} className="flex items-center gap-4 border-b pb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">{item.name}</h4>
                              <p className="text-[#004E89] font-bold">{item.price} ₽</p>
                            </div>
                          </div>
                        ))}
                        <div className="pt-4 border-t">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Итого:</span>
                            <span className="text-2xl font-bold text-[#004E89]">{totalPrice} ₽</span>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#004E89] hover:opacity-90 text-white">
                            Оформить заказ
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <Icon name="User" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-[#004E89] to-[#FF6B35] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">Мир игрушек и развлечений</h2>
            <p className="text-xl mb-8 opacity-90">Найдите идеальный подарок для вашего ребёнка</p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-0 text-[#1A1A1A]"
              />
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={24} />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#1A1A1A]">Каталог товаров</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white rounded-full"
                  >
                    <Icon
                      name="Heart"
                      className={favorites.includes(product.id) ? 'fill-[#FF6B35] text-[#FF6B35]' : 'text-[#1A1A1A]'}
                      size={20}
                    />
                  </Button>
                </div>
                <div className="p-4">
                  <Badge className="mb-2 bg-[#7F7F7F]/10 text-[#1A1A1A] hover:bg-[#7F7F7F]/20">
                    {product.category}
                  </Badge>
                  <h4 className="font-semibold text-lg mb-2 min-h-[3.5rem]">{product.name}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="fill-[#FF6B35] text-[#FF6B35]" size={16} />
                      <span className="font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} отзывов)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#004E89]">{product.price} ₽</span>
                    <Button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-[#FF6B35] to-[#004E89] hover:opacity-90 text-white rounded-full"
                    >
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#004E89] to-[#FF6B35] text-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Наши преимущества</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={40} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="opacity-90">Доставим ваш заказ за 1-3 дня</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={40} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="opacity-90">Только сертифицированные товары</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={40} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
              <p className="opacity-90">Всегда на связи для вас</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">FUNTIME</h3>
              <p className="text-sm opacity-80">Лучший магазин игрушек и развлечений для детей</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Партнёрам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Email: info@funtime.ru</li>
                <li>Тел: +7 (800) 555-35-35</li>
                <li>Москва, ул. Ленина, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2025 FunTime Store. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
