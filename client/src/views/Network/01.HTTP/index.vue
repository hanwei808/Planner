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
        <h1 id="http">
          HTTP
        </h1>
        <p>HTTP（HyperText Transfer Protocol，超文本传输协议）是用于从 Web 服务器传输超文本到本地浏览器的传输协议。它是一个客户端-服务器模型，是互联网上数据通信的基础。以下是一些关于 HTTP 的基本知识点：</p>
        <ol>
          <li>
            <p><strong>基本概念</strong>：</p>
            <ul>
              <li><strong>无状态协议</strong>：HTTP 是一个无状态协议，意味着每个请求都是独立的，服务器不会记住之前的交互。</li>
              <li><strong>连接方式</strong>：HTTP/1.1 协议默认使用持久连接（Persistent Connection），而 HTTP/1.0 需要使用<code>Connection: keep-alive</code>头部来实现。</li>
            </ul>
          </li>
          <li>
            <p><strong>请求/响应模型</strong>：</p>
            <ul>
              <li><strong>客户端发起请求</strong>：客户端（通常是 Web 浏览器）向服务器发起一个 HTTP 请求。</li>
              <li><strong>服务器响应</strong>：服务器处理请求并返回一个 HTTP 响应。</li>
            </ul>
          </li>
          <li>
            <p><strong>HTTP 方法</strong>：</p>
            <ul>
              <li><strong>GET</strong>：请求指定的页面信息，并返回实体主体。</li>
              <li><strong>HEAD</strong>：类似于 GET 方法，但没有具体的内容，用于获取报头。</li>
              <li><strong>POST</strong>：向指定资源提交数据进行处理请求（例如提交表单或上传文件）。数据被包含在请求体中。</li>
              <li><strong>PUT</strong>：从客户端向服务器传送的数据取代指定的文档的内容。</li>
              <li><strong>DELETE</strong>：请求服务器删除指定的页面。</li>
              <li><strong>PATCH</strong>：对资源进行部分修改。</li>
              <li><strong>OPTIONS</strong>：允许客户端查看服务器的性能。</li>
            </ul>
          </li>
          <li>
            <p><strong>状态码</strong>：</p>
            <ul>
              <li><strong>1xx</strong>：信息响应，表示请求已被接受，继续处理。</li>
              <li><strong>2xx</strong>：成功，表示请求已被成功接收、理解、接受。</li>
              <li><strong>3xx</strong>：重定向，要完成请求必须进行更进一步的操作。</li>
              <li><strong>4xx</strong>：客户端错误，请求包含语法错误或无法完成请求。</li>
              <li><strong>5xx</strong>：服务器错误，服务器在处理请求的过程中发生了错误。</li>
            </ul>
          </li>
          <li>
            <p><strong>HTTP 头部</strong>：</p>
            <ul>
              <li><strong>通用头部</strong>：例如<code>Connection</code>, <code>Cache-Control</code>等。</li>
              <li><strong>请求头部</strong>：例如<code>User-Agent</code>, <code>Accept</code>, <code>Host</code>等。</li>
              <li><strong>响应头部</strong>：例如<code>Server</code>, <code>Set-Cookie</code>等。</li>
              <li><strong>实体头部</strong>：例如<code>Content-Type</code>, <code>Content-Length</code>等。</li>
            </ul>
          </li>
          <li>
            <p><strong>安全性</strong>：</p>
            <ul>
              <li><strong>HTTPS</strong>：HTTP 的安全版本，通过 SSL/TLS 进行加密，保护数据传输的安全性。</li>
            </ul>
          </li>
          <li>
            <p><strong>HTTP/2</strong>：</p>
            <ul>
              <li>引入了二进制帧层，多路复用，头部压缩等新特性，以提高性能。</li>
            </ul>
          </li>
          <li>
            <p><strong>会话管理</strong>：</p>
            <ul>
              <li>由于 HTTP 无状态，通常使用 Cookies、Session、Token 等技术来管理用户状态。</li>
            </ul>
          </li>
          <li>
            <p><strong>缓存</strong>：</p>
            <ul>
              <li>HTTP 缓存可以减少延迟和网络流量，提高加载速度。通过使用<code>ETag</code>, <code>If-Modified-Since</code>等头部实现。</li>
            </ul>
          </li>
          <li>
            <p><strong>RESTful API</strong>：</p>
            <ul>
              <li>基于 HTTP 的 RESTful 架构风格用于设计网络应用程序，以提供高性能、可靠性和可伸缩性。</li>
            </ul>
          </li>
        </ol>
        <p>了解 HTTP 协议对于 Web 开发者来说非常重要，因为它是大多数 Web 应用程序通信的基础。随着技术的发展，HTTP/3（基于 QUIC 协议）等新技术也在逐渐被采纳，以进一步提高 Web 通信的效率和安全性。</p>
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