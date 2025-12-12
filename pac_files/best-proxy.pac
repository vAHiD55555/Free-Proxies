function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.74.65.207:80",
        "SOCKS 117.74.65.207:443",
        "SOCKS 128.140.76.145:55143",
        "SOCKS 45.122.123.29:8199",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 150.95.26.146:7080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 43.217.158.81:41804",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 8.222.177.13:1100",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 195.133.8.14:8080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 204.44.87.247:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}