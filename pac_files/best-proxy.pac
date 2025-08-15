function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.240.74:9053",
        "SOCKS 195.114.7.6:8095",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 39.105.27.30:3128",
        "SOCKS 84.241.30.214:8080",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 131.196.115.147:999",
        "SOCKS 109.92.141.2:999",
        "SOCKS 42.118.0.155:16000",
        "SOCKS 187.125.52.250:8080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 8.209.249.89:3128",
        "SOCKS 160.191.180.202:8999",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 65.108.203.36:28080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}