var injectHeaderMW = new TykJS.TykMiddleware.NewMiddleware({});

injectHeaderMW.NewProcessRequest(function(request, session, config) {

    log(JSON.stringify(request.Headers))

    request.SetHeaders['custom-uid'] = create_UUID();

	return injectHeaderMW.ReturnData(request, {});
});

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}