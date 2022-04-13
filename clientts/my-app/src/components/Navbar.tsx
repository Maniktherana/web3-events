import React, { useState } from 'react';
import { createStyles, Header, Group, ThemeIcon, Container, Title, useMantineColorScheme } from '@mantine/core';
import { BrandTwitter, BrandGithub } from 'tabler-icons-react';
import LightDarkButton from './LightDarkButton';
import { openInNewTab } from './Helper';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,
  },

  Title: {
    [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
  },

  social: {
    width: 280,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Title order={2}>Web3 Events</Title>

        <Group spacing={7} className={classes.social} position="right" noWrap>
            <ThemeIcon 
            radius="md" 
            size="lg" 
            sx={(theme) => ({
                backgroundColor: theme.colors.dark[4],
                '&:hover': {
                backgroundColor: theme.colors.dark[3],
                },
            })}
            onClick={() => openInNewTab("https://twitter.com/ManaMkr")}
            >
                <BrandTwitter size={18} />
            </ThemeIcon>
            <ThemeIcon 
                radius="md" 
                size="lg" 
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4],
                    '&:hover': {
                    backgroundColor: theme.colors.dark[3],
                    },
                })}
                onClick={() => openInNewTab("https://github.com/Maniktherana/web3-events")}
            >
                <BrandGithub size={18} />
            </ThemeIcon>
                <LightDarkButton />
        </Group>

      </Container>
    </Header>
  );
}