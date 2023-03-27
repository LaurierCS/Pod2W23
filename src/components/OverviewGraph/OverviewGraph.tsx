import styles from "./OverviewGraph.module.css";
import { Container, Grid, Title, Text, Tabs } from '@mantine/core';
import { useState } from 'react';

const OverviewGraph = () => {

  const [activeTab, setActiveTab] = useState<string | null>('week');

  return(
    <Container className={styles.container}>
      <Container className={styles.nav}>
        <Grid>
          <Grid.Col span={6}>
            <Title>Overview</Title>
          </Grid.Col>
          <Grid.Col span={3} offset={3}>
            <Tabs styles={{ tab: {
                color: '#F8F9FA',
                '&[data-active]': { backgroundColor: '#2C2E33'},
                '&[data-active]:hover': { backgroundColor: '#2C2E33'},
                '&:hover': { backgroundColor: '#25262B'}
                } }}
              variant="pills" value={activeTab} onTabChange={setActiveTab}>
              <Tabs.List >
                <Tabs.Tab value="week">Week</Tabs.Tab>
                <Tabs.Tab value="month">Month</Tabs.Tab>
                <Tabs.Tab value="year">Year</Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Grid.Col>
        </Grid>
      </Container>
      <Container className={styles.graph}>
      </Container>
    </Container>
  );
}

export default OverviewGraph;