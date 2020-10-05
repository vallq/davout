import React from "react";
import DataTable from "../components/DataTable";
import DataStatistics from "../components/DataStatistics";
import { Grid } from "semantic-ui-react";

const PriceDataPage = (props) => {
  const { priceData, statisticData } = props;

  return (
    <Grid columns={2}>
      <Grid.Row columns={2}>
        <Grid.Column>
          <DataTable data={priceData} />
        </Grid.Column>
        <Grid.Column>
          <DataStatistics data={statisticData} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PriceDataPage;
