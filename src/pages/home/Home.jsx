import React from "react";
import { Chart } from "../../components/chart/Chart";
import { FeatureInfo } from "../../components/featureInfo/FeatureInfo";
import "./Home.css";
import { data } from "../../dummyData";
import { WidgetSm } from "../../components/widget/WidgetSm";
import { WidgetLg } from "../../components/widgetLg/WidgetLg";

export const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active Users" />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
