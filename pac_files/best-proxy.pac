function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 68.71.243.14:4145",
        "SOCKS 37.120.162.180:11869",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 84.255.40.228:8998",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 37.120.162.180:18080",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 43.209.8.12:93",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 124.248.190.47:1080",
        "SOCKS 37.120.162.180:29933",
        "SOCKS 110.235.246.243:1080",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}