# NGX-SKILL-BAR

[![npm version](https://img.shields.io/npm/v/ngx-skill-bar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-skill-bar)
[![npm downloads](https://img.shields.io/npm/dm/ngx-skill-bar.svg?style=flat)](https://www.npmjs.com/package/ngx-skill-bar)
[![dependency status](https://david-dm.org/thiswallz/ngx-skill-bar.svg)](https://david-dm.org/thiswallz/ngx-skill-bar)

Beautiful and simple skill/progress bars.


You do not need any dependencies. It works with Angular x. (Was created using Angular 6)

#### Examples

![Alt text](https://raw.githubusercontent.com/thiswallz/ngx-skill-bar/master/bars.png?raw=true 'Example 1')


## Quick Start

### Install

```bash
npm i --save ngx-skill-bar
```


### Import the module

```ts
// app.module.ts...
import { NgxSkillBarModule } from "ngx-skill-bar";
// ...
@NgModule({
  imports: [
    //...
    NgxSkillBarModule
  ],
})
export class AppModule {}
```

### Use it!

Examples :

```html
<div class="wrapper">
  <div class="box a">    
    <div>Basic usage, different percentages</div>
    <ngx-skill-bar percentage="50"></ngx-skill-bar>
    <ngx-skill-bar percentage="75"></ngx-skill-bar>
    <ngx-skill-bar percentage="80"></ngx-skill-bar>
    <ngx-skill-bar percentage="60"></ngx-skill-bar>
    <ngx-skill-bar percentage="30"></ngx-skill-bar>
  </div>
  <div class="box b">
    <div>Different number of bars (percentage 50%)</div>
    <ngx-skill-bar percentage="50" numberOfBars="9"></ngx-skill-bar>
    <ngx-skill-bar percentage="50" numberOfBars="7"></ngx-skill-bar>
    <ngx-skill-bar percentage="50" numberOfBars="5"></ngx-skill-bar>
    <ngx-skill-bar percentage="50" numberOfBars="2"></ngx-skill-bar>
    <ngx-skill-bar percentage="50" numberOfBars="1"></ngx-skill-bar>
  </div>
  <div class="box c">
    <div>Showing percentage (7 bars)</div>
    <ngx-skill-bar percentage="100" numberOfBars="7" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar percentage="80.5" numberOfBars="7" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar percentage="60" numberOfBars="7" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar percentage="40.54" numberOfBars="7" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar percentage="9.98" numberOfBars="7" showFigures="true"></ngx-skill-bar>
  </div>
  <div class="box d">
    <div>Different bar and background colors (8 bars)</div>
    <ngx-skill-bar showFigures="true" percentage="50" numberOfBars="8" bgColor="rgba(255, 255, 255, .5)" color="#FBC02D"></ngx-skill-bar>
    <ngx-skill-bar showFigures="true" percentage="75" numberOfBars="8" bgColor="rgba(255, 255, 255, .5)" color="#D500F9"></ngx-skill-bar>
    <ngx-skill-bar showFigures="true" percentage="80" numberOfBars="8" bgColor="#33691E" color="#FF5722"></ngx-skill-bar>
    <ngx-skill-bar showFigures="true" percentage="60" numberOfBars="8" bgColor="#263238" color="#E91E63"></ngx-skill-bar>
    <ngx-skill-bar showFigures="true" percentage="30" numberOfBars="8" bgColor="#263238" color="#90A4AE"></ngx-skill-bar>
  </div>
  <div class="box e">
    <div>Different bar-width  (5 bars)</div>
    <ngx-skill-bar barWidth="70" percentage="50" numberOfBars="5" showFigures="true" ></ngx-skill-bar>
    <ngx-skill-bar barWidth="60" percentage="50" numberOfBars="5" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar barWidth="50" percentage="50" numberOfBars="5" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar barWidth="30" percentage="50" numberOfBars="5" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar barWidth="20" percentage="50" numberOfBars="5" showFigures="true"></ngx-skill-bar>
  </div>
  <div class="box f">
    <div>Full bar (8 bars)</div>
    <ngx-skill-bar full="true" percentage="100" numberOfBars="8" showFigures="true"></ngx-skill-bar>
    <ngx-skill-bar full="true" percentage="80.5" numberOfBars="8" showFigures="true" bgColor="#33691E" color="#FF5722"></ngx-skill-bar>
    <ngx-skill-bar full="true" percentage="60" numberOfBars="8" showFigures="true" bgColor="#263238" color="#E91E63"></ngx-skill-bar>
    <ngx-skill-bar full="true" percentage="40.54" numberOfBars="8" showFigures="true" bgColor="#263238" color="#90A4AE"></ngx-skill-bar>
    <ngx-skill-bar full="true" percentage="9.98" numberOfBars="8" showFigures="true"></ngx-skill-bar>
  </div>
</div>
```

## Authors

- **Mauricio Joost Wolff** - _Initial work_ - [GitHub](https://github.com/thiswallz)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details