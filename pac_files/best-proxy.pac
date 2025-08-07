function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.209.63.70:8192",
        "SOCKS 176.9.238.176:16379",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 1.54.73.223:16000",
        "SOCKS 192.177.33.54:8000",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 181.114.62.1:8085",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 103.132.52.32:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 114.198.244.57:3128",
        "SOCKS 60.13.42.157:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}