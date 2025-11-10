import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Instagram",
      title: "Ведение социальных сетей",
      description: "Комплексное SMM-продвижение, контент-стратегия, таргетированная реклама"
    },
    {
      icon: "Package",
      title: "Упаковка бизнеса",
      description: "Создание фирменного стиля, брендинг, позиционирование на рынке"
    },
    {
      icon: "TrendingUp",
      title: "Воронки продаж",
      description: "Разработка и внедрение эффективных маркетинговых воронок"
    },
    {
      icon: "Globe",
      title: "Создание сайтов",
      description: "Разработка современных сайтов и лендингов с высокой конверсией"
    },
    {
      icon: "Smartphone",
      title: "Разработка приложений",
      description: "Мобильные и веб-приложения для вашего бизнеса"
    },
    {
      icon: "Bot",
      title: "Разработка чат-ботов",
      description: "Автоматизация общения с клиентами через Telegram, WhatsApp, VK"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Код успеха</h1>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all">
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Маркетинг,<br />
              который <span className="text-primary animate-gradient-shift bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent">работает</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Маркетинговое агентство полного цикла. Работаем с любыми компаниями во всех нишах
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover:scale-105 transition-transform">
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-accent hover:scale-105 transition-transform">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-bold mb-4">Наши услуги</h3>
            <p className="text-muted-foreground text-lg">
              Комплексные решения для роста вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-4xl font-bold">Почему выбирают нас</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Работаем на результат</h5>
                    <p className="text-muted-foreground text-sm">
                      Фокусируемся на конкретных KPI и росте вашего бизнеса
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Опытная команда</h5>
                    <p className="text-muted-foreground text-sm">
                      Специалисты с опытом работы в различных нишах
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Быстрый старт</h5>
                    <p className="text-muted-foreground text-sm">
                      Начинаем работу в течение 3 дней после согласования
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Прозрачность</h5>
                    <p className="text-muted-foreground text-sm">
                      Детальная отчетность по всем проектам и кампаниям
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Обсудим ваш проект?</h4>
                  <p className="text-muted-foreground">
                    Оставьте заявку и мы свяжемся с вами в течение часа
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон или email"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем проекте"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-24"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary mb-2">Код успеха</h3>
              <p className="text-sm text-muted-foreground">
                Маркетинговое агентство полного цикла
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;