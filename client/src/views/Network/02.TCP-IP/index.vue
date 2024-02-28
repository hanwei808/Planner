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
        <h1 id="tcpip">
          TCP/IP
        </h1>
        <h2 id="是什么">
          是什么
        </h2>
        <p>TCP/IP 是网络通信的基本协议，也是互联网的基础。它由两个主要的协议组成：传输控制协议 (TCP) 和互联网协议 (IP)。</p>
        <ol>
          <li>
            <p><strong>传输控制协议 (TCP)</strong>：TCP 是一种面向连接的协议，它提供了一种可靠的、按顺序的字节流服务。在 TCP 中，发送方和接收方在数据传输开始之前必须建立一个连接。TCP 还提供了错误检测和修复的机制，如果数据包在传输过程中丢失或损坏，TCP 将重新发送数据包，确保数据的完整性和可靠性。</p>
          </li>
          <li>
            <p><strong>互联网协议 (IP)</strong>：IP 是一种无连接的协议，它负责将数据包从源地址发送到目标地址。IP 协议并不保证数据包的顺序或完整性，这些功能由 TCP 提供。IP 通过 IP 地址来标识网络上的每一个设备。</p>
          </li>
        </ol>
        <p>TCP/IP 协议族包含了更多的协议，例如 HTTP（用于网页传输）、SMTP（用于电子邮件传输）、FTP（用于文件传输）等等，这些都是在 TCP/IP 的基础上建立的。</p>
        <h2 id="tcpip-协议">
          TCP/IP 协议
        </h2>
        <p>TCP/IP（Transmission Control Protocol/Internet Protocol）是一个协议族，是互联网的基础，定义了电子设备（如计算机）如何在网络中发送数据。"TCP/IP"这个名字来自于两个重要的协议：传输控制协议（TCP）和互联网协议（IP），尽管还有许多其他协议也包含在 TCP/IP 协议族中。</p>
        <ol>
          <li>
            <p><strong>互联网协议（IP）</strong>: IP 协议负责将数据包发送到正确的地址。每台连接到互联网的计算机都有一个或多个 IP 地址。当数据被发送或接收时，数据被分割成小的数据包，并附上发送者和接收者的 IP 地址。</p>
          </li>
          <li>
            <p><strong>传输控制协议（TCP）</strong>: TCP 协议负责确保数据包准确无误地从源头传输到目的地。如果数据包在传输过程中丢失或损坏，TCP 协议会要求重发数据包。这就是为什么 TCP 被称为一个“可靠”的协议。</p>
          </li>
        </ol>
        <p>TCP/IP 模型通常被分为四个层次：</p>
        <ol>
          <li>
            <p><strong>应用层</strong>: 这一层负责处理特定的应用程序细节。各种应用级协议，如 HTTP（网页浏览）、SMTP（电子邮件）、FTP（文件传输）等，都在这一层工作。</p>
          </li>
          <li>
            <p><strong>传输层</strong>: 这一层负责提供端到端的通信服务。传输控制协议（TCP）和用户数据报协议（UDP）就在这一层。TCP 提供了一种可靠的、按顺序的字节流服务，而 UDP 提供的是一种无连接的、不可靠的数据传输服务。</p>
          </li>
          <li>
            <p><strong>网络层</strong>: 这一层负责数据包的传输和路由，包括数据包的发送和接收。互联网协议（IP）就处在这一层，它负责将数据分解为小的数据包，并将这些数据包从发送端路由到接收端。</p>
          </li>
          <li>
            <p><strong>网络接口层</strong>: 这一层负责处理所有硬件相关的物理接口细节，包括电气、机械和功能规范，以及介质访问控制规范。例如，以太网 (Ethernet)、Wi-Fi 和 DSL 等协议就在这一层工作。</p>
          </li>
        </ol>
        <p>在这个模型中，每一层都只与其直接的上层和下层交互，这样可以使各层独立地进行开发和改进，而不影响其他层。</p>
        <h2 id="三次握手">
          三次握手
        </h2>
        <p>在 TCP/IP 协议中，"三次握手"是建立一个 TCP 连接的过程，它的目的是在客户端和服务器之间创建一个可靠的连接。这个过程通常是这样的：</p>
        <ol>
          <li>
            <p><strong>SYN</strong>: 客户端发送一个 SYN（synchronize）包给服务器，请求建立一个连接。这个包中包含了客户端的初始序列号。这个步骤标志着客户端尝试打开一个到服务器的连接。</p>
          </li>
          <li>
            <p><strong>SYN-ACK</strong>: 服务器接收到 SYN 包，并返回一个 SYN-ACK（synchronize-acknowledge）包。这个包中包含了服务器的初始序列号和对客户端初始序列号的确认。</p>
          </li>
          <li>
            <p><strong>ACK</strong>: 客户端接收到 SYN-ACK 包，并发送一个 ACK（acknowledge）包给服务器，确认了服务器的初始序列号。这个步骤标志着客户端接收到了服务器的确认，连接已经建立。</p>
          </li>
        </ol>
        <p>这个过程的重要性在于，它可以确保双方都有能力发送和接收数据。只有当双方都确认了对方的能力，连接才会建立。这就是为什么需要三次握手。</p>
        <p>此外，三次握手还有一个重要的安全作用。由于每次连接都需要三次握手，这就大大增加了攻击者建立伪造连接的难度。攻击者需要在网络中截获并伪造合法用户的 SYN 和 ACK 包，这在实践中是非常困难的。</p>
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