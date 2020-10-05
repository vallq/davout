import React from "react";
import DataStatistics from "../components/DataStatistics";
import { Grid } from "semantic-ui-react";

const StatisticsPage = (props) => {
  const { statisticData } = props;

  return (
    <Grid columns={2}>
      <Grid.Row columns={2}>
        <Grid.Column>
          <p>Insert other tables here</p>
        </Grid.Column>
        <Grid.Column>
          <DataStatistics data={statisticData} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default StatisticsPage;
