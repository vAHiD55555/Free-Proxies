function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 42.118.74.104:16000",
        "SOCKS 135.181.213.184:40027",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 58.186.248.240:16000",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 51.159.159.73:80",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 27.71.228.21:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}