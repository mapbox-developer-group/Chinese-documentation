/*---
title: 改变行政边界世界观
description: |
  根据地图观众，使用[worldview](https://www.mapbox.com/vector-tiles/mapbox-streets-v8/#-worldview-text) 值来调整行政边界。在这个例子里，你可以在worldviews变量中看到worldview选项。例如以下:
  - **CN**: 中国大陆用户视角的边界，但未被中华人民共和国正式认可。
  - **IN**: 符合印度制图规范要求的边界.
  - **US**: 美国用户视角的边界，中国和印度以外国家基本适用。
    以上文字并不一定反映美国官方对外政策。
tags:
  - layers
  - user-interaction
pathname: /mapbox-gl-js/example/toggle-worldviews/
---*/
import Example from '../../components/example';
import html from './toggle-worldviews.html';
export default Example(html);
