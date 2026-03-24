# HousePlus Solar Series - WWW 域名重定向与 SEO 规范化指南

**Date**: March 24, 2026  
**Purpose**: 配置 www.houseplus.ng 到 houseplus.ng 的自动重定向，优化 SEO 权重集中

---

## 概述

为了确保搜索引擎权重不被分散，我们需要将所有访问 `www.houseplus.ng` 的用户自动重定向到主域名 `houseplus.ng`。这样做的好处是：

- ✅ **权重集中**：所有 SEO 权重都集中在一个规范 URL 上
- ✅ **用户体验**：无论用户输入哪个域名，都能访问同一个网站
- ✅ **搜索引擎友好**：Google 只会索引一个版本，避免重复内容问题
- ✅ **品牌一致性**：统一的域名展示

---

## 方案对比

| 方案 | 优点 | 缺点 | 推荐度 |
|------|------|------|--------|
| **Cloudflare 重定向规则** | 快速、易配置、无需代码修改 | 需要 Cloudflare 账户 | ⭐⭐⭐⭐⭐ |
| **GitHub Pages 重定向** | 无需第三方服务 | 需要额外配置、较复杂 | ⭐⭐⭐ |
| **DNS CNAME** | 简单 | 无法重定向 HTTP 到 HTTPS | ⭐ |

**推荐方案**：使用 **Cloudflare 重定向规则**（您已在使用 Cloudflare）

---

## 步骤 1：在 Cloudflare 中配置重定向规则

### 1.1 登录 Cloudflare
1. 访问 https://dash.cloudflare.com
2. 使用您的账户登录
3. 选择 **houseplus.ng** 域名

### 1.2 创建重定向规则
1. 在左侧菜单中，点击 **Rules** → **Page Rules**（或 **Redirect Rules**，取决于 Cloudflare 版本）
2. 点击 **Create Page Rule** 或 **Create Rule**

### 1.3 配置规则参数

**方式 A：使用 Page Rules（推荐简单方案）**

| 字段 | 值 |
|------|-----|
| **URL Pattern** | `www.houseplus.ng/*` |
| **Forwarding URL** | `https://houseplus.ng/$1` |
| **Status Code** | `301 Permanent Redirect` |

**方式 B：使用 Redirect Rules（更灵活）**

```
If hostname equals www.houseplus.ng
Then Redirect to https://houseplus.ng
With status code 301
```

### 1.4 保存规则
1. 点击 **Save** 或 **Deploy**
2. 等待规则生效（通常 1-5 分钟）

---

## 步骤 2：验证重定向是否生效

### 2.1 测试重定向
在浏览器中输入以下 URL，应该会自动跳转到 `https://houseplus.ng/`：
- `http://www.houseplus.ng`
- `https://www.houseplus.ng`
- `http://www.houseplus.ng/products.html`
- `https://www.houseplus.ng/about.html`

### 2.2 使用命令行验证（可选）
```bash
# 查看重定向状态码（应该是 301）
curl -I https://www.houseplus.ng/

# 输出示例：
# HTTP/2 301
# location: https://houseplus.ng/
```

### 2.3 使用在线工具验证
访问以下工具检查重定向：
- https://www.redirect-checker.org/
- https://www.seobility.net/en/seocheck/

---

## 步骤 3：更新 DNS 记录（可选但推荐）

为了完整性，建议在 Cloudflare DNS 中也添加 `www` 记录指向主站：

### 3.1 添加 CNAME 记录
1. 在 Cloudflare 中进入 **DNS** 部分
2. 点击 **Add Record**
3. 配置如下：

| 字段 | 值 |
|------|-----|
| **Type** | `CNAME` |
| **Name** | `www` |
| **Target** | `houseplus.ng` |
| **TTL** | `Auto` |
| **Proxy Status** | `DNS only` (灰色云朵) |

4. 点击 **Save**

---

## 步骤 4：更新 Google Search Console

### 4.1 添加新属性
1. 访问 https://search.google.com/search-console
2. 点击 **Add property**
3. 输入 `https://www.houseplus.ng/`
4. 验证所有权（使用 DNS 记录方法）

### 4.2 设置首选域
1. 在 Search Console 中打开 `https://houseplus.ng/` 属性
2. 进入 **Settings** → **Preferred domain**
3. 选择 `houseplus.ng` 作为首选域
4. 这会告诉 Google 将所有权重集中到这个版本

### 4.3 提交 URL 检查请求
1. 在 Search Console 中输入 `https://www.houseplus.ng/`
2. 点击 **Request indexing**
3. Google 会自动将其重定向到 `https://houseplus.ng/` 并索引

---

## 步骤 5：监控重定向效果

### 5.1 Google Analytics 4
1. 访问 https://analytics.google.com
2. 进入您的 GA4 属性
3. 检查 **Reports** → **Acquisition** → **Traffic source**
4. 确保所有流量都来自 `houseplus.ng`（而非 `www.houseplus.ng`）

### 5.2 Google Search Console
1. 监控 **Performance** 报告
2. 确保搜索结果中显示的都是 `https://houseplus.ng/` 的 URL
3. 检查是否有任何 **Crawl errors** 或 **Coverage issues**

---

## 常见问题 (FAQ)

### Q1: 301 重定向会影响 SEO 吗？
**A**: 不会。301 是永久重定向，Google 会完全传递页面权重。这是 SEO 最佳实践。

### Q2: 重定向需要多长时间生效？
**A**: 通常 1-5 分钟。如果超过 24 小时还未生效，请检查 DNS 设置。

### Q3: 我可以使用 302 临时重定向吗？
**A**: 不推荐。302 会告诉搜索引擎这是临时的，权重不会完全转移。请使用 301。

### Q4: 如果我想保留 www 版本呢？
**A**: 可以，但需要在 Google Search Console 中明确设置首选域，避免重复内容问题。

### Q5: 重定向会影响页面加载速度吗？
**A**: 影响极小。每次重定向增加约 100-200ms 的延迟，但对用户体验影响不大。

---

## 技术细节

### 重定向链
```
用户访问 www.houseplus.ng
    ↓
Cloudflare 检测到规则
    ↓
返回 301 状态码
    ↓
浏览器自动跳转到 houseplus.ng
    ↓
用户看到最终页面
```

### HTTP 头信息示例
```
Request:
GET / HTTP/1.1
Host: www.houseplus.ng

Response:
HTTP/1.1 301 Moved Permanently
Location: https://houseplus.ng/
Cache-Control: public, max-age=31536000
```

---

## SEO 规范化总结

### 当前配置
- **规范 URL**: `https://houseplus.ng/`
- **Canonical 标签**: 所有页面都指向 `https://houseplus.ng/`
- **Sitemap**: 包含 `https://houseplus.ng/` 的所有链接
- **robots.txt**: Sitemap 指向 `https://houseplus.ng/sitemap.xml`
- **WWW 重定向**: `www.houseplus.ng` → `houseplus.ng` (301)

### 权重流向
```
www.houseplus.ng (301) → houseplus.ng ✓
外部链接 → houseplus.ng ✓
搜索结果 → houseplus.ng ✓
所有权重集中在一个 URL ✓
```

---

## 验证清单

- ☐ 在 Cloudflare 中创建了重定向规则
- ☐ 测试了 `www.houseplus.ng` 重定向
- ☐ 验证了 301 状态码
- ☐ 添加了 CNAME 记录（可选）
- ☐ 在 Google Search Console 中设置了首选域
- ☐ 提交了 URL 检查请求
- ☐ 监控了 Analytics 和 Search Console 数据

---

## 后续建议

1. **定期监控**：每周检查一次 Google Search Console 的性能数据
2. **更新外链**：如果有外部网站链接到 `www.houseplus.ng`，考虑更新为主域名
3. **社交媒体**：在所有社交媒体资料中使用 `https://houseplus.ng/` 链接
4. **邮件签名**：在公司邮件签名中使用规范 URL

---

## 支持与反馈

如有任何问题或需要进一步协助，请联系：
- **Email**: jack@houseplus-ch.com
- **Phone**: +86 155 7811 9543
- **WhatsApp**: https://wa.me/8615578119543

---

**配置完成时间**: 预计 5-10 分钟  
**生效时间**: 1-24 小时  
**维护周期**: 一次性配置，无需定期维护
