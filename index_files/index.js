import config from "../config.js";
import leftControl from "./modules/leftandbottom.js";
import "./modules/map.js";
import "./modules/clock.js";
import "./modules/rightChart.js";
import "./modules/rightNum.js";
let newData = [];
let weekData = [];

$.get(config.jsonData.url + config.jsonData.dataName).done(res => {
  res.features.forEach(item => {
    newData.push(item.properties);
  });
  leftControl._initLeftPart_new(newData);
});

leftControl.getCycleData(weekData, 0);
