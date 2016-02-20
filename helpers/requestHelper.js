function getToken(request) {
    return request.body.token || request.query.token || request.headers['x-access-token'];
}