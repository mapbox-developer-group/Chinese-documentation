---
title: 简介
description: Mapbox GL JS 简介，一个使用 WebGL 将矢量切片和 Mapbox 样式渲染成交互式地图的 JavaScript 库。
prependJs:
  - "import OverviewHeader from '@mapbox/dr-ui/overview-header';"
  - "import Quickstart from '../../components/quickstart';"
  - "import Copyable from '../../components/copyable';"
  - "import urls from '../../components/urls';"
  - "import {version} from '../../../package.json';"
pathname: /mapbox-gl-js/overview/
contentType: API
---

{{
    <OverviewHeader
    features={[
        "自定义地图样式",
        "快速矢量地图",
        "和其他 Mapbox 工具兼容"
    ]}
    title="Mapbox GL JS"
    version={version}
    changelogLink="https://github.com/mapbox/mapbox-gl-js/blob/master/CHANGELOG.md"
    ghLink="https://github.com/mapbox/mapbox-gl-js"
    installLink="https://www.mapbox.com/install/js/"
    image={<div />}
    />
}}

Mapbox GL JS 是一个 JavaScript 库，它使用 WebGL，以 [vector tiles](https://docs.mapbox.com/help/glossary/vector-tiles/) 和 [Mapbox styles] ({{prefixUrl('/style-spec')}}) 为来源，将它们渲染成互动式地图。它是 Mapbox GL 生态系统的一部分，其中还包括 [Mapbox mobile](https://www.mapbox.com/mobile/)，它是一个用 C++ 编写的兼容桌面和移动平台的渲染引擎。

## 快速开始

开始前，你需要获得一个 [access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/) 和一个 [style URL](https://docs.mapbox.com/help/glossary/style-url/)。你可以从我们的[专业设计样式](https://docs.mapbox.com/api/maps/#styles)中选择一个，或者使用 [Mapbox Studio](https://www.mapbox.com/studio/) 创造属于你自己的样式。


{{
<Quickstart />
}}


## CSP 指令

作为跨站脚本和其他网站安全漏洞的缓解方法，你可以使用 [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/Security/CSP) 来为你的网站指定安全策略。如果你这样做，Mapbox GL JS 需要以下 CSP 指令：

```
worker-src blob: ;
child-src blob: ;
img-src data: blob: ;
```

请求 Mapbox 或其他服务的样式，需要额外的指令。对于 Mapbox，你可以使用 `connect-src` 指令：

```
connect-src https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com
```

对于没有启用 <code>worker-src blob: ; child-src blob:</code> 的严格 CSP 环境，有一个独立的 Mapbox GL JS bundle (`mapbox-gl-csp.js` and `mapbox-gl-csp-worker.js`)，它需要手动设置路径：


{{
<Copyable lang="html">{`<script src='${urls.js().replace('.js', '-csp.js')}'></script>
<script>
mapboxgl.workerUrl = "${urls.js().replace('.js', '-csp-worker.js')}";
...
</script>`}</Copyable>
}}

## Mapbox CSS

Quickstart 中的 CSS 是用来设置 Mapbox 代码创建的 DOM 元素风格的。如果没有这个 CSS，Popups 和 Markers 等元素将无法使用。

导入这个 CSS 最简便的方法，是在文档的 head 元素中包含一个 `<link>` 元素，指向 Mapbox CDN。同时，它也捆绑在 Mapbox 模块中，意味着如果你有一个可以处理 CSS 的捆绑器，你可以从`mapbox-gl/dist/mapbox-gl.css`导入CSS。

请注意，如果第一次渲染时 CSS 还不在，后面一旦此 CSS 有了，所有依赖它的 DOM 元素会恢复过来。