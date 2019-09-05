/*---
title: 适应 LineString 的边界。
description: >-
  通过将 LineString 的第一组坐标传递给 [`LngLatBounds`](/mapbox-gl-js/api/#lnglatbounds)，
  并串连 [`extend`](/mapbox-gl-js/api/#lnglatbounds#extend)来包含最后一组坐标，
  从而获取 LineString 的边界。
tags:
  - 用户交互
pathname: /mapbox-gl-js/example/zoomto-linestring/
---*/
import Example from '../../components/example';
import html from './zoomto-linestring.html';
export default Example(html);
