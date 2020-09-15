## 示例
```js
  @Component({
    name: "Contractist",
  })
  export default class Contractist extends Vue {
    private searchData: Object = { // 筛选数据
      name: "",
      contractNumber: "",
      contactName: "",
      phone: "",
      startDate: "",
      endDate: "",
    };

    private tableData: any = { // 表格相关字段
      data: [],
      pageSize: 10,
      total: 1,
      page: 1
    };

    private curTagItems: any = 0; // 当前活动页签

    //获取列表数据
    private getContractInfoList() {
      let dto = {
        page: this.tableData.page,
        pageSize: this.tableData.pageSize,
        ...this.searchData
      }

      dto = getCache(this.$route) || dto; // 在此处获取缓存, 如果没有的话就使用原本数据

      pageContractInfo(dto).then(res => {
        this.tableData = res.data;

        pageCache.addCache({ // 接口响应后将请求参数写入缓存
          route: this.$route,
          params: dto,
          other: {
            curTagItems: this.curTagItems
          }
        })
      });
    }

    private initCurItems() {
      const otherCache = getCache(this.$route, 1); // 二参为1时获取other中的数据
      if(otherCache) this.curTagItems = otherCache.curTagItems;
    }

    mounted() {
      coverSearchData(this.$route, this.searchData);
      this.initCurItems();
    }
  }


```
## 配置
在`src\store\modules\pageCache.ts`文件中添加要保存缓存的页面路由及跳转后不删除缓存的路由
如下代码表示从`/laboratoryList`跳转到`path`为`/laboratoryHistory`的路由或`name`为`seeUploadTestForm`的路由时不会删除缓存
```ts
  public pageParamsMap: ObjectOf<pageMap> = { // 主页面与二级页面映射
    '/laboratoryList': <pageMap>{ // 实验室管理
      pathList: ['/laboratoryHistory'],
      nameList: ['seeUploadTestForm', 'uploadTestTable', 'municipalAdministrationTestForm', 'uploadTestTable', 'testForm'],
      isFirst: true,
    },
  }
```

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

