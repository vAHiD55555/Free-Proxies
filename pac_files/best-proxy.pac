function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.28.121.58:80",
        "SOCKS 47.90.167.27:999",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 36.255.98.180:8081",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 176.108.146.180:1080",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 14.103.9.129:7890",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 13.115.193.75:9181",
        "SOCKS 178.165.42.166:3128",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 62.60.131.193:5123",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}