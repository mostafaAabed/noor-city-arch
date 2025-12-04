## Reload config
docker exec -it 7c0364b8bd18 curl -s \
  -H "x-tyk-authorization: 352d20ee67be67f6340b4c0605b044b7" \
  http://localhost:8080/tyk/reload