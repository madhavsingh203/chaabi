import React from "react";
import { Grid } from "@mui/material";
import "./Dashboard.css";
import Card from "../Card/Card";
import { ResponsiveContainer } from "recharts";
import BarGraph from "../BarChart/BarChart";

const Dashboard = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <Grid container mt={2} p={2} className="top-grid">
          {/* <Grid className="top-grid-item" item xs={12} md={6} lg={3}><Card/></Grid>
        <Grid className="top-grid-item" item xs={12} md={6}  lg={3}><Card/></Grid>
        <Grid className="top-grid-item" item xs={12} md={6}  lg={2}><Card/></Grid> 
        <Grid className="top-grid-item" item xs={12} md={6} lg={3}><Card /></Grid> */}
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid
            container
            style={{
              backgroundColor: "white",
              width: "100%",
            }}
            className="middle-grid-container"
          >
            
            <Grid item className="middle-grid-graph">
              <div
                className="middle-grid-top "
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "3rem",
                }}
              >
                <p>Last 14 days active workers in training</p>
                <p>Last 14 days</p>
              </div>
              <BarGraph width="100%" />
            </Grid>

          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
