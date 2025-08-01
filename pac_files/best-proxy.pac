function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 182.252.69.197:8080",
        "SOCKS 52.221.222.182:80",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 8.211.195.173:8060",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 102.223.154.177:8080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 189.180.46.175:8118",
        "SOCKS 116.103.131.240:1023",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 8.212.165.164:20",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}