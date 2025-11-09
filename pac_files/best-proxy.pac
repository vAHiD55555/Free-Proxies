function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 220.248.188.75:17211",
        "SOCKS 193.163.201.90:8080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 117.74.65.207:80",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 103.191.218.163:8199",
        "SOCKS 159.65.158.30:8888",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 152.53.171.242:33719",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 103.111.136.82:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}