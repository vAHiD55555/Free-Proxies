function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.170:21277",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 123.54.197.20:20303",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 1.12.62.237:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 144.31.0.166:3128",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 123.54.197.25:20598",
        "SOCKS 123.54.197.50:22669",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 139.59.7.217:36590",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}