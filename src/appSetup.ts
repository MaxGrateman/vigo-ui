import Button from "./components/Button";
import Card from "./components/Cards";
import HBox from "./components/HBox";
import Label from "./components/Label";
import Layout from "./components/Layout";
import Page from "./components/Page";
import Text from './components/Text'
import { registerMany } from "./runtime/componentRegistry";


export function setupRegistry() {
  registerMany({
    Page, Layout, Card, HBox, Label, Text, Button,
    // DataGrid, DataColumn, DataActions, DataAction
  });
}