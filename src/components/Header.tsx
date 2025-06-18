"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, seoServices, contact } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'bg-BG'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "bg-BG" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/za-men"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/za-men"
                    label={about.label}
                    selected={pathname === "/za-men"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    aria-label="За мен"
                    href="/za-men"
                    selected={pathname === "/za-men"}
                  />
                </>
              )}
              {routes["/seo-proekti"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/seo-proekti"
                    label={work.label}
                    selected={pathname.startsWith("/seo-proekti")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    aria-label="SEO проекти"
                    href="/seo-proekti"
                    selected={pathname.startsWith("/seo-proekti")}
                  />
                </>
              )}
              {routes["/seo-uslugi"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="handshake"
                    href="/seo-uslugi"
                    label={seoServices.label}
                    selected={pathname.startsWith("/seo-uslugi")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="handshake"
                    href="/seo-uslugi"
                    aria-label="SEO услуги"
                    selected={pathname.startsWith("/seo-uslugi")}
                  />
                </>
              )}
              {routes["/kontakti"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="email"
                    href="/kontakti"
                    label={contact.label}
                    selected={pathname.startsWith("/kontakti")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="email"
                    href="/kontakti"
                    aria-label="Контакти"
                    selected={pathname.startsWith("/kontakti")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    aria-label="SEO блог"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
