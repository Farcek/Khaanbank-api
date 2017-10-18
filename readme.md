# Khanback RESTful API
version 0.0.1

## Response statusCode
---

хариултын response.statusCode == 200 бол тухайн хариултыг success гэж үзнэ.

statusCode != 200 бол тухайн хариултыг ямар нэг алдаа гарсан гэж үнэ. Алдааний format [error.d.ts](error.d.ts)


## Request Params
---

POST - Хүсэлтийн бүх param-д  body param-р дамжина

GET  - хүсэлтийн бүх param-д Query param-p  дамжина