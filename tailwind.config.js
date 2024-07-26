/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        customwhite:'#ffffff',
        bgcolor:'#f9f9ff',
        customfont:'#777777',
        'pinkcst': '#fbc2eb',
        'bluecst': '#a6c1ee',
      },
      animation:{
        'bouceslow': 'bounce 8s infinite',
        'htm/css':'loadprogressHtml 2s ease-out forwards',
        'javascript':'loadprogressjavascript 2s ease-out forwards',
        'java':'loadprogressjava 2s ease-out forwards',
        'datastructure':'loadprogressdatastructure 2s ease-out forwards',
        'ReactJs':'loadprogressReactJs 2s ease-out forwards',
        'ExpresNodeJs':'loadprogressExpNodeJs 2s ease-out forwards',
        'phone':'phone 0.5s ease-in-out ',
      },
      keyframes:{
        'bouceslow':{
          '0%, 100%': { transform: 'translateY(10)' },
          '15%': { transform: 'translateY(-65%)' },
        },
        'loadprogressHtml':{
          '0%':{width:'0%'},
          '100%':{width:'80%'}
        },
        'loadprogressjavascript':{
          '0%':{width:'0%'},
          '100%':{width:'60%'}
        },
        'loadprogressjava':{
          '0%':{width:'0%'},
          '100%':{width:'70%'}
        },
        'loadprogressdatastructure':{
          '0%':{width:'0%'},
          '100%':{width:'55%'}
        },
        'loadprogressReactJs':{
          '0%':{width:'0%'},
          '100%':{width:'40%'}
        },
        'loadprogressExpNodeJs':{
          '0%':{width:'0%'},
          '100%':{width:'40%'}
        },
        'phone':{
          '0%':{transform:'translateX(-100%)'},
          '100%':{transform:'translateX(0%)'}
        },
      },
    },
  },
  plugins: [],
}