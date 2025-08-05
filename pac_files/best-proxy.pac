function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 14.172.146.226:20399",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 168.197.42.74:8082",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 45.59.117.2:8080",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 51.20.192.194:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}