'use client';

import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  Feedback,
} from '@once-ui-system/core';

export default function SeoAuditPage() {
  return (
    <Column as="section" gap="xl" padding="xl" fillWidth>
      {/* ─────────── HERO ─────────── */}
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          SEO Одит – първата крачка към <br /> ефективна SEO оптимизация
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Независимо дали сте <em>онлайн магазин</em>, SaaS платформа или корпоративен
          сайт, задълбоченият SEO одит е фундаментът
          за видимост в&nbsp;Google и ниски&nbsp;SEO&nbsp;цени в бъдеще.
        </Text>

        <Button
          variant="primary"
          size="l"
          href="/kontakti"
          prefixIcon="checkCircle"
          data-border="rounded"
        >
          Заяви безплатна консултация
        </Button>
      </Column>

      {/* ─────────── БЪРЗИ ЕТИКЕТИ ─────────── */}
      <Flex gap="8" wrap horizontal="center">
        {[
          'on-page оптимизация',
          'off-page оптимизация',
          'линк билдинг стратегия',
          'ppc реклама',
        ].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      {/* ─────────── КАКВО ПРЕДСТАВЛЯВА ─────────── */}
      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва нашият SEO Одит?
        </Heading>

        <Text variant="body-default-l">
          Одитът е подробен <strong>SEO анализ на сайта</strong>, който разкрива
          скрити технически бариери, пропуски във <em>link building-а</em> и
          неправилно структурирани <em>on-page</em> елементи. Като опитен{' '}
          <strong>SEO консултант</strong> работя с екип от сертифицирани{' '}
          <strong>SEO специалисти</strong>, за да покрием целия спектър – от
          <em>интернет реклама</em> и <em>AdWords</em> кампании до
          <em>ултимативна оптимизация на онлайн магазини</em>.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li>
            <strong>Техническа проверка</strong> – Core Web Vitals, мобилна
            производителност, schema markup и бързина.
          </li>
          <li>
            <strong>Ключови думи &amp; съдържание</strong> –{' '}
            <em>keyword research</em>, <em>SEO копирайтинг</em> и оптимизация на
            статии.
          </li>
          <li>
            <strong>Външни фактори</strong> –{' '}
            <em>линк билдинг</em>, <em>директории за регистрации</em>, онлайн
            репутация и <em>PPС кампании</em>.
          </li>
          <li>
            <strong>Конкурентен анализ</strong> – сравнение с топ{' '}
            <em>SEO фирми</em> в нишата и препоръки за по-добро класиране.
          </li>
        </Column>
      </Column>

      {/* ─────────── ЗАЩО НИ ТРЯБВА ─────────── */}
      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Защо SEO Одитът е задължителен?
        </Heading>

        <Text variant="body-default-l">
          Без ясно диагностициран сайт дори най-ниската{' '}
          <strong>цена за SEO оптимизация</strong> може да се окаже излишен
          разход. Одитът дава карта за действие – от <em>редизайн на уеб сайт</em>{' '}
          до изграждане на нова <em>SEO стратегия</em>. Това спестява средства от
          бъдещи{' '}
          <em>linkbuilding</em> разходи и ускорява <strong>класирането в Google</strong>.
        </Text>

        <Feedback
          title="Tip"
          description="Нашите доклади се изготвят с приоритет на KPI-те за продажби, а не само с филтрирана SEO терминология."
        />
      </Column>

      {/* ─────────── ПРОЦЕС ─────────── */}
      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Процес в 4 стъпки
        </Heading>

        {[
          ['Анализ', 'Събираме данни от Google Search Console, Ahrefs и Screaming Frog.'],
          ['Стратегия', 'Определяме приоритети – от мобилна оптимизация до директории за регистрация.'],
          ['Имплементация', 'Работим заедно с вашия dev екип или наш партньор – добра SEO фирма от Варна.'],
          ['Отчет', 'Получавате подробен PDF + live dashboard с SEO рейтинг и позиция.'],
        ].map(([title, desc], i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {title}
              </Heading>
              <Text variant="body-default-m">{desc}</Text>
            </Column>
          </Flex>
        ))}
      </Column>

      {/* ─────────── ПАКЕТИ & ЦЕНИ ─────────── */}
      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Пакети и примерни цени
        </Heading>

        <Column gap="m">
          <Flex
            background="surface-1"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
          >
            <Column flex={8} gap="s">
              <Heading as="h3" variant="heading-strong-l">
                Базов SEO Одит
              </Heading>
              <Text variant="body-default-m">
                Подходящ за <em>SEO за начинаещи</em> и фирми с ограничен бюджет.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-s">от 650&nbsp;лв.</Heading>
              <Button href="/kontakti" size="s" variant="secondary">
                Поръчай
              </Button>
            </Column>
          </Flex>

          <Flex
            background="surface-2"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
          >
            <Column flex={8} gap="s">
              <Heading as="h3" variant="heading-strong-l">
                Премиум&nbsp;SEO&nbsp;Одит + Link Building
              </Heading>
              <Text variant="body-default-m">
                Включва <em>ефективна SEO оптимизация</em>,{' '}
                <em>SEO курс онлайн</em> за екипа и персонален{' '}
                <em>SEO оптимизатор</em>.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-s">от 1 750&nbsp;лв.</Heading>
              <Button href="/kontakti" size="s" variant="secondary">
                Поръчай
              </Button>
            </Column>
          </Flex>
        </Column>
      </Column>

      {/* ─────────── CTA ─────────── */}
      <Column gap="m" align="center" paddingTop="xl">
        <Heading variant="display-strong-m" align="center">
          Готови ли сте за истински&nbsp;SEO резултати?
        </Heading>
        <Button
          variant="primary"
          size="l"
          prefixIcon="rocket"
          href="/kontakti"
        >
          Свържи се с нас
        </Button>
      </Column>
    </Column>
  );
}
