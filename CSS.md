# CSS 样式

## CSS 样式优化

CSS 样式优化主要有以下几个方面：

1. **选择器优化**：

> 尽量避免使用深层次的或复杂的 CSS 选择器，因为它们会增加 CSS 解析的复杂性和时间。使用类选择器（.class）代替标签选择器，因为类选择器的性能更好。

- 不好的实践：`body div header ul li a {...}`（过于具体，解析复杂）
- 好的实践：`.navigation-link {...}`（简单的类选择器，更高效）

2. **减少冗余代码**：

> 避免重复的样式声明，如果有多个元素共享相同的样式，可以创建一个公共类来应用这些样式。

- 不好的实践：分别给每个元素设置相同的样式
  ```css
  .header {
    color: blue;
    font-size: 14px;
  }
  .footer {
    color: blue;
    font-size: 14px;
  }
  ```
- 好的实践：创建一个公共的类
  ```css
  .common-style {
    color: blue;
    font-size: 14px;
  }
  ```

3. **使用 CSS 预处理器**（Sass 示例）：

> 如 Sass、Less 等，它们可以帮助你编写更清晰、更易于维护的代码，同时也支持变量、混合、函数等特性，可以大大减少代码的重复。

```scss
$primary-color: #333;
.header {
  color: $primary-color;
}
```

4. **使用 CSS 压缩工具**：原始 CSS 可能是这样的：

> 这些工具可以删除 CSS 代码中的空白、注释、不必要的字符等，从而减小文件大小，提高加载速度。

```css
body {
  color: #333;
  background-color: #fff;
}
```

使用压缩工具后，CSS 可能变为：

```css
body {
  color: #333;
  background-color: #fff;
}
```

5. **使用 CSS3 代替 JavaScript**：例如，使用 CSS3 的`transition`实现动画效果，而不是使用 JavaScript：

> CSS3 提供了许多新的特性，如过渡、动画等，可以用来替代 JavaScript 实现的一些效果，这样可以减少 JavaScript 的使用，提高性能。

```css
.box:hover {
  transition: all 0.5s ease;
  transform: scale(1.1);
}
```

6. **使用媒体查询和响应式设计**：

> 这样可以确保你的网站在不同的设备和屏幕尺寸上都能正常工作，同时也可以减少不必要的 CSS 代码。

```css
@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}
```

7. **利用浏览器缓存**：这涉及到服务器配置，例如在 Apache 服务器上，可以在.htaccess 文件中添加如下代码：

> 通过设置 HTTP 头部的 Expires 或 Cache-Control，可以使浏览器缓存 CSS 文件，这样当用户再次访问你的网站时，就不需要再次下载这些文件。

```
<filesMatch ".(css)$">
    Header set Cache-Control "max-age=31536000, public"
</filesMatch>
```

8. **使用 CDN**：例如，你可以从 Google 的 CDN 加载 jQuery 库：

> 将你的 CSS 文件放在内容分发网络（CDN）上，可以减少文件的加载时间，因为 CDN 会将文件存储在离用户最近的服务器上。

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

9. **使用 CSS 模块化**：例如，将通用的样式、布局样式、组件样式分别放在不同的 CSS 文件中。

> 将 CSS 代码分割成多个小的、可重用的模块，这样可以使代码更易于维护和测试，同时也可以减少代码的复杂性。

10. **尽量避免使用!important**：

> 过度使用!important 可能会使 CSS 规则变得难以理解和维护，并可能导致一些意想不到的样式问题。尽量通过提高选择器的优先级来覆盖样式，而不是使用!important。

    - 不好的实践：`.header {color: blue !important;}`
    - 好的实践：`.site-header {color: blue;}` （提高选择器的优先级来覆盖样式）

以上就是这些 CSS 优化技巧的一些具体示例，希望能帮助你更好地理解。

## SCSS

SCSS（Sassy CSS）是 CSS 预处理器 Sass 的一种语法格式。它使用类似于 CSS 的语法，同时提供了许多强大的特性，如变量、嵌套、混合（mixins）、继承、函数等。以下是一些基本的 SCSS 用法：

1. **变量**：变量可以用于存储颜色、字体堆栈、长度等值，这样你可以在样式表中多次重用这些值。

   ```scss
   $font-stack: Helvetica, sans-serif;
   $primary-color: #333;

   body {
     font: 100% $font-stack;
     color: $primary-color;
   }
   ```

2. **嵌套**：SCSS 允许嵌套 CSS 规则，这可以减少代码的重复和冗余，同时使结构更清晰。

   ```scss
   .container {
     width: 100%;

     .header {
       background-color: blue;
     }

     .footer {
       background-color: green;
     }
   }
   ```

3. **混合（Mixins）**：混合可以用于定义可重用的样式块，然后在需要的地方包含（@include）这些样式块。

   ```scss
   @mixin border-radius($radius) {
     -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
     -ms-border-radius: $radius;
     border-radius: $radius;
   }

   .box {
     @include border-radius(10px);
   }
   ```

4. **继承**：使用`@extend`指令，一个选择器可以继承另一个选择器的所有样式。

   ```scss
   .message {
     border: 1px solid #ccc;
     padding: 10px;
     color: #333;
   }

   .success {
     @extend .message;
     border-color: green;
   }
   ```

5. **函数**：SCSS 提供了一些内置函数用于处理颜色、数字、字符串等，同时也允许用户自定义函数。

   ```scss
   $base-color: #036;

   .element {
     background-color: lighten($base-color, 20%);
   }
   ```

6. **条件和循环**：SCSS 支持使用`@if`、`@for`、`@each`和`@while`等控制指令。

   ```scss
   @for $i from 1 through 3 {
     .item-#{$i} {
       width: 2em * $i;
     }
   }
   ```

以上就是 SCSS 的一些基本用法，使用这些特性可以使你的 CSS 代码更加强大和灵活。
