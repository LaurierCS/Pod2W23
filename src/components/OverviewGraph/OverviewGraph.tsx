import styles from "./OverviewGraph.module.css";
import { Container, Grid, Title, Text, Tabs, Stack, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import PieGraph from "./PieGraph/PieGraph";
import { collection, addDoc, getDocs } from 'firebase/firestore';

const OverviewGraph = () => {

  const [activeTab, setActiveTab] = useState<string | null>('week');
  const [interval, setInterval] = useState<number>(7);
  const [graphData, setGraphData] = useState<ExpenseData>();

  // on page load
  useEffect(() => {
    updateGraphData(interval);
  });

  let intervalMessage: string = `Last ${interval} days`;

  const handleIntervalChange = (value: string) => {
    setActiveTab(value);

    if (value === 'week') {
      setInterval(7);
    } else if (value === 'month') {
      setInterval(30);
    } else {
      setInterval(365);
    }

    updateGraphData(interval);
  }

  interface PieData {
    id: string;
    label: string;
    value: number;
    color: string;
  }
  
  interface PieGraphProps {
    data: PieData[];
  }

  const updateGraphData = (interval: number) => {
    
  }

  interface ExpenseData {

  }

  const fetchUserExpenseData = (interval: number) => {
    let data: ExpenseData[] = [];
  }

  const data = [
    {
      "id": "elixir",
      "label": "elixir",
      "value": 152,
      "color": "hsl(300, 70%, 2%)"
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
          variant="pills" value={activeTab} onTabChange={handleIntervalChange}>
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
              <Text>{intervalMessage}</Text>
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