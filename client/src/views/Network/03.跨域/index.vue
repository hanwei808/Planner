<template>
  <div>
    <el-affix
      :offset="58"
      style="width: 100%"
    >
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="文档"
          name="first"
        />
      </el-tabs>
    </el-affix>
    <mdSidebar
      :navigation="navigation"
      v-show="activeName === 'first'"
    />
    <div
      class="article-container"
      :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
    >
      <div
        class="crossnote markdown-preview"
        v-show="activeName === 'first'"
      >
        <h1 id="跨域">
          跨域
        </h1>
        <p>跨域 (Cross-Origin Resource Sharing, CORS) 是一种网络浏览器使用的安全机制，用于限制一个网页从其他不同源（协议、域名、端口）获取资源。这是为了防止恶意网站进行跨站请求伪造（CSRF）。跨域的主要知识点包括：</p>
        <ol>
          <li>
            <p><strong>同源策略（Same-Origin Policy）</strong>：这是一种安全策略，限制了从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这有助于阻止恶意脚本对用户数据的无授权访问。</p>
          </li>
          <li>
            <p><strong>跨域请求</strong>：当一个请求从一个源发送到另一个源时，就会产生跨域请求。例如，如果你在 <code>http://example.com</code> 上的页面尝试从 <code>http://api.example.com</code> 获取数据，那么这就是一个跨域请求。</p>
          </li>
          <li>
            <p><strong>CORS</strong>：这是一个允许许多资源（例如字体、JavaScript 等）在额外的源请求的机制。它提供了一种安全的方式来允许一个网页的脚本从不同的源请求资源。</p>
          </li>
          <li>
            <p><strong>预检请求（Preflight Request）</strong>：对于可能对服务器数据产生副作用的 HTTP 请求类型（特别是某些类型的跨站请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求，从服务器获取允许的方法，然后才发起实际的 HTTP 请求。</p>
          </li>
          <li>
            <p><strong>CORS 头部</strong>：CORS 协议通过 HTTP 头部字段实现，包括 Origin，Access-Control-Allow-Origin，Access-Control-Allow-Credentials 等。</p>
          </li>
          <li>
            <p><strong>JSONP</strong>：这是一种早期解决跨域问题的方法，它利用了 <code>&lt;script&gt;</code> 标签的 src 属性没有同源限制的特性来发送请求。但是，JSONP 只能处理 GET 请求，而且安全性较差。</p>
          </li>
          <li>
            <p><strong>服务器代理</strong>：服务器没有同源策略的限制，因此可以作为中间人，接收前端的请求，然后转发给其他服务器，再将获取的响应返回给前端。</p>
          </li>
          <li>
            <p><strong>WebSockets</strong>：WebSockets 协议不受同源策略限制，因此可以用于跨域通信。</p>
          </li>
          <li>
            <p><strong>postMessage API</strong>：这是一种在不同源之间安全地传递数据的方法。</p>
          </li>
          <li>
            <p><strong>CORS 和 cookie</strong>：如果你想在跨域请求中发送/接收 cookies，你需要设置一些特殊的 CORS 头部。</p>
          </li>
        </ol>
        <h2 id="跨域处理">
          跨域处理
        </h2>
        <p>后端处理跨域请求的方法通常涉及设置 HTTP 响应头来允许来自不同源的前端代码进行请求。以下是后端处理跨域的一些常见方式：</p>
        <ol>
          <li>
            <p><strong>设置 CORS 响应头：</strong> 最直接的处理跨域的方式是在后端服务的响应中设置 CORS（Cross-Origin Resource Sharing）相关的 HTTP 头。以下是一些常用的 CORS 响应头：</p>
            <ul>
              <li><code>Access-Control-Allow-Origin</code>: 指定哪些网站可以进行跨域请求。例如，设置为<code>*</code>表示允许所有网站，或者指定具体的网站如<code>https://example.com</code>。</li>
              <li><code>Access-Control-Allow-Methods</code>: 指定允许的 HTTP 方法，如<code>GET, POST, PUT, DELETE</code>等。</li>
              <li><code>Access-Control-Allow-Headers</code>: 指定允许的 HTTP 头字段，如<code>Content-Type, Authorization</code>等。</li>
              <li><code>Access-Control-Allow-Credentials</code>: 指定是否允许携带证书（如 Cookies）。如果需要前端在请求中携带认证信息，如 Cookies，这个值需要设置为<code>true</code>。</li>
            </ul>
          </li>
          <li>
            <p><strong>JSONP（已过时）：</strong> JSONP 是一种老旧的技术，通常不推荐使用，因为它只支持 GET 请求，并且存在安全风险。如果使用，后端需要返回一个 JSONP 响应，通常是一个函数调用的 JavaScript 代码。</p>
          </li>
          <li>
            <p><strong>代理服务器：</strong> 后端可以部署一个代理服务器，如 Nginx 或 Node.js 服务器，来转发请求。代理服务器会接收前端的请求，然后将其转发到实际的后端服务，并将响应返回给前端。这样，前端就不会直接与目标服务器进行通信，从而绕过了浏览器的同源策略。</p>
          </li>
          <li>
            <p><strong>WebSockets：</strong> 如果使用 WebSockets 进行通信，后端需要支持 WebSocket 协议。WebSockets 不受同源策略限制，可以实现跨域通信。</p>
          </li>
          <li>
            <p><strong>配置服务器：</strong> 在一些服务器软件中，如 Apache 或 Nginx，可以直接通过配置文件来设置 CORS 策略，而无需修改应用程序代码。</p>
          </li>
          <li>
            <p><strong>中间件：</strong> 在使用诸如 Express.js 这样的 Node.js 框架时，可以使用中间件如<code>cors</code>包来简化 CORS 的设置。只需几行代码就可以为所有路由或特定路由启用 CORS。</p>
          </li>
        </ol>
        <p>这些方法中，CORS 是最常用且推荐的解决方案，因为它既安全又灵活。不同的后端语言和框架有不同的实现方式，但核心思想都是在 HTTP 响应中设置正确的 CORS 头部信息。</p>
      </div>
    </div>
  </div>
</template>
        
    <script setup lang="ts">
        import { onMounted, ref, Ref } from 'vue';
        import type { TabsPaneContext } from 'element-plus'
        import mdSidebar from '@/components/mdSidebar.vue';
    
        const activeName = ref('first')
    
        const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
        }
    
        // Define a type for navigation items
        type NavigationItem = {
        title: string;
        id: string;
        children: NavigationItem[];
        };
    
        // Define the type for the navigation ref
        const navigation: Ref<NavigationItem[]> = ref([]);
    
        onMounted(async () => {
        createNavigation();
        });
    
        const createNavigation = (): void => {
        const headers = Array.from(document.querySelectorAll('h2, h3')) as HTMLElement[];
        let currentH1: NavigationItem | null = null;
    
        headers.forEach(header => {
        const newItem: NavigationItem = {
        title: header.innerText,
        id: header.id,
        children: []
        };
    
        if (header.tagName === 'H2') {
        currentH1 = newItem;
        navigation.value.push(newItem);
        } else if (header.tagName === 'H3' && currentH1) {
        currentH1.children.push(newItem);
        }
        });
        };
    </script>
    <style scoped>
    @import url(@/styles/markdown.scss);
    @import url(@/styles/base.scss);
    </style>