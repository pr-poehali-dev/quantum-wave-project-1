import { Badge } from "@/components/ui/badge"

export const REFERRAL_LINK = 'https://faberlic.com/register?sponsornumber=716275819&lang=ru&r=1000034210371'

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40">Регистрация открыта</Badge>,
    title: "Начни зарабатывать с Faberlic.",
    showButton: true,
    buttonText: 'Зарегистрироваться',
    buttonLink: REFERRAL_LINK
  },
  {
    id: 'about',
    title: 'Почему Faberlic?',
    content: 'Faberlic — российская косметическая компания с 25-летней историей. Более 10 000 товаров: косметика, парфюмерия, уход, одежда и товары для дома. Бизнес без вложений и рисков.'
  },
  {
    id: 'features',
    title: 'Что ты получишь',
    content: 'Скидки до 40% на всю продукцию для себя, дополнительный доход от команды, бонусы и призы от компании, поддержка и обучение с первого дня.'
  },
  {
    id: 'testimonials',
    title: 'Тысячи уже зарабатывают',
    content: 'Люди по всей России строят свой бизнес с Faberlic — из дома, в удобное время, без начального капитала. Начни и ты.'
  },
  {
    id: 'join',
    title: 'Готова начать?',
    content: 'Зарегистрируйся по реферальной ссылке, получи приветственный бонус и начни свой путь в команде Faberlic уже сегодня.',
    showButton: true,
    buttonText: 'Зарегистрироваться сейчас',
    buttonLink: REFERRAL_LINK
  },
]