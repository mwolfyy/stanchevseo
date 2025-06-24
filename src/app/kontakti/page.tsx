import { 
  Column, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Input, 
  Textarea,
  Meta, 
  Schema,
  Icon
} from "@once-ui-system/core";
import { baseURL, person, contact } from "@/resources";

export const dynamic = "force-static";
export async function generateMetadata() {
  return {
    title: contact.title,
    description: contact.description,
    openGraph: {
      title: contact.title,
      description: contact.description,
      url: `${baseURL}/kontakti`,
      siteName: contact.title,
      images: [
        {
          url: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: contact.title,
      description: contact.description,
      images: [`/api/og/generate?title=${encodeURIComponent(contact.title)}`],
    },
  };
}

export default function Kontakti() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path="/kontakti"
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
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
