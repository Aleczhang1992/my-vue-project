//路由配置
const Hello = r => require(['components/Hello'], r);
const TestPage = r => require(['components/TestPage'], r);

// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {path: '', redirect: {name: 'hello'}},
  {path: '/hello', component: Hello, name: 'hello'},
  {path: '/testPage', component: TestPage, name: 'testPage'}
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
//routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
