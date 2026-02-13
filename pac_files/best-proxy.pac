function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.100.209.184:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 91.242.229.96:1080",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 8.213.156.191:50",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 123.54.197.50:21196",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 110.235.255.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}