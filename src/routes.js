import admin from './components/admin.vue'
import hello from './components/HelloWorld.vue'
import adminPage from './components/adminPage.vue'
import guidePage from './components/guidePage.vue'

export default [
    {path:'/',component: hello},
    {path:'/admin', component: admin},
    {path:'/adminPage',component: adminPage},
    {path:'/guidePage',component: guidePage}
]