function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.250.198.146:7777",
        "SOCKS 47.83.228.1:1122",
        "SOCKS 43.134.120.6:20002",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 137.59.51.113:5566",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 43.156.15.111:20002",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 185.93.89.182:6000",
        "SOCKS 54.154.27.41:357",
        "SOCKS 47.76.249.160:1011",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}