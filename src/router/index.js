import Vue from 'vue'
import VueRouter from 'vue-router'
import Training01 from "../views/training-01/Training01";
import Training02 from "../views/training-02/Training02";
import Training03 from "../views/training-03/Training03";
import Training04 from "../views/training-04/Training04";
import Training05 from "../views/training-05/Training05";
import Training06 from "../views/training-06/Training06";
import Training07 from "../views/training-07/Training07";
import Training08 from "../views/training-08/Training08";
import Training09 from "../views/training-09/Training09";
import Training10 from "../views/training-10/Training10";
import Training11 from "../views/training-11/Training11";
import Training12 from "../views/training-12/Training12";
import Training13 from "../views/training-13/Training13";
import Training14 from "../views/training-14/Training14";
import Training15 from "../views/training-15/Training15";

Vue.use(VueRouter)

  const routes = [
    {
      path:'/training-01',
      name:"training-01",
      component:Training01
    },{
      path:'/training-02',
      name:"training-02",
      component:Training02
    },{
      path:'/training-03',
      name:"training-03",
      component:Training03
    },{
      path:'/training-04',
      name:"training-04",
      component:Training04
    },{
      path:'/training-05',
      name:"training-05",
      component:Training05
    },{
      path:'/training-06',
      name:"training-06",
      component:Training06
    },{
      path:'/training-07',
      name:"training-07",
      component:Training07
    },{
      path:'/training-08',
      name:"training-08",
      component:Training08
    },{
      path:'/training-09',
      name:"training-09",
      component:Training09
    },{
      path:'/training-10',
      name:"training-10",
      component:Training10
    },{
      path:'/training-11',
      name:"training-11",
      component:Training11
    },{
      path:'/training-12',
      name:"training-12",
      component:Training12
    },{
      path:'/training-13',
      name:"training-13",
      component:Training13
    },{
      path:'/training-14',
      name:"training-14",
      component:Training14
    }, {
      path: '/training-15',
      name: "training-15",
      component: Training15
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
