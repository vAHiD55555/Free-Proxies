function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.94:29225",
        "SOCKS 116.103.135.73:1006",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 103.81.194.163:8080",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 135.181.213.184:40027",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 58.186.92.98:16000",
        "SOCKS 139.59.228.95:8118",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 8.215.12.103:8085",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 129.213.68.20:54321",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 103.81.194.162:8080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 134.209.29.120:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}