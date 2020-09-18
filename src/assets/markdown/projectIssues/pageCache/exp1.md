
## 使用方法
```js
  // 引入 
  import {
    pageCache,
    getCache,
    coverSearchData
  } from "@/store/modules/pageCache"

  // 列表参数, 先获取缓存
  dto = getCache(this.$route) || dto;

  // 获取其他参数
  other = getCache(this.$route, 1);

  // 在列表接口响应后将此次请求写入缓存
  pageCache.addCache({
    route: this.$route, // 当前路由, 必填
    params: dto, // 参数, 必填
    other: { // 其他需要缓存的数据, 选填
      curTagItems: this.curTagItems
    }, 
  })

  // 覆盖搜索框参数
  coverSearchData(this.$route, this.searchData);
```

