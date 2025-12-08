function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.195.139.95:44648",
        "SOCKS 103.126.87.181:7777",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 115.231.175.80:3000",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 150.40.181.177:5555",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 120.77.203.0:443",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 188.166.34.137:9000",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 167.235.155.77:47287",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}