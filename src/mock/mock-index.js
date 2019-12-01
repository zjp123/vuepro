const Mock = require('mockjs')
const Random = Mock.Random
// 输出结果
console.log(Random.image('200x100', '#ffcc33', '#FFF', 'png', '!'))

let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-4': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'src': Random.image('30x30', '#ffcc33', '#FFF', 'png', '!')
    }]
})

export default data

