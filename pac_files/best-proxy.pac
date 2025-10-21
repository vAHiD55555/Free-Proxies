function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.183:10814",
        "SOCKS 103.227.187.75:8080",
        "SOCKS 103.148.178.10:80",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 185.93.89.165:9030",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 40.172.232.213:8989",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 137.184.152.66:20616",
        "SOCKS 15.160.181.77:8331",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 38.54.1.17:8888",
        "SOCKS 91.121.106.55:4444",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}