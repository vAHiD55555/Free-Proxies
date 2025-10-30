function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.123.220.173:999",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 154.236.177.102:1977",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 120.77.203.0:443",
        "SOCKS 145.40.96.157:443",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 16.78.104.244:9078",
        "SOCKS 110.34.1.178:7777",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 103.66.197.2:8080",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 152.53.36.101:46691",
        "SOCKS 103.122.1.26:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}