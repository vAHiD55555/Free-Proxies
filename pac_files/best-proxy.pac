function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.177.33.195:8000",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 185.117.119.112:8080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 135.181.213.184:40027",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 176.9.164.117:60011",
        "SOCKS 135.181.203.208:80",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 8.211.195.139:20",
        "SOCKS 97.79.251.186:80",
        "SOCKS 89.46.249.253:53018",
        "SOCKS 50.112.100.138:80",
        "SOCKS 91.84.99.28:80",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 118.71.132.44:1002",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 47.239.24.60:8888",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 37.120.162.180:42824",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}