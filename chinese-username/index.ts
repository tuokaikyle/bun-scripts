const top50raw = `1-10	王	李	张	刘	陈	杨	黄	赵	吴	周
11-20	徐	孙	马	朱	胡	郭	何	林	罗	高
21-30	郑	梁	谢	宋	唐	许	韩	邓	冯	曹
31-40	彭	曾	肖	田	董	潘	袁	蔡	蒋	余
41-50	于	杜	叶	程	魏	苏	吕	丁	任	卢`

const surnames = top50raw.match(/[\u4e00-\u9fa5]/g);
console.log(surnames)