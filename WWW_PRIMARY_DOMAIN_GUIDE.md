# HousePlus Solar Series - WWW 主域名配置指南

**Date**: March 24, 2026  
**Purpose**: 将 www.houseplus.ng 配置为官方主域名，并设置反向重定向规则

---

## 概述

您的网站现已全面配置为使用 **www.houseplus.ng** 作为官方主域名。这是一种经典且专业的做法，具有以下优势：

- ✅ **品牌专业感**：www 前缀传达了企业级网站的形象
- ✅ **权重集中**：所有 SEO 权重集中在 `www.houseplus.ng`
- ✅ **用户友好**：用户习惯性地输入 www 前缀
- ✅ **DNS 灵活性**：www 作为 CNAME 记录更易于管理

---

## 已完成的代码配置

### 1. CNAME 文件更新
✅ **已更新** - GitHub Pages 现在指向 `www.houseplus.ng`

```
www.houseplus.ng
```

### 2. Sitemap 更新
✅ **已更新** - `sitemap.xml` 中的所有 URL 现在使用 `https://www.houseplus.ng/`

示例：
```xml
<url>
  <loc>https://www.houseplus.ng/</loc>
  <loc>https://www.houseplus.ng/products.html</loc>
  <loc>https://www.houseplus.ng/about.html</loc>
</url>
```

### 3. robots.txt 更新
✅ **已更新** - Sitemap 路径已改为 `https://www.houseplus.ng/sitemap.xml`

```
Sitemap: https://www.houseplus.ng/sitemap.xml
```

### 4. 所有 HTML 页面更新
✅ **已更新** - 所有页面的 Meta 标签和 Canonical 链接都指向 `www.houseplus.ng`

包括：
- `index.html` (首页)
- `products.html` (产品中心)
- `about.html` (关于我们)
- `contact.html` (联系我们)
- `news.html` (新闻动态)

更新内容：
- `og:url` Meta 标签
- `canonical` 链接
- JSON-LD 结构化数据中的 URL
- 所有内部链接

---

## 您需要在 Cloudflare 中完成的配置

### 步骤 1：配置 DNS 记录

#### 1.1 添加或更新 CNAME 记录
1. 登录 Cloudflare 并选择 `houseplus.ng` 域名
2. 进入 **DNS** 部分
3. 找到或创建 `www` 的 CNAME 记录：

| 字段 | 值 |
|------|-----|
| **Type** | `CNAME` |
| **Name** | `www` |
| **Target** | `leosmithing.github.io` |
| **TTL** | `Auto` |
| **Proxy Status** | `DNS only` (灰色云朵) |

4. 点击 **Save**

#### 1.2 配置 Apex 域名（可选但推荐）
为了让 `houseplus.ng`（不带 www）也能工作，建议添加以下 A 记录：

| 字段 | 值 |
|------|-----|
| **Type** | `A` |
| **Name** | `@` (或 houseplus.ng) |
| **IPv4 Address** | `185.199.108.153` |
| **TTL** | `Auto` |
| **Proxy Status** | `DNS only` (灰色云朵) |

重复添加以下 3 个 IP：
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

---

### 步骤 2：配置重定向规则（重要）

为了确保访问 `houseplus.ng`（不带 www）的用户自动跳转到 `www.houseplus.ng`，请在 Cloudflare 中创建一个重定向规则：

#### 方式 A：使用 Page Rules
1. 进入 **Rules** → **Page Rules**
2. 点击 **Create Page Rule**
3. 配置如下：

| 字段 | 值 |
|------|-----|
| **URL Pattern** | `houseplus.ng/*` |
| **Setting** | Forwarding URL |
| **Destination URL** | `https://www.houseplus.ng/$1` |
| **Status Code** | `301 Permanent Redirect` |

4. 点击 **Save and Deploy**

#### 方式 B：使用 Redirect Rules（更现代）
1. 进入 **Rules** → **Redirect Rules**
2. 点击 **Create Rule**
3. 配置如下：

```
If hostname equals houseplus.ng
Then Redirect to https://www.houseplus.ng
With status code 301
```

4. 点击 **Deploy**

---

### 步骤 3：在 GitHub 中启用 HTTPS

1. 访问您的 GitHub 仓库：https://github.com/leosmithing/houseplus-solar-website
2. 进入 **Settings** → **Pages**
3. 在 **Custom domain** 字段中输入 `www.houseplus.ng`
4. 点击 **Save**
5. 等待 GitHub 验证域名（通常 1-5 分钟）
6. 一旦验证成功，勾选 **Enforce HTTPS**

---

## 验证配置是否生效

### 1. 测试 www 主域名
在浏览器中访问以下链接，应该能正常加载：
- `https://www.houseplus.ng/`
- `https://www.houseplus.ng/products.html`
- `https://www.houseplus.ng/about.html`
- `https://www.houseplus.ng/news.html`

### 2. 测试 Apex 域名重定向
在浏览器中访问 `https://houseplus.ng/`，应该自动跳转到 `https://www.houseplus.ng/`

验证方法：
```bash
# 查看重定向状态码（应该是 301）
curl -I https://houseplus.ng/

# 输出示例：
# HTTP/2 301
# location: https://www.houseplus.ng/
```

### 3. 使用在线工具验证
- https://www.redirect-checker.org/
- 输入 `https://houseplus.ng/`，应该显示 301 重定向到 `https://www.houseplus.ng/`

---

## 更新 Google Search Console

### 1. 添加新属性
1. 访问 https://search.google.com/search-console
2. 点击 **Add property**
3. 输入 `https://www.houseplus.ng/`
4. 验证所有权（使用 DNS 记录方法）

### 2. 设置首选域
1. 打开 `https://www.houseplus.ng/` 属性
2. 进入 **Settings** → **Preferred domain**
3. 选择 `www.houseplus.ng` 作为首选域

### 3. 提交 Sitemap
1. 进入 **Sitemaps**
2. 点击 **Add/test sitemap**
3. 输入 `https://www.houseplus.ng/sitemap.xml`
4. 点击 **Submit**

### 4. 处理旧域名
如果之前已在 Google Search Console 中添加了 `https://houseplus.ng/` 属性：
1. 进入该属性
2. 进入 **Settings** → **Change of Address**
3. 选择 `https://www.houseplus.ng/` 作为新地址
4. Google 会自动转移权重

---

## 全站 URL 规范化总结

### 规范 URL
- **主域名**: `https://www.houseplus.ng/`
- **首页**: `https://www.houseplus.ng/`
- **产品页**: `https://www.houseplus.ng/products.html`
- **关于页**: `https://www.houseplus.ng/about.html`
- **新闻页**: `https://www.houseplus.ng/news.html`
- **联系页**: `https://www.houseplus.ng/contact.html`

### 重定向规则
```
houseplus.ng → www.houseplus.ng (301)
```

### SEO 配置
- ✅ Canonical 标签：所有页面都指向 www 版本
- ✅ Sitemap：包含所有 www 版本的 URL
- ✅ robots.txt：Sitemap 指向 www 版本
- ✅ Open Graph：og:url 使用 www 版本
- ✅ JSON-LD：结构化数据使用 www 版本

---

## 常见问题 (FAQ)

### Q1: 为什么要用 www 作为主域名？
**A**: www 作为主域名是行业标准做法，具有以下优势：
- 更容易通过 DNS CNAME 记录管理
- 用户习惯性输入 www
- 传达企业级网站的专业形象

### Q2: 不带 www 的域名会怎样？
**A**: 通过 301 重定向规则，所有访问 `houseplus.ng` 的用户会自动跳转到 `www.houseplus.ng`，权重也会完全转移。

### Q3: 301 重定向会影响 SEO 吗？
**A**: 不会。301 是永久重定向，Google 会完全传递页面权重。这是 SEO 最佳实践。

### Q4: 重定向需要多长时间生效？
**A**: 通常 1-5 分钟。如果超过 24 小时还未生效，请检查 Cloudflare 和 GitHub 的配置。

### Q5: 我可以改回不带 www 的域名吗？
**A**: 可以，但需要重新配置 CNAME 和重定向规则。建议保持 www 作为主域名以保持一致性。

---

## 监控与维护

### 定期检查
- **每周**：检查 Google Search Console 的性能数据
- **每月**：检查 GitHub Pages 的部署状态
- **每季度**：检查外部链接是否指向正确的主域名

### 外部链接管理
如果有其他网站链接到您的网站，建议更新为 `https://www.houseplus.ng/` 以获得最佳 SEO 效果。

### 社交媒体与营销
- 在所有社交媒体资料中使用 `https://www.houseplus.ng/`
- 在邮件签名中使用 `https://www.houseplus.ng/`
- 在名片和营销物料中使用 `https://www.houseplus.ng/`

---

## 技术细节

### DNS 解析流程
```
用户输入 www.houseplus.ng
    ↓
DNS 查询 CNAME 记录
    ↓
CNAME 指向 leosmithing.github.io
    ↓
GitHub Pages 服务器响应
    ↓
用户看到网站内容
```

### 重定向流程
```
用户输入 houseplus.ng
    ↓
Cloudflare 检测到规则
    ↓
返回 301 状态码
    ↓
浏览器自动跳转到 www.houseplus.ng
    ↓
用户看到最终页面
```

---

## 验证清单

- ☐ 在 Cloudflare 中配置了 www CNAME 记录
- ☐ 在 Cloudflare 中配置了 Apex 域名 A 记录（可选）
- ☐ 在 Cloudflare 中创建了 301 重定向规则
- ☐ 在 GitHub Pages 设置中输入了 `www.houseplus.ng`
- ☐ 在 GitHub Pages 中启用了 Enforce HTTPS
- ☐ 测试了 www 主域名访问
- ☐ 测试了 Apex 域名重定向
- ☐ 在 Google Search Console 中添加了 www 属性
- ☐ 在 Google Search Console 中设置了首选域
- ☐ 提交了 Sitemap 到 Google Search Console

---

## 支持与反馈

如有任何问题或需要进一步协助，请联系：
- **Email**: jack@houseplus-ch.com
- **Phone**: +86 155 7811 9543
- **WhatsApp**: https://wa.me/8615578119543

---

**配置完成时间**: 预计 10-15 分钟  
**生效时间**: 1-24 小时  
**维护周期**: 一次性配置，无需定期维护
