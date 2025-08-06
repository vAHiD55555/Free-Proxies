function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.10.229.243:7777",
        "SOCKS 8.219.147.176:1111",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 27.79.215.129:16000",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 51.158.117.213:16379",
        "SOCKS 45.166.93.113:999",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 47.236.163.74:8080",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 27.79.171.61:16000",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 91.84.99.28:80",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}