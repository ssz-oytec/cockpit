import './style.css';
import getData from './dbmanager';
//import loadCharts from '/chartsmanager'

//getData();

const BODY = document.getElementsByTagName("body")[0];
const MAIN_DIV = document.createElement("div");
MAIN_DIV.setAttribute("id", "main-container");

let canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas");
canvas.setAttribute("width", "100%");
canvas.setAttribute("height", "100%");

MAIN_DIV.appendChild(canvas);
BODY.appendChild(MAIN_DIV);