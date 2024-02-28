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
        <h1 id="攻击与防范">
          攻击与防范
        </h1>
        <h2 id="攻击方式">
          攻击方式
        </h2>
        <p>网络安全中常见的攻击方式有很多种，以下是一些常见的例子：</p>
        <ol>
          <li>
            <p><strong>SQL 注入攻击</strong>：攻击者通过在用户输入中嵌入恶意的 SQL 代码，来执行非法的数据库查询或命令。</p>
          </li>
          <li>
            <p><strong>跨站脚本攻击（XSS）</strong>：攻击者通过在网页中嵌入恶意的 JavaScript 代码，当其他用户访问这个网页时，这些代码会在用户的浏览器中执行。</p>
          </li>
          <li>
            <p><strong>跨站请求伪造（CSRF）</strong>：攻击者诱导用户点击链接或加载页面，以此在用户不知情的情况下以用户的身份执行非法请求。</p>
          </li>
          <li>
            <p><strong>DDoS 攻击（分布式拒绝服务攻击）</strong>：攻击者通过控制大量的计算机或其他设备，向目标服务器发送大量的请求，从而使服务器超载无法正常提供服务。</p>
          </li>
          <li>
            <p><strong>会话劫持</strong>：攻击者通过窃取或伪造用户的会话标识，来冒充用户进行非法操作。</p>
          </li>
          <li>
            <p><strong>点击劫持</strong>：攻击者通过隐藏链接或按钮，诱导用户点击，从而执行非法操作。</p>
          </li>
          <li>
            <p><strong>目录遍历攻击</strong>：攻击者尝试访问网站服务器上的非公开文件和目录。</p>
          </li>
          <li>
            <p><strong>社会工程学攻击</strong>：攻击者通过欺骗、诱导等手段，让用户自愿（但通常是无意识地）提供敏感信息，或执行安全性较差的操作。</p>
          </li>
        </ol>
        <p>这些只是网络安全攻击的一部分，实际上还有很多其他类型的攻击方式。为了防止这些攻击，需要从多个方面进行防护，包括但不限于：使用安全的编程和设计实践、定期更新和打补丁、使用安全配置、进行安全审计和监控等。</p>
        <h2 id="防范方式">
          防范方式
        </h2>
        <p>对于上述的各种网络攻击，有一些常见的防范方式：</p>
        <ol>
          <li>
            <p><strong>SQL 注入攻击</strong>：使用预编译语句（prepared statements）或参数化查询，对所有用户输入进行严格的验证和清理，避免直接在 SQL 语句中拼接用户输入。</p>
          </li>
          <li>
            <p><strong>跨站脚本攻击（XSS）</strong>：对所有用户输入进行严格的验证和清理，使用适当的字符转义或编码，避免在 HTML 中直接插入用户输入。对于用户上传的内容，应当使用沙箱或其他隔离机制。</p>
          </li>
          <li>
            <p><strong>跨站请求伪造（CSRF）</strong>：使用 CSRF 令牌，验证每个可能改变服务器状态的请求。避免在 GET 请求中执行有副作用的操作。</p>
          </li>
          <li>
            <p><strong>DDoS 攻击（分布式拒绝服务攻击）</strong>：使用防 DDoS 服务，限制每个 IP 地址的请求频率，使用负载均衡和冗余服务器。</p>
          </li>
          <li>
            <p><strong>会话劫持</strong>：使用 HTTPS，避免在不安全的网络中传输会话标识，定期更换会话标识。</p>
          </li>
          <li>
            <p><strong>点击劫持</strong>：使用 X-Frame-Options 或 Content Security Policy（CSP）防止网页被嵌入到其他网站的 iframe 中。</p>
          </li>
          <li>
            <p><strong>目录遍历攻击</strong>：限制用户对文件系统的访问权限，避免直接使用用户输入来构造文件路径。</p>
          </li>
          <li>
            <p><strong>社会工程学攻击</strong>：进行安全培训，提高用户的安全意识，使用二次验证。</p>
          </li>
        </ol>
        <p>在前端开发中，可以采取以下一些策略来增加安全性：</p>
        <ol>
          <li>
            <p><strong>输入验证</strong>：对所有用户输入进行严格的验证，避免在 HTML 中直接插入用户输入，防止跨站脚本攻击（XSS）。</p>
          </li>
          <li>
            <p><strong>输出编码</strong>：在插入用户输入到 HTML、CSS、JavaScript、URL 等地方之前，应该对其进行适当的字符转义或编码。</p>
          </li>
          <li>
            <p><strong>使用 HTTPS</strong>：HTTPS 可以保护用户数据的隐私和完整性，防止中间人攻击和会话劫持。</p>
          </li>
          <li>
            <p><strong>使用 Content Security Policy（CSP）</strong>：CSP 可以限制浏览器只加载和执行来自特定来源的内容，防止跨站脚本攻击（XSS）。</p>
          </li>
          <li>
            <p><strong>使用 X-Frame-Options</strong>：X-Frame-Options 可以防止网页被嵌入到其他网站的 iframe 中，防止点击劫持。</p>
          </li>
          <li>
            <p><strong>使用 CSRF 令牌</strong>：在每个可能改变服务器状态的请求中包含一个 CSRF 令牌，防止跨站请求伪造（CSRF）。</p>
          </li>
          <li>
            <p><strong>使用 SameSite Cookie 属性</strong>：SameSite 属性可以防止 Cookie 在跨站请求中被发送，防止 CSRF 和一些类型的信息泄露。</p>
          </li>
          <li>
            <p><strong>使用 HTTP Only Cookie 属性</strong>：HTTP Only 属性可以防止 JavaScript 访问 Cookie，防止 XSS 攻击窃取 Cookie。</p>
          </li>
          <li>
            <p><strong>使用安全的第三方库和框架</strong>：一些第三方库和框架已经包含了对常见攻击的防护，使用这些库和框架可以减少自己编写安全代码的工作量。</p>
          </li>
        </ol>
        <p>这些策略并不能保证 100%的安全，但可以大大提高攻击的难度，降低被攻击的风险。除了这些技术措施，还应该定期进行安全审计，及时发现和修复安全漏洞。</p>
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