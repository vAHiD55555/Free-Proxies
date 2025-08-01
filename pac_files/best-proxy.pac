function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.65.117.38:7302",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 107.172.96.11:24283",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 212.110.188.202:34409",
        "SOCKS 38.147.98.190:8080",
        "SOCKS 116.103.133.168:1009",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 118.68.64.197:16000",
        "SOCKS 8.220.141.8:3128",
        "SOCKS 43.159.54.102:8888",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 27.79.240.83:16000",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 40.172.232.213:29214",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}