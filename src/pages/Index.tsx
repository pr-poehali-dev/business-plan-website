import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "FileText",
      title: "Разработка бизнес-плана",
      description: "Комплексная разработка бизнес-планов для стартапов, малого и среднего бизнеса с финансовым моделированием"
    },
    {
      icon: "TrendingUp",
      title: "Инвестиционный меморандум",
      description: "Подготовка презентационных материалов для привлечения инвестиций и переговоров с партнёрами"
    },
    {
      icon: "LineChart",
      title: "Финансовая модель",
      description: "Построение детальных финансовых моделей с прогнозами на 3-5 лет и анализом точки безубыточности"
    },
    {
      icon: "Target",
      title: "Маркетинговая стратегия",
      description: "Разработка стратегии продвижения, анализ целевой аудитории и конкурентного окружения"
    },
    {
      icon: "Users",
      title: "Консалтинг",
      description: "Экспертная поддержка на всех этапах развития бизнеса, аудит текущей деятельности"
    },
    {
      icon: "Award",
      title: "Бизнес-аналитика",
      description: "Глубокий анализ рынка, SWOT-анализ, оценка рисков и возможностей для вашего бизнеса"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Консультация",
      description: "Изучаем специфику вашего бизнеса, цели и задачи проекта"
    },
    {
      number: "02",
      title: "Анализ",
      description: "Проводим исследование рынка, конкурентов и целевой аудитории"
    },
    {
      number: "03",
      title: "Разработка",
      description: "Создаём структурированный бизнес-план с финансовыми расчётами"
    },
    {
      number: "04",
      title: "Презентация",
      description: "Представляем готовый документ и вносим правки по вашим замечаниям"
    }
  ];

  const pricing = [
    {
      name: "Базовый",
      price: "от 50 000 ₽",
      features: [
        "Бизнес-план до 30 страниц",
        "Финансовая модель на 3 года",
        "Анализ рынка и конкурентов",
        "1 раунд правок"
      ]
    },
    {
      name: "Профессиональный",
      price: "от 150 000 ₽",
      features: [
        "Бизнес-план до 60 страниц",
        "Финансовая модель на 5 лет",
        "Глубокий анализ рынка",
        "Инвестиционный меморандум",
        "3 раунда правок",
        "Презентация для инвесторов"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "от 300 000 ₽",
      features: [
        "Комплексный бизнес-план",
        "Финансовая модель с 10+ сценариями",
        "Маркетинговая стратегия",
        "Инвестиционный меморандум",
        "Неограниченные правки",
        "Сопровождение 3 месяца",
        "Подготовка к переговорам"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Алексей Морозов",
      company: "Генеральный директор, TechStart",
      text: "Благодаря профессиональному бизнес-плану от команды мы привлекли 15 млн рублей инвестиций. Финансовая модель оказалась максимально точной.",
      result: "15 млн ₽ инвестиций"
    },
    {
      name: "Мария Соколова",
      company: "Основатель, EcoMarket",
      text: "Работа выполнена на высочайшем уровне. Детальный анализ рынка помог нам скорректировать стратегию и увеличить прибыль на 40% за год.",
      result: "+40% прибыль за год"
    },
    {
      name: "Дмитрий Петров",
      company: "Владелец, Сеть кафе 'Уют'",
      text: "Получили не просто документ, а реальный инструмент для развития бизнеса. Окупили инвестиции в бизнес-план уже в первом квартале.",
      result: "Открыли 3 новых точки"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" className="text-primary" size={28} />
            <span className="font-heading font-bold text-xl text-secondary">БизнесПлан Про</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Процесс</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#contact">Получить консультацию</a>
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Профессиональная разработка бизнес-планов
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Превратим вашу идею в структурированный план развития с точными финансовыми расчётами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <a href="#contact">Заказать бизнес-план</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white text-secondary hover:bg-white/90">
                <a href="#services">Узнать подробнее</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="font-heading font-bold text-4xl mb-2">500+</div>
                <div className="text-white/80">Проектов реализовано</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl mb-2">12</div>
                <div className="text-white/80">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-4xl mb-2">95%</div>
                <div className="text-white/80">Успешных сделок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для успешного запуска и развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-secondary">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                БизнесПлан Про — это команда экспертов с 12-летним опытом в разработке бизнес-планов для компаний различных отраслей и масштабов.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на создании документов, которые не просто лежат на полке, а реально работают: привлекают инвестиции, помогают получить кредиты и структурируют развитие бизнеса.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">500+</div>
                  <div className="text-muted-foreground">Успешных проектов</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">98%</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-heading font-semibold text-2xl mb-6 text-secondary">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Экспертиза</div>
                    <div className="text-muted-foreground">Команда профессионалов с MBA и опытом в топовых консалтинговых компаниях</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Индивидуальный подход</div>
                    <div className="text-muted-foreground">Каждый проект разрабатывается с учётом специфики вашего бизнеса</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Гарантия результата</div>
                    <div className="text-muted-foreground">Дорабатываем план до полного соответствия вашим требованиям</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Конфиденциальность</div>
                    <div className="text-muted-foreground">NDA и полная защита ваших данных на всех этапах работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Процесс работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный процесс разработки от идеи до готового документа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="font-heading font-bold text-5xl text-primary/20 mb-4">{step.number}</div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-secondary">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-primary/40" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Тарифы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий пакет услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-heading text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="font-heading font-bold text-4xl text-primary">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <a href="#contact">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <div className="bg-primary/10 rounded-lg px-4 py-2 inline-block">
                    <span className="font-semibold text-primary">{testimonial.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl mb-4 text-secondary">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Получите бесплатную консультацию и коммерческое предложение
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Отправьте заявку</CardTitle>
                    <CardDescription>Мы свяжемся с вами в течение 1 часа</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input 
                          placeholder="Ваше имя" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          type="email" 
                          placeholder="Email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          type="tel" 
                          placeholder="Телефон" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Textarea 
                          placeholder="Расскажите о вашем проекте" 
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full">Отправить заявку</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@biznesplan.pro" className="text-muted-foreground hover:text-primary transition-colors">
                      info@biznesplan.pro
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Офис</div>
                    <div className="text-muted-foreground">
                      Москва, ул. Тверская, 1<br />
                      БЦ "Премьер", офис 501
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 9:00 - 19:00<br />
                      Сб-Вс: по договорённости
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Briefcase" size={24} />
                <span className="font-heading font-bold text-lg">БизнесПлан Про</span>
              </div>
              <p className="text-white/80">
                Профессиональная разработка бизнес-планов с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Бизнес-планы</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Финансовые модели</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Консалтинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@biznesplan.pro</li>
                <li>Москва, ул. Тверская, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 БизнесПлан Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
