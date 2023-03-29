import styles from "./OverviewGraph.module.css";
import { Container, Grid, Title, Text, Tabs, Stack, Button } from '@mantine/core';
import { useState } from 'react';
import PieGraph from "./PieGraph/PieGraph";

const OverviewGraph = () => {

  const data = [
    {
      "id": "elixir",
      "label": "elixir",
      "value": 152,
      "color": "hsl(74, 70%, 50%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 21,
      "color": "hsl(309, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 262,
      "color": "hsl(117, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 598,
      "color": "hsl(204, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 142,
      "color": "hsl(59, 70%, 50%)"
    }
  ];

  const [activeTab, setActiveTab] = useState<string | null>('week');

  return(
    <Container className={styles.container}>
      <Container className={styles.nav}>
        <Title order={3}>Overview</Title>
        <Tabs styles={{ tab: {
            color: '#F8F9FA',
            '&[data-active]': { backgroundColor: '#2C2E33'},
            '&[data-active]:hover': { backgroundColor: '#2C2E33'},
            '&:hover': { backgroundColor: '#25262B'}
            } }}
          variant="pills" value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="week">Week</Tabs.Tab>
            <Tabs.Tab value="month">Month</Tabs.Tab>
            <Tabs.Tab value="year">Year</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Container>
      <Container className={styles.overview}>
        <Container className={styles.graph}>
          <PieGraph data={data}></PieGraph>
        </Container>
        <Container className={styles.sideinfo}>
          <Stack className={styles.stack}>
            <Container className={styles.change}>
              <Title order={4}>Net Change</Title>
            </Container>
            <Container className={styles.income}>
              <Title order={4}>Income</Title>
            </Container>
            <Container className={styles.expenses}>
              <Title order={4}>Expenses</Title>
            </Container>
          </Stack>
        </Container>
      </Container>
    </Container>
  );
}

export default OverviewGraph;