import { Column, Flex, Feedback } from "@once-ui-system/core";

export default function TermsPage() {
  return (
    <Column as="section" padding="xl" gap="xl" fillWidth>
      <Flex as="h1" textVariant="heading-xl" horizontal="center">
        Общи условия за ползване на услугите на Stanchev.bg
      </Flex>

      <Flex as="p" textVariant="body-default-l">
        Настоящите общи условия уреждат отношенията между Stanchev.bg и потребителите на предоставяните SEO услуги и свързани консултации.
      </Flex>

      <Column gap="l">
        <Flex as="h2" textVariant="heading-xl">
          1. Данни за доставчика
        </Flex>
        <Flex as="p">Stanchev.bg е уебсайт, собственост на Стоян Станчев.</Flex>
        <Flex as="ul" listStyle="disc" paddingLeft="l">
          <li>Уебсайт: https://stanchev.bg</li>
          <li>Имейл: seo@stanchev.bg</li>
        </Flex>

        <Flex as="h2" textVariant="heading-xl">
          2. Обхват на услугите
        </Flex>
        <Flex as="ul" listStyle="disc" paddingLeft="l">
          <li>SEO одит и анализ</li>
          <li>On-page оптимизация</li>
          <li>Keyword research</li>
          <li>SEO консултации</li>
          <li>Оптимизация на съдържание</li>
        </Flex>
        <Callout variant="warning">
          Услугите се предоставят след потвърждение и писмено съгласие между двете страни.
        </Callout>

        <Flex as="h2" textVariant="heading-xl">
          3. Права и отговорности
        </Flex>
        <Flex as="p">Потребителят се задължава:</Flex>
        <Flex as="ul" listStyle="disc" paddingLeft="l">
          <li>Да предоставя вярна и актуална информация</li>
          <li>Да използва услугите по добросъвестен начин</li>
        </Flex>
        <Flex as="p">Stanchev.bg си запазва правото:</Flex>
        <Flex as="ul" listStyle="disc" paddingLeft="l">
          <li>Да променя цените и съдържанието на сайта без предизвестие</li>
          <li>Да откаже услуга при съмнение за недобросъвестност</li>
        </Flex>

        <Flex as="h2" textVariant="heading-xl">
          4. Поверителност
        </Flex>
        <Flex as="p">
          Всички данни и анализи, предоставени от клиента, се третират като строго поверителни и не се споделят с трети страни.
        </Flex>

        <Flex as="h2" textVariant="heading-xl">
          5. Плащания и срокове
        </Flex>
        <Flex as="p">
          Услугите се заплащат предварително, освен ако не е договорено друго. Изпълнението започва след потвърдено плащане.
        </Flex>
		<Feedback
		title="Важно" 
		description="За абонаментни услуги и дългосрочни партньорства се договарят индивидуални условия."
		/>
        <Flex as="h2" textVariant="heading-xl">
          6. Авторски права
        </Flex>
        <Flex as="p">
          Всички материали на сайта (текстове, графики, дизайн) са собственост на Стоян Станчев и не могат да бъдат използвани без разрешение.
        </Flex>

        <Flex as="h2" textVariant="heading-xl">
          7. Заключителни разпоредби
        </Flex>
        <Flex as="p">
          С използването на сайта и услугите му, потребителят се съгласява с настоящите Общи условия.
        </Flex>

        <Flex as="p" textVariant="body-default-s" horizontal="end">
          Последна актуализация: 19 юни 2025 г.
        </Flex>
      </Column>
    </Column>
  );
}
