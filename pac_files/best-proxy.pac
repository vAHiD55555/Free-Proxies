function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.233.254.7:1080",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 202.62.59.138:1080",
        "SOCKS 36.255.98.167:5060",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 103.190.113.123:8080",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 62.60.131.184:10410",
        "SOCKS 72.10.160.172:15551",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 193.233.254.8:1080",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 72.10.164.178:2493",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}