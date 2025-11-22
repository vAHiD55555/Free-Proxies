function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.153.141.90:4216",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 223.25.109.114:8199",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 8.222.186.44:1111",
        "SOCKS 78.12.220.164:1002",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 190.60.36.26:999",
        "SOCKS 3.26.184.16:443",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 47.91.115.179:1000",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}