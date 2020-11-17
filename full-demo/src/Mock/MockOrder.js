import Mock from 'mockjs'


export default Mock.mock('http://localhost:5000/order','get',
[{"id":11,"note":`order number ${Mock.Random.id()}`},
{"id":12,"note":`order number ${Mock.Random.id()}`},
{"id":13,"note":`order number ${Mock.Random.id()}`},
{"id":4,"note":`order number ${Mock.Random.id()}`},
{"id":5,"note":`order number ${Mock.Random.id()}`},
{"id":6,"note":`order number ${Mock.Random.id()}`},
{"id":7,"note":"order number 7"},
{"id":8,"note":"order number 8"},
{"id":9,"note":"order number 9"}]
)