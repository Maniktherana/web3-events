import React from 'react';
import { createStyles, Container, Group, ThemeIcon, Title } from '@mantine/core';
import { BrandTwitter, BrandGithub } from 'tabler-icons-react';
import { openInNewTab } from './Helper';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title order={2}>Web3 Events</Title>
        <Group spacing={8} className={classes.links} position="right" noWrap>
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
        </Group>
      </Container>
    </div>
  );
}
