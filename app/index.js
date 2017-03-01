import 'file-loader?name=[name].[ext]!./index.html';
import App from "./application";
import Router from "./router";

window.App = App;



App.Router = Router;