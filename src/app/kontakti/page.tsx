import { 
  Column, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Input, 
  Textarea,
  Schema,
  Icon
} from "@once-ui-system/core";
import { baseURL, person, contact } from "@/resources";

export const metadata = {
  title: "Контакти | StanchevSEO",
  description: "Свържете се с мен за SEO консултация или запитване относно оптимизация на сайт.",
  keywords: "SEO оптимизация, линк билдинг, SEO услуги, оптимизация на сайт, SEO цена, SEO консултация",
  openGraph: {
    title: "Контакти | StanchevSEO",
    description: "Свържете се с мен за SEO консултация или запитване относно оптимизация на сайт.",
    url: "https://stanchevseo.netlify.app/kontakti",
    siteName: "StanchevSEO",
    images: [
      {
        url: "/images/og/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "bg_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакти | StanchevSEO",
    description: "Свържете се с мен за SEO консултация или запитване относно оптимизация на сайт.",
    images: ["/images/og/og.jpg"],
  },
};

export default function Kontakti() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path="/kontakti"
        image={`/images/og/og.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}/kontakti`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column gap="l" paddingX="l">
        <Heading variant="display-strong-l" marginBottom="m">
          {contact.title}
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">
          {contact.description}
        </Text>
      </Column>

      <Flex fillWidth gap="xl" mobileDirection="column" paddingX="l">
        <Column flex={1} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Информация за контакт
          </Heading>
          
          <Flex gap="12" vertical="center">
            <Icon name="email" size="m" onBackground="brand-medium" />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">Email</Text>
              <Text variant="body-default-m">{person.email}</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <Icon name="globe" size="m" onBackground="brand-medium" />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">Локация</Text>
              <Text variant="body-default-m">София, България</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <Icon name="calendar" size="m" onBackground="brand-medium" />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">Работно време</Text>
              <Text variant="body-default-m">Понеделник - Петък, 9:00 - 18:00</Text>
            </Column>
          </Flex>
        </Column>

        <Column flex={2} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Изпратете съобщение
          </Heading>
          
          <form>
            <Column gap="16">
              <Input
                id="name"
                placeholder="Вашето име"
                required
              />
              
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
              
              <Input
                id="subject"
                placeholder="Тема на съобщението"
                required
              />
              
              <Textarea
                id="message"
                label="Съобщение"
                placeholder="Опишете вашия проект или въпрос..."
                rows={6}
                required
              />
              
              <Button
                type="submit"
                variant="primary"
                size="m"
                fillWidth
              >
                Изпрати съобщение
              </Button>
            </Column>
          </form>
        </Column>
      </Flex>
    </Column>
  );
}
