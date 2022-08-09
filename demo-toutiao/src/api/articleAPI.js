// 文章相关的API接口，都封装到这个模块中

// 向外按需导出一个API函数
import request from '@/utils/request'

export const getArticleListAPI = function(_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}