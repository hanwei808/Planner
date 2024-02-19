<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1 id="节流与防抖">
        节流与防抖
      </h1>
      <h2 id="节流定期轮询">
        节流（定期轮询）
      </h2>
      <h3 id="是什么">
        是什么
      </h3>
      <p>在 JavaScript 中，"节流"（Throttling）是一种性能优化技术，用于控制函数执行的频率，确保函数在指定时间内只执行一次。这种技术通常用于处理持续触发的事件，比如窗口的 resize、scroll 滚动事件或者是 mousemove 鼠标移动事件。</p>
      <p>节流的核心思想是在一个时间段内无论触发多少次事件，只执行一次事件处理函数。这样做可以减少事件处理函数的调用次数，避免因频繁处理事件而导致的性能问题。</p>
      <p>下面是一个简单的节流函数的实现示例：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> inThrottle<span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token keyword keyword-const">const</span> context <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>inThrottle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      func<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      inThrottle <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">(</span>inThrottle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用方式</span>
<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"resize"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Window resized"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在这个例子中，<code>throttle</code> 函数接受两个参数：<code>func</code> 是需要被节流的函数，<code>limit</code> 是时间阈值。这个节流函数使用了一个闭包内的变量 <code>inThrottle</code> 来记录函数是否已经被触发。如果 <code>inThrottle</code> 是 <code>false</code>，则允许执行函数并设置 <code>inThrottle</code> 为 <code>true</code>。然后通过 <code>setTimeout</code> 在指定的 <code>limit</code> 时间后将 <code>inThrottle</code> 重置为 <code>false</code>，这样函数就可以在下一个时间阈值后再次被触发。</p>
      <p>这种实现方式保证了即使在 <code>limit</code> 时间内触发多次事件，<code>func</code> 也只会被执行一次。这对于性能优化非常有帮助，特别是在处理一些高频事件时。</p>
      <h3 id="知识点">
        知识点
      </h3>
      <p>JavaScript 中的节流（Throttling）涉及到以下一些关键知识点：</p>
      <ol>
        <li>
          <p>
            <strong>函数节流的目的</strong>：<br>
            节流的主要目的是为了限制函数在一定时间内的调用频率，从而防止函数在短时间内被高频调用，这通常用于性能优化。
          </p>
        </li>
        <li>
          <p>
            <strong>时间阈值</strong>：<br>
            节流函数通常会有一个时间阈值，即在这段时间内，无论触发了多少次事件，事件处理函数只会执行一次。
          </p>
        </li>
        <li>
          <p>
            <strong>闭包</strong>：<br>
            在实现节流函数时，通常会用到闭包来记住上一次执行函数的时间或者是否已经设置了定时器。
          </p>
        </li>
        <li>
          <p>
            <strong>定时器</strong>：<br>
            使用<code>setTimeout</code>或<code>setInterval</code>来实现等待一段时间后的函数执行。
          </p>
        </li>
        <li>
          <p>
            <strong>函数的上下文（Context）和参数（Arguments）</strong>：<br>
            在节流函数中，我们需要保留原函数的上下文（<code>this</code>）和参数（<code>arguments</code>），以便在适当的时候调用。
          </p>
        </li>
        <li>
          <p>
            <strong>立即执行选项</strong>：<br>
            有些实现支持立即执行选项，即在第一次触发事件时立即执行函数，然后在之后的时间阈值内不再执行。
          </p>
        </li>
        <li>
          <p>
            <strong>尾调用优化</strong>：<br>
            有些节流函数的实现会在时间阈值结束时执行一次函数调用，以保证最后一次触发的事件也能得到处理。
          </p>
        </li>
        <li>
          <p>
            <strong>取消节流</strong>：<br>
            提供一个取消功能，可以在需要的时候停止节流控制。
          </p>
        </li>
        <li>
          <p>
            <strong>事件处理与性能</strong>：<br>
            理解浏览器事件循环和性能考量，知道何时应该使用节流来避免不必要的计算和浏览器重绘。
          </p>
        </li>
        <li>
          <p>
            <strong>与防抖（Debouncing）的比较</strong>：<br>
            防抖是另一种限制函数执行频率的技术，它与节流的区别在于，防抖是在事件停止触发后的一段时间内才执行一次，而节流是按照固定的时间间隔执行。
          </p>
        </li>
      </ol>
      <p>理解这些概念有助于更好地应用节流技术，并在适当的场景下做出合理的性能优化决策。</p>
      <h3 id="使用场景">
        使用场景
      </h3>
      <p>节流（Throttling）在 JavaScript 中的应用非常广泛，尤其是在处理那些会频繁触发的事件时。以下是一些常见的使用节流的场景和示例：</p>
      <ol>
        <li>
          <p>
            <strong>窗口调整（Window resize）</strong>：<br>
            当用户调整浏览器窗口大小时，resize 事件会被频繁触发。使用节流可以防止过多的计算和 DOM 操作，从而提高性能。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"resize"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Window resized!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>页面滚动（Scroll）</strong>：<br>
            滚动事件可以非常频繁，特别是在用户快速滚动页面时。节流可以用来限制例如懒加载图片或者是无限滚动加载更多内容的函数调用频率。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"scroll"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Scrolled!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>鼠标移动（Mousemove）</strong>：<br>
            鼠标移动是另一个可以非常高频触发的事件。如果你有一个随着鼠标移动而更新的功能（比如一个实时的鼠标位置提示器），节流可以帮助减少更新频率。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"mousemove"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Mouse moved to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token property-access">clientX</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token property-access">clientY</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>数据输入（Data input）</strong>：<br>
            当用户在输入数据时（如在搜索框中输入），你可能不希望在每个键盘敲击后都去执行一个操作（如实时搜索）。节流可以限制这些操作的触发频率。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"search-box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"input"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Input event triggered with value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>游戏中的按键响应（Game key presses）</strong>：<br>
            在游戏中，你可能需要限制玩家的某些动作频率，例如射击或跳跃，以避免过快的重复动作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"keydown"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">code</span> <span class="token operator">===</span> <span class="token string">"Space"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Shoot!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>API 调用（API calls）</strong>：<br>
            如果你的应用需要根据用户的输入或其他行为调用后端 API，节流可以帮助你减少不必要的网络请求。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 假设有一个函数用于发送搜索请求</span>
<span class="token keyword keyword-function">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 发送搜索请求到服务器</span>
<span class="token punctuation">}</span>

<span class="token comment">// 节流搜索请求</span>
<span class="token keyword keyword-const">const</span> throttledSearch <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>search<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

input<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">throttledSearch</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>在这些示例中，<code>throttle</code> 函数将确保即使事件触发得非常频繁，事件处理函数也只会按照指定的频率执行，从而帮助避免性能问题，如界面卡顿或过度的 CPU 使用。</p>
      <p>继续补充节流的使用场景：</p>
      <ol start="7">
        <li>
          <p>
            <strong>监控用户活动</strong>：<br>
            在需要监控用户活动并在特定频率报告这些活动时，节流可以确保报告的频率保持在可控范围内。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"mousemove"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 更新服务器上的用户活动状态</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>性能跟踪（Performance tracking）</strong>：<br>
            如果你正在记录页面性能数据，如 FPS（每秒帧数），你可能不需要在每一帧都进行计算。节流可以帮助你降低数据收集的频率。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token function">updatePerformance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 计算并记录性能数据</span>
  <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">requestAnimationFrame</span><span class="token punctuation">(</span>updatePerformance<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用节流来限制实际的记录频率</span>
<span class="token keyword keyword-const">const</span> throttledRecordPerformance <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 记录性能数据的函数</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>实时搜索（Autocomplete）</strong>：<br>
            当用户在搜索框中键入以获取实时建议时，你不想为每个键击都发送一个请求。节流可以减少请求的数量，只在用户暂停或减慢输入时发送请求。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> autocomplete <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"autocomplete-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
autocomplete<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"keyup"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发起自动完成搜索请求的函数</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>图表或图形的实时更新</strong>：<br>
            如果你有一个图表或图形界面，它需要根据用户的输入或其他实时数据进行更新，使用节流可以防止图表刷新得过于频繁，导致用户界面变得卡顿。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> slider <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"data-slider"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
slider<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"input"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 更新图表显示的函数</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>节流按钮点击</strong>：<br>
            在某些情况下，你可能需要防止用户快速重复点击按钮，例如提交表单。节流可以帮助限制按钮点击的频率。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> submitButton <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"submit-button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
submitButton<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"click"</span><span class="token punctuation">,</span>
  <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 提交表单的逻辑</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>节流网络状态检查</strong>：<br>
            如果你的应用需要定期检查网络状态或者进行心跳检测，节流可以帮助你控制检查的间隔。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> throttledCheckNetworkStatus <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 检查网络状态的逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定期执行网络状态检查</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span>throttledCheckNetworkStatus<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>在所有这些场景中，节流的关键是找到一个平衡点，即在保证性能的同时，还能提供及时的用户反馈或所需的实时功能。正确使用节流可以显著提升应用的响应性和性能。</p>
      <h2 id="防抖间隔单次">
        防抖（间隔单次）
      </h2>
      <h3 id="是什么-1">
        是什么
      </h3>
      <p>防抖（Debouncing）是一种在前端开发中常用的技术，用于确保一段时间内不管事件触发了多少次，只执行一次处理函数。这主要应用于性能优化的场景，比如输入框连续输入时的验证、搜索建议（autocomplete）、窗口大小改变（resize）、滚动（scroll）等。</p>
      <p>在没有防抖的情况下，如果用户频繁触发事件，如连续快速地点击按钮，那么事件处理函数也会被频繁调用，这可能导致性能问题。防抖通过延迟执行来解决这个问题：它会等待一段时间后没有再次触发事件时，才执行一次处理函数。</p>
      <p>这是一个 JavaScript 中实现防抖功能的基本示例：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> timeout<span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token function">executedFunction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">func</span><span class="token punctuation">(</span><span class="token spread operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用防抖函数</span>
<span class="token keyword keyword-const">const</span> debouncedFunction <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Function executed after 200ms of inactivity!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> debouncedFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在这个例子中，<code>debounce</code> 函数接受一个函数 <code>func</code> 和一个等待时间 <code>wait</code> 作为参数。它返回一个新的函数，这个新函数会在事件触发后等待指定的时间 <code>wait</code>，如果在这段时间内没有再次触发事件，那么原函数 <code>func</code> 就会被执行。如果在等待时间内事件再次触发，那么计时器会被重置，直到事件停止触发后的 <code>wait</code> 毫秒，函数才会执行。</p>
      <p>这样，无论事件触发了多少次，只要每次触发的间隔小于 <code>wait</code> 指定的时间，原函数 <code>func</code> 只会在最后一次事件触发后的 <code>wait</code> 毫秒被执行一次。</p>
      <h3 id="知识点-1">
        知识点
      </h3>
      <p>防抖（Debounce）作为一种在 Web 开发中常用的技术，旨在提高应用程序的性能和用户体验。以下是与防抖相关的一些关键知识点：</p>
      <ol>
        <li>
          <p>
            <strong>概念理解</strong>:<br>
            防抖是一种控制函数执行频率的技术，确保目标函数在一系列连续的函数调用中只被调用一次，通常在最后一次调用后的一段时间内执行。
          </p>
        </li>
        <li>
          <p>
            <strong>实现机制</strong>:<br>
            防抖通常通过设置一个定时器实现，当事件被触发时，延迟执行目标函数。如果在延迟期间事件再次被触发，则重新开始计时。
          </p>
        </li>
        <li>
          <p><strong>应用场景</strong>:</p>
          <ul>
            <li>输入框实时搜索建议（如用户停止输入后才发送请求）</li>
            <li>窗口大小调整（resize）</li>
            <li>按钮快速连续点击</li>
            <li>表单验证</li>
            <li>滚动事件处理（scroll）</li>
          </ul>
        </li>
        <li>
          <p>
            <strong>立即执行选项</strong>:<br>
            防抖函数通常提供两种模式：非立即执行和立即执行。
          </p>
          <ul>
            <li>非立即执行：事件触发后，等待指定时间后执行函数。</li>
            <li>立即执行：事件触发后立即执行函数，然后无视接下来的事件直到等待时间过去。</li>
          </ul>
        </li>
        <li>
          <p>
            <strong>参数传递</strong>:<br>
            防抖函数应能够传递原始事件处理函数所需的参数。
          </p>
        </li>
        <li>
          <p>
            <strong>返回值</strong>:<br>
            防抖函数可以返回原始函数的返回值，但由于使用了定时器，返回值通常是不可用的，除非使用立即执行模式，并且是第一次触发。
          </p>
        </li>
        <li>
          <p>
            <strong>取消功能</strong>:<br>
            有时你可能需要取消防抖函数的延迟调用，因此实现防抖时通常会提供一个取消方法。
          </p>
        </li>
        <li>
          <p>
            <strong>边缘情况处理</strong>:<br>
            考虑到定时器的生命周期和内存管理，确保在组件卸载或页面关闭时清除定时器。
          </p>
        </li>
        <li>
          <p>
            <strong>第三方库</strong>:<br>
            在许多项目中，开发人员可能会使用 Lodash 或 Underscore 等第三方库，这些库提供了现成的防抖函数。
          </p>
        </li>
        <li>
          <p>
            <strong>与节流（Throttle）的比较</strong>:<br>
            节流与防抖类似，但是节流保证在指定时间内只触发一次函数，无论事件触发了多少次。
          </p>
        </li>
      </ol>
      <p>下面是一个带有取消和立即执行选项的防抖函数示例：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-var">var</span> timeout<span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-var">var</span> context <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">,</span>
      args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token keyword keyword-var">var</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timeout <span class="token operator">=</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">;</span>
      <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>immediate<span class="token punctuation">)</span> func<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-var">var</span> callNow <span class="token operator">=</span> immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timeout<span class="token punctuation">;</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> func<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 返回的防抖函数也包含一个取消方法</span>
  debounced<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">cancel</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeout <span class="token operator">=</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-return">return</span> debounced<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>理解这些知识点可以帮助你更有效地使用防抖技术，并在合适的场合应用它们以提升应用程序的性能和用户体验。</p>
      <h3 id="使用场景-1">
        使用场景
      </h3>
      <p>防抖（Debounce）技术在前端开发中有许多应用场景，特别是在处理那些基于用户或系统活动频繁触发的事件时。以下是一些常见的使用场景和示例：</p>
      <ol>
        <li>
          <p>
            <strong>搜索框输入建议（Autocomplete）</strong>:<br>
            当用户在搜索框中输入文本时，你可能希望在用户停止输入一段时间后再发送请求到服务器以获取建议列表。这样可以减少不必要的请求量。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> searchInput <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"search-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
searchInput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"input"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发送请求获取搜索建议</span>
    <span class="token function">fetchSuggestions</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 500毫秒内没有新的输入才触发</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>窗口大小调整（Window Resize）</strong>:<br>
            当用户调整浏览器窗口大小时，可能需要重新计算布局或执行其他操作。由于<code>resize</code>事件可能会连续快速触发，使用防抖可以在调整结束后执行一次。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"resize"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Window resize event debounced!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里执行重计算布局的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>按钮防重复点击</strong>:<br>
            防止用户快速连续点击按钮导致函数多次执行，例如提交表单按钮。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> submitButton <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"submit-button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
submitButton<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"click"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span>
    <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Form submitted!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 这里执行提交表单的代码</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token boolean">true</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第三个参数为true表示立即执行</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>表单验证</strong>:<br>
            当用户填写表单项时，可以在用户停止输入后进行数据验证，而不是每输入一个字符就验证一次。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> emailInput <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"email-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
emailInput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"input"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 验证邮箱格式</span>
    <span class="token function">validateEmail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>滚动事件处理（Scroll）</strong>:<br>
            在用户滚动页面时，可能希望执行一些操作，如懒加载图片或无限滚动加载内容。防抖可以确保这些操作不会过于频繁地执行。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"scroll"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Scroll event debounced!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里执行懒加载图片或加载新内容的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>在这些场景中，防抖函数能够帮助你控制函数的执行频率，避免因过多的计算或请求而导致的性能问题。通过适当的延迟，在保证用户体验的同时提升应用性能。</p>
      <p>当然，除了上述提到的场景之外，防抖还可以应用于其他多种场景。以下是更多的示例：</p>
      <ol start="6">
        <li>
          <p>
            <strong>实时数据保存</strong>:<br>
            如果你有一个在线文档编辑器，用户在编辑时，你可能希望在用户停止输入后自动保存文档，而不是每次按键都尝试保存。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> editor <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"document-editor"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
editor<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"keyup"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Saving data..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里执行保存文档的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用户停止输入2秒后自动保存</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>游戏中的按键处理</strong>:<br>
            在游戏中，有时候你会希望某些按键响应不要太敏感，例如，一个用于发射子弹的按钮，你可能希望用户不能够通过极快的点击来连续发射。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> fireButton <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"fire-button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fireButton<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"click"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Fire!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里执行发射子弹的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 300毫秒内的连续点击不会连续发射</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>财务应用中的数值计算</strong>:<br>
            如果你正在开发一个财务应用，用户输入的每个数值可能都需要进行复杂的计算（如即时税务计算或货币转换），使用防抖可以减少计算次数。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> amountInput <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"amount-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
amountInput<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"input"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Calculating taxes..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里执行计算的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用户停止输入600毫秒后执行计算</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>音乐或视频应用中的音量控制</strong>:<br>
            用户调整音量时，你可能不希望每一个微小的变化都立即生效，特别是如果这涉及到复杂的后台处理（如实时音频效果应用）。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> volumeSlider <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"volume-slider"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
volumeSlider<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"input"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Adjusting volume..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里执行调整音量的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用户停止调整200毫秒后调整音量</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>图形用户界面的动态布局调整</strong>:<br>
            在图形编辑器中，用户可能会调整组件的大小或位置。防抖可以用来在用户完成调整后再更新布局。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> resizeHandle <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"resize-handle"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resizeHandle<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">"drag"</span><span class="token punctuation">,</span>
  <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Updating layout..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里执行更新布局的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用户停止拖动150毫秒后更新布局</span>
</code></pre>
        </li>
      </ol>
      <p>在实际的开发工作中，你可能会遇到各种需要防抖处理的情况，关键是要识别出哪些操作是由频繁的事件触发，但实际上只需要偶尔响应的。通过防抖，你可以提高应用程序的响应性和性能，同时避免不必要的处理开销。</p>
    </div>
    <mdSidebar :navigation="navigation" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import mdSidebar from '@/components/mdSidebar.vue';

// Define a type for navigation items
type NavigationItem = {
  title: string;
  id: string;
  children: NavigationItem[];
};

// Define the type for the navigation ref
const navigation: Ref<NavigationItem[]> = ref([]);

onMounted(() => {
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
.article-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}
@media screen and (min-width: 600px) {
  .article-container {
    padding-right: 50px;
  }
  .md-sidebar-expand {
    padding-right: 200px;
  }
}
</style>