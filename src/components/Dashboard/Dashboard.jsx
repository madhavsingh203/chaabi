import React from "react";
import {  Grid } from "@mui/material";
import "./Dashboard.css";
import Card from '../Card/Card'
const Dashboard = () => {
  return (
    <>
    <div style={
        {
           width:'100%'
        }
    }>
      <Grid container mt={2} p={2}  className="top-grid">
        <Grid className="top-grid-item" item xs={12} md={6} lg={3}><Card/></Grid>
        <Grid className="top-grid-item" item xs={12} md={6}  lg={3}><Card/></Grid>
        <Grid className="top-grid-item" item xs={12} md={6}  lg={2}><Card/></Grid> 
        <Grid className="top-grid-item" item xs={12} md={6} lg={3}><Card /></Grid>

      </Grid>
      </div>
    </>
  );
};

export default Dashboard;
