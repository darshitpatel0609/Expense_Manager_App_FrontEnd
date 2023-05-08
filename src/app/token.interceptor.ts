// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable, retry } from 'rxjs';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     // return next.handle(request);
//     console.log("token interceptor");
    
//     let token = localStorage.getItem("token") as string

//     if (request.method.toLowerCase() == "post") { // 
     
//       console.log("yes we are in post request");
//       if (request.body instanceof FormData) {
//         console.log("AuthToken Added in Body")
//         request = request.clone({
//           body: request.body.append("token", token)
//         })
//       } else {
//         console.log(typeof(request.body));
//         console.log(request.body);

//         // let body = request.body
//         // return next.handle(request.clone({
//         //   setHeaders:{authToken} 
//         //   ,body:{body,"authToken":authToken}
//         // }))
        
//          // let body = request.body
//         // body["authToken"] = authToken
          
//       }

//     }

//     console.log("auth Token interceptor.....")
//     return next.handle(request.clone({ setHeaders: { token } })); // go forward with header  
//   }
// }