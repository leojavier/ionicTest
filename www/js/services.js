/*global app */
app.factory('menu',function(){
  var data = [
    {
      title:false,
      name:'Current Routine',
      link:'#/app/current-routine',
      icon:'ion-ios-home'
    },
    {
      title:false,
      name:'Load Routine',
      link:'#/app/routines',
      icon:'ion-ios-bookmarks',
      routines:'25'
    },
    {
      title:'Add routines and exercises',
      name:'Create new routine',
      link:'#/load-routine',
      icon:'ion-ios-plus-outline'
    },
    {
      title:false,
      name:'Add new exercise',
      link:'',
      icon:'ion-ios-plus-outline'
    },
    {
      title:' ',
      name:'Settings',
      link:'',
      icon:'ion-ios-gear'
    }
  ];
  return data;
});

app.factory('routines', function(){
  var routines = [
    {
      id:765867,
      name:'Back Routine',
      active:true,
      exercises:[
        {
          name:'pullover',
          targetMuscle:'Lower back',
          sets: [
            {
              id:01,
              weight:45,
              reps:10,
              completed:false
            },
            {
              id:02,
              weight:55,
              reps:10,
              completed:false
            },
            {
              id:03,
              weight:65,
              reps:10,
              completed:false
            }
          ],
          completed:false
        },
        {
          name:'Low press',
          sets: [
            {
              id:01,
              weight:45,
              reps:10,
              completed:false
            },
            {
              id:02,
              weight:55,
              reps:10,
              completed:false
            },
            {
              id:03,
              weight:65,
              reps:10,
              completed:false
            }
          ],
          completed:false
        },
        {
          name:'Rope lifting',
          sets: [
            {
              id:01,
              weight:45,
              reps:10,
              completed:false
            },
            {
              id:02,
              weight:55,
              reps:10,
              completed:false
            },
            {
              id:03,
              weight:65,
              reps:10,
              completed:false
            }
          ],
          completed:false
        },
        {
        name:'pullover',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Low press',
        targetMuscle:'Trapecius',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Rope lifting',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'pullover',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Low press',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Rope lifting',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'pullover',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Low press',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Rope lifting',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'pullover',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Low press',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      },
      {
        name:'Rope lifting',
        sets: [
          {
            id:01,
            weight:45,
            reps:10,
            completed:false
          },
          {
            id:02,
            weight:55,
            reps:10,
            completed:false
          },
          {
            id:03,
            weight:65,
            reps:10,
            completed:false
          }
        ],
        completed:false
      }

      ]
    },
    {
      id:3452435345,
      name:'Legs Routine',
      active:false,
      exercises:[
        {
          name:'Leg press',
          sets: [
            {
              id:01,
              weight:45,
              reps:10,
              completed:false
            },
            {
              id:02,
              weight:55,
              reps:10,
              completed:false
            },
            {
              id:03,
              weight:65,
              reps:10,
              completed:false
            }
          ],
          completed:false
        }
      ]
    }
  ];

  return routines;
});

app.factory('exercise', function(){
  var exercise = [
    {
      name:'pullover',
      targetMuscle:'Lower back',
      sets: [
        {
          id:01,
          weight:45,
          reps:10,
          completed:false
        },
        {
          id:02,
          weight:55,
          reps:10,
          completed:false
        },
        {
          id:03,
          weight:65,
          reps:10,
          completed:false
        }
      ],
      completed:false
    },
    {
      name:'Low press',
      sets: [
        {
          id:01,
          weight:45,
          reps:10,
          completed:false
        },
        {
          id:02,
          weight:55,
          reps:10,
          completed:false
        },
        {
          id:03,
          weight:65,
          reps:10,
          completed:false
        }
      ],
      completed:false
    },
    {
      name:'Rope lifting',
      sets: [
        {
          id:01,
          weight:45,
          reps:10,
          completed:false
        },
        {
          id:02,
          weight:55,
          reps:10,
          completed:false
        }
  ]
}];

  return exercise;
});
