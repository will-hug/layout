<!--
 * @Author: duguozhi 1447607151@qq.com
 * @Date: 2024-07-02 10:03:24
 * @LastEditors: duguozhi 1447607151@qq.com
 * @LastEditTime: 2024-07-02 10:09:09
 * @FilePath: \layout\src\views\redirect.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
let path = route.params.path
console.log('route', route.params)
router.replace(
  {
    path: '/' + path,
    query: route.query
  }
)
</script>