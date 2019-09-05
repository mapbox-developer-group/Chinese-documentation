/*---
title: 使用本地生成的表意文字
description: >-
  生成中文/日文/韩文（CJK）表意文字和预构的朝鲜文音节需要下载大量的字体数据，这可能大大延长地图加载时间。请使用本地字体并使用 localIdeographFontFamily 设置来加速地图的加载，避免从服务器端获取字体。这个设置会定义一个CSS font-family，用于在本地重写生成存在于中日韩统一表意文字及朝鲜文音节 Unicode范围中的字符。在这些范围中，地图样式中的字体设置会被忽略，以支持本地已有的字体。地图样式（light/regular/medium/bold）中定义的字体堆栈中的关键词会被转译成相应的 CSS 'font-weight'。这个设置默认使用系统自带的 sans-serif 字体。当重写这个设置时，请留意你所选择的字体可能不会在所有用户设备上都可用。最好的方式是指定至少一个广泛可用的备选字体类，比如 sans-serif。
tags:
  - internationalization
pathname: /mapbox-gl-js/example/local-ideographs/
---*/
import Example from '../../components/example';
import html from './local-ideographs.html';
export default Example(html);
