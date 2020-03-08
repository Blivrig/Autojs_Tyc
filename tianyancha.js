/**
 * 本项目思路来源于抖音的
 */



function openTianyancha(){
    app.startActivity({ 
        action: "VIEW", 
        data:"op8au3db://openlink.cc/c/eyJjIjoiYmFpZHUiLCJkIjp7ImFwcFBhZ2VOYW1lIjoiY29tcGFueURldGFpbCIsInBhcmFtMSI6IjIzNDAyMzczIiwicGFyYW0yIjoiIiwicGFyYW0zIjoiIn0sIm0iOiJEQzdkUWJGcXVKVUFBQUZ3dDl0YWFpQk1MWFpzMTVrWmM1ZlRiUmlxVWV1djBpckFzNDhFTG9EdEJJMCJ9" , 
        packageName: "com.tianyancha.skyeye", 
    });
}
function openTycHome(){
    app.startActivity({ 
        action: "VIEW", 
        data:"op8au3db://openlink.cc/c/eyJjIjoiQmFubmVyMSIsImQiOnsiYXBwUGFnZU5hbWUiOiIiLCJwYXJhbTEiOiIiLCJwYXJhbTIiOiIiLCJwYXJhbTMiOiIifSwibSI6InZiUGNuR25uMjJVQUFBRnd1TmlSczI2SWlUaGRtZUoxMjRDMEREY3E5WkZ2YS1NWWlGWlQ0MU1BWC00In0=",
        packageName: "com.tianyancha.skyeye"
    });
}

openTycHome();
//openTianyancha();