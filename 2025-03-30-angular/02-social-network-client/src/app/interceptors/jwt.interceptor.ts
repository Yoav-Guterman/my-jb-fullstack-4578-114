import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2U3ZjM4ZThiMGVhYzU5YWNiYzMwYzYiLCJuYW1lIjoiYm9iIiwidXNlcm5hbWUiOiJib2IwMDAiLCJwYXNzd29yZCI6IjdmNzczN2ZkZGQyODQyYmMyYWZkYmYxODY4YWFhOGU5ODZiODMxMzNhMWYwMTBmZTk2NTM1YzE1ZTQ1ODQ2MjgiLCJjcmVhdGVkQXQiOiIyMDI1LTAzLTI5VDEzOjIwOjE0LjA3NVoiLCJmb2xsb3dpbmciOltdLCJpZCI6IjY3ZTdmMzhlOGIwZWFjNTlhY2JjMzBjNiIsImlhdCI6MTc0MzI1NDY0OH0.gFM5_qVUff61kpz9wxhNFUzddtZ7eNfsiFXMUURXtuQ'

  const reqWithJwt = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${jwt}`)
  })

  return next(reqWithJwt);
};
